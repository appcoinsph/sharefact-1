import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRneGxkb2Z6Z29zbmhjbGFtemhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1NjU1OTQsImV4cCI6MTk5NzE0MTU5NH0.bDZffMY-rn2GY45-vBWWxsCiv-BXJZuKhrPXcaz82so";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
