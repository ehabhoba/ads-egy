import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

// --- Use provided Supabase credentials directly ---
const supabaseUrl = 'https://kcnsubwxwynckntemfqx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjbnN1Ynd4d3luY2tudGVtZnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5OTQyNDUsImV4cCI6MjA2OTU3MDI0NX0.RBiOLn9cJkf_JOyLs54NHRmllfPTZM1UAFBanZkBYk8';


export const getSupabase = (): SupabaseClient => {
    if (supabase) {
        return supabase;
    }

    if (!supabaseUrl || !supabaseKey) {
        // This check is now for the hardcoded values, which should always be present.
        // It's good practice to keep it as a safeguard.
        throw new Error("Supabase URL and Key are missing. Please check the configuration in lib/supabase.ts.");
    }

    supabase = createClient(supabaseUrl, supabaseKey);
    return supabase;
};