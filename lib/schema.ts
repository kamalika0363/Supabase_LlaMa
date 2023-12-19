export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

export interface Database {
    public: {
        Tables: {
            links: {
                Row: {
                    id: number
                    // inserted_at: string
                    // is_complete: boolean | null
                    link: string | null
                    // user_id: string
                }
                Insert: {
                    id?: number
                    // inserted_at?: string
                    // is_complete?: boolean | null
                    link?: string | null
                    // user_id: string
                }
                Update: {
                    id?: number
                    // inserted_at?: string
                    // is_complete?: boolean | null
                    link?: string | null
                    // user_id?: string
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}