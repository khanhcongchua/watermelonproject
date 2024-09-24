import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vcusrcjbliaxlpmboyzi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjdXNyY2pibGlheGxwbWJveXppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNzQ1MzgsImV4cCI6MjA0Mjc1MDUzOH0.0RpH7gmcxcIta4pmMytCaBS34hNI7qF_9YLuYzu_MVk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})