import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

interface AccessLogData {
  ip_address: string;
  user_agent: string;
  referer: string;
  country?: string;
  region?: string;
  city?: string;
  timezone: string;
  device_type: string;
  browser: string;
  os: string;
  screen_resolution: string;
  language: string;
  session_id: string;
  page_url: string;
  action_type: string;
  additional_data?: any;
}

const generateSessionId = () => {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};

const getDeviceInfo = () => {
  const ua = navigator.userAgent;
  
  // Detect device type
  let deviceType = 'desktop';
  if (/Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    deviceType = /iPad/i.test(ua) ? 'tablet' : 'mobile';
  }
  
  // Detect browser
  let browser = 'unknown';
  if (ua.includes('Chrome')) browser = 'Chrome';
  else if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Safari')) browser = 'Safari';
  else if (ua.includes('Edge')) browser = 'Edge';
  
  // Detect OS
  let os = 'unknown';
  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac')) os = 'macOS';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iOS')) os = 'iOS';
  
  return { deviceType, browser, os };
};

const getLocationInfo = async (): Promise<{country?: string, region?: string, city?: string}> => {
  try {
    // Using ipapi.co for geolocation (free tier)
    const response = await fetch('https://ipapi.co/json/');
    if (response.ok) {
      const data = await response.json();
      return {
        country: data.country_name,
        region: data.region,
        city: data.city
      };
    }
  } catch (error) {
    console.warn('Could not fetch location info:', error);
  }
  return {};
};

const getClientIP = async (): Promise<string> => {
  try {
    // Multiple fallback services for IP detection
    const services = [
      'https://ipapi.co/ip/',
      'https://api.ipify.org?format=text',
      'https://icanhazip.com'
    ];
    
    for (const service of services) {
      try {
        const response = await fetch(service);
        if (response.ok) {
          const ip = await response.text();
          return ip.trim();
        }
      } catch (e) {
        continue;
      }
    }
  } catch (error) {
    console.warn('Could not fetch IP:', error);
  }
  return 'unknown';
};

export const useAccessLogger = () => {
  const { user } = useAuth();
  const hasLoggedRef = useRef(false);
  const sessionIdRef = useRef(generateSessionId());

  const logAccess = async (actionType: string = 'page_visit', additionalData?: any) => {
    try {
      const ip = await getClientIP();
      const location = await getLocationInfo();
      const deviceInfo = getDeviceInfo();
      
      const logData: AccessLogData = {
        ip_address: ip,
        user_agent: navigator.userAgent,
        referer: document.referrer || 'direct',
        ...location,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        device_type: deviceInfo.deviceType,
        browser: deviceInfo.browser,
        os: deviceInfo.os,
        screen_resolution: `${screen.width}x${screen.height}`,
        language: navigator.language,
        session_id: sessionIdRef.current,
        page_url: window.location.href,
        action_type: actionType,
        additional_data: additionalData || {}
      };

      const { error } = await supabase
        .from('access_logs')
        .insert({
          user_id: user?.id || null,
          ...logData
        });

      if (error) {
        console.error('Error logging access:', error);
      } else {
        console.log('Access logged successfully:', {
          action: actionType,
          ip: ip,
          user: user?.email || 'anonymous',
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('Error in access logging:', error);
    }
  };

  // Log initial page visit
  useEffect(() => {
    if (!hasLoggedRef.current) {
      hasLoggedRef.current = true;
      logAccess('page_visit', {
        is_initial_load: true,
        user_authenticated: !!user
      });
    }
  }, [user]);

  // Log route changes
  useEffect(() => {
    const handleRouteChange = () => {
      logAccess('route_change', {
        new_url: window.location.href
      });
    };

    // Listen to popstate for browser navigation
    window.addEventListener('popstate', handleRouteChange);
    
    // Override pushState and replaceState to catch programmatic navigation
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleRouteChange();
    };
    
    history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      handleRouteChange();
    };

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  // Log authentication events
  useEffect(() => {
    if (user) {
      logAccess('user_login', {
        user_id: user.id,
        user_email: user.email
      });
    }
  }, [user]);

  return { logAccess };
};