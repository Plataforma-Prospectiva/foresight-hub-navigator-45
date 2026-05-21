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
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      access_logs: {
        Row: {
          action_type: string
          additional_data: Json | null
          browser: string
          city: string | null
          country: string | null
          created_at: string
          device_type: string
          id: string
          ip_address: string
          language: string
          os: string
          page_url: string
          referer: string | null
          region: string | null
          screen_resolution: string | null
          session_id: string
          timezone: string
          user_agent: string
          user_id: string | null
        }
        Insert: {
          action_type: string
          additional_data?: Json | null
          browser: string
          city?: string | null
          country?: string | null
          created_at?: string
          device_type: string
          id?: string
          ip_address: string
          language: string
          os: string
          page_url: string
          referer?: string | null
          region?: string | null
          screen_resolution?: string | null
          session_id: string
          timezone?: string
          user_agent: string
          user_id?: string | null
        }
        Update: {
          action_type?: string
          additional_data?: Json | null
          browser?: string
          city?: string | null
          country?: string | null
          created_at?: string
          device_type?: string
          id?: string
          ip_address?: string
          language?: string
          os?: string
          page_url?: string
          referer?: string | null
          region?: string | null
          screen_resolution?: string | null
          session_id?: string
          timezone?: string
          user_agent?: string
          user_id?: string | null
        }
        Relationships: []
      }
      application_case_techniques: {
        Row: {
          case_id: string
          combination_notes: string | null
          created_at: string
          id: string
          sequence_order: number
          technique_id: string
        }
        Insert: {
          case_id: string
          combination_notes?: string | null
          created_at?: string
          id?: string
          sequence_order?: number
          technique_id: string
        }
        Update: {
          case_id?: string
          combination_notes?: string | null
          created_at?: string
          id?: string
          sequence_order?: number
          technique_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_case_techniques_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "application_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      application_cases: {
        Row: {
          context: string | null
          country: string | null
          created_at: string
          description: string | null
          id: string
          language: string
          lessons_learned: string | null
          methodology_summary: string | null
          objective: string | null
          organization: string | null
          references_text: string | null
          results: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          sector: string | null
          status: Database["public"]["Enums"]["case_status"]
          submitted_by: string | null
          title: string
          updated_at: string
          year: number | null
        }
        Insert: {
          context?: string | null
          country?: string | null
          created_at?: string
          description?: string | null
          id?: string
          language?: string
          lessons_learned?: string | null
          methodology_summary?: string | null
          objective?: string | null
          organization?: string | null
          references_text?: string | null
          results?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          sector?: string | null
          status?: Database["public"]["Enums"]["case_status"]
          submitted_by?: string | null
          title: string
          updated_at?: string
          year?: number | null
        }
        Update: {
          context?: string | null
          country?: string | null
          created_at?: string
          description?: string | null
          id?: string
          language?: string
          lessons_learned?: string | null
          methodology_summary?: string | null
          objective?: string | null
          organization?: string | null
          references_text?: string | null
          results?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          sector?: string | null
          status?: Database["public"]["Enums"]["case_status"]
          submitted_by?: string | null
          title?: string
          updated_at?: string
          year?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      techniques: {
        Row: {
          advantages: string | null
          applications: string | null
          category: string
          complexity: number
          created_at: string
          description: string | null
          difficulty_level: string | null
          duration_estimate: string | null
          examples: string | null
          icon_name: string | null
          id: string
          is_active: boolean
          language: string
          limitations: string | null
          methodology: string | null
          name: string
          objectives: string | null
          participants_max: number | null
          participants_min: number | null
          recommended_for: string | null
          required_resources: string | null
          technique_id: string
          technique_references: string | null
          time_horizon: string | null
          updated_at: string
        }
        Insert: {
          advantages?: string | null
          applications?: string | null
          category: string
          complexity: number
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          duration_estimate?: string | null
          examples?: string | null
          icon_name?: string | null
          id?: string
          is_active?: boolean
          language?: string
          limitations?: string | null
          methodology?: string | null
          name: string
          objectives?: string | null
          participants_max?: number | null
          participants_min?: number | null
          recommended_for?: string | null
          required_resources?: string | null
          technique_id: string
          technique_references?: string | null
          time_horizon?: string | null
          updated_at?: string
        }
        Update: {
          advantages?: string | null
          applications?: string | null
          category?: string
          complexity?: number
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          duration_estimate?: string | null
          examples?: string | null
          icon_name?: string | null
          id?: string
          is_active?: boolean
          language?: string
          limitations?: string | null
          methodology?: string | null
          name?: string
          objectives?: string | null
          participants_max?: number | null
          participants_min?: number | null
          recommended_for?: string | null
          required_resources?: string | null
          technique_id?: string
          technique_references?: string | null
          time_horizon?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          assigned_at: string
          assigned_by: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          assigned_at?: string
          assigned_by?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          assigned_at?: string
          assigned_by?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      setup_initial_admin: { Args: { admin_email: string }; Returns: undefined }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user" | "beta"
      case_status: "pending" | "approved" | "rejected"
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
      app_role: ["admin", "moderator", "user", "beta"],
      case_status: ["pending", "approved", "rejected"],
    },
  },
} as const
