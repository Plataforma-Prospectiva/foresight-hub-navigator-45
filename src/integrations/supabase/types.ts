export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      access_logs: {
        Row: {
          action_type: string
          additional_data: Json | null
          browser: string | null
          city: string | null
          country: string | null
          created_at: string
          device_type: string | null
          id: string
          ip_address: string
          language: string | null
          os: string | null
          page_url: string | null
          referer: string | null
          region: string | null
          screen_resolution: string | null
          session_id: string | null
          timezone: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action_type?: string
          additional_data?: Json | null
          browser?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          device_type?: string | null
          id?: string
          ip_address: string
          language?: string | null
          os?: string | null
          page_url?: string | null
          referer?: string | null
          region?: string | null
          screen_resolution?: string | null
          session_id?: string | null
          timezone?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action_type?: string
          additional_data?: Json | null
          browser?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          device_type?: string | null
          id?: string
          ip_address?: string
          language?: string | null
          os?: string | null
          page_url?: string | null
          referer?: string | null
          region?: string | null
          screen_resolution?: string | null
          session_id?: string | null
          timezone?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          category: string
          content: string | null
          created_at: string
          created_by: string
          description: string | null
          external_url: string | null
          file_url: string | null
          id: string
          language: string
          tags: string[] | null
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          category: string
          content?: string | null
          created_at?: string
          created_by: string
          description?: string | null
          external_url?: string | null
          file_url?: string | null
          id?: string
          language?: string
          tags?: string[] | null
          title: string
          type: string
          updated_at?: string
        }
        Update: {
          category?: string
          content?: string | null
          created_at?: string
          created_by?: string
          description?: string | null
          external_url?: string | null
          file_url?: string | null
          id?: string
          language?: string
          tags?: string[] | null
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      experts: {
        Row: {
          created_at: string
          education_level: string | null
          email: string
          expertise_area: string | null
          id: string
          institution: string | null
          name: string
          notes: string | null
          phone: string | null
          status: string
          updated_at: string
          user_id: string
          years_experience: number | null
        }
        Insert: {
          created_at?: string
          education_level?: string | null
          email: string
          expertise_area?: string | null
          id?: string
          institution?: string | null
          name: string
          notes?: string | null
          phone?: string | null
          status?: string
          updated_at?: string
          user_id: string
          years_experience?: number | null
        }
        Update: {
          created_at?: string
          education_level?: string | null
          email?: string
          expertise_area?: string | null
          id?: string
          institution?: string | null
          name?: string
          notes?: string | null
          phone?: string | null
          status?: string
          updated_at?: string
          user_id?: string
          years_experience?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          email: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          email?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          email?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      studies: {
        Row: {
          category: string | null
          created_at: string
          description_en: string | null
          description_es: string | null
          id: string
          is_public: boolean
          rounds_data: Json | null
          settings: Json | null
          status: string
          title_en: string
          title_es: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description_en?: string | null
          description_es?: string | null
          id?: string
          is_public?: boolean
          rounds_data?: Json | null
          settings?: Json | null
          status?: string
          title_en: string
          title_es: string
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description_en?: string | null
          description_es?: string | null
          id?: string
          is_public?: boolean
          rounds_data?: Json | null
          settings?: Json | null
          status?: string
          title_en?: string
          title_es?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      study_participants: {
        Row: {
          created_at: string
          expert_id: string
          id: string
          invitation_sent_at: string | null
          last_response_at: string | null
          response_status: string
          rounds_completed: number | null
          study_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          expert_id: string
          id?: string
          invitation_sent_at?: string | null
          last_response_at?: string | null
          response_status?: string
          rounds_completed?: number | null
          study_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          expert_id?: string
          id?: string
          invitation_sent_at?: string | null
          last_response_at?: string | null
          response_status?: string
          rounds_completed?: number | null
          study_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "study_participants_expert_id_fkey"
            columns: ["expert_id"]
            isOneToOne: false
            referencedRelation: "experts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_participants_study_id_fkey"
            columns: ["study_id"]
            isOneToOne: false
            referencedRelation: "studies"
            referencedColumns: ["id"]
          },
        ]
      }
      study_responses: {
        Row: {
          created_at: string
          expert_id: string
          id: string
          responses: Json
          round_number: number
          study_id: string
          submitted_at: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          expert_id: string
          id?: string
          responses?: Json
          round_number?: number
          study_id: string
          submitted_at?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          expert_id?: string
          id?: string
          responses?: Json
          round_number?: number
          study_id?: string
          submitted_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "study_responses_expert_id_fkey"
            columns: ["expert_id"]
            isOneToOne: false
            referencedRelation: "experts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_responses_study_id_fkey"
            columns: ["study_id"]
            isOneToOne: false
            referencedRelation: "studies"
            referencedColumns: ["id"]
          },
        ]
      }
      techniques: {
        Row: {
          advantages: string[]
          applications: string[]
          bibliographic_sources: Json
          category: string
          complexity: number
          created_at: string
          created_by: string | null
          description: string
          icon_name: string
          id: string
          is_active: boolean
          language: string
          limitations: string[]
          methodology: Json
          name: string
          objectives: string[]
          participants: string
          technique_id: string
          time_horizon: string
          updated_at: string
        }
        Insert: {
          advantages?: string[]
          applications?: string[]
          bibliographic_sources?: Json
          category: string
          complexity: number
          created_at?: string
          created_by?: string | null
          description: string
          icon_name: string
          id?: string
          is_active?: boolean
          language?: string
          limitations?: string[]
          methodology?: Json
          name: string
          objectives?: string[]
          participants: string
          technique_id: string
          time_horizon: string
          updated_at?: string
        }
        Update: {
          advantages?: string[]
          applications?: string[]
          bibliographic_sources?: Json
          category?: string
          complexity?: number
          created_at?: string
          created_by?: string | null
          description?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          language?: string
          limitations?: string[]
          methodology?: Json
          name?: string
          objectives?: string[]
          participants?: string
          technique_id?: string
          time_horizon?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      assign_admin_role_to_admin_user: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      get_user_roles: {
        Args: { _user_id: string }
        Returns: Database["public"]["Enums"]["app_role"][]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "manager" | "expert"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "manager", "expert"],
    },
  },
} as const
