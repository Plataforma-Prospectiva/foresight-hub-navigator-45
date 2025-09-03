import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";
import { useSupabaseAuth } from "@/context/SupabaseAuthContext";
import { useNavigate } from "react-router-dom";

export const SupabaseAuthModal = () => {
  const { user, signOut, loading } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
  };

  if (loading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <User className="w-4 h-4" />
      </Button>
    );
  }

  if (user) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm text-slate-600">
          {user.user_metadata?.display_name || user.email}
        </span>
        <Button variant="ghost" size="sm" onClick={handleSignOut}>
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <Button variant="ghost" size="sm" onClick={() => navigate('/auth')}>
      <User className="w-4 h-4" />
    </Button>
  );
};