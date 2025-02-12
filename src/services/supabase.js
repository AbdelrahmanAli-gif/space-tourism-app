import { createClient } from "@supabase/supabase-js";

const projectURL = 'https://clkkzxisaqygldavnaju.supabase.co';
const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsa2t6eGlzYXF5Z2xkYXZuYWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMjY3MDYsImV4cCI6MjA1NDgwMjcwNn0.NXdlsHPhPfvDtn3zjuJ6MpONYjNVkNfK9WGKPJ5w_xM';
const supabase = createClient(projectURL, anonKey);

export default supabase;