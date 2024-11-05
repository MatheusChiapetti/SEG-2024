
import { createClient } from '@supabase/supabase-js'

// Cada um tem uma URL própria.
const supabaseUrl = 'https://zozeoyohwoaagsofuheh.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)