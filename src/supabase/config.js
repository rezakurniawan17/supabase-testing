import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://igrdsfnoxsaffbmnaimx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlncmRzZm5veHNhZmZibW5haW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAzMzI1NTMsImV4cCI6MTk4NTkwODU1M30.VejXvzB3snFVweXDSobQoOBK4lkxauRZjqSjhOwWv1E'
const supabase = createClient(supabaseUrl, supabaseKey)

export {supabase}