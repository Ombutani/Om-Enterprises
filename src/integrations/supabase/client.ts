
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://lkqmulxzmaegatlrjfgh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrcW11bHh6bWFlZ2F0bHJqZmdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNjA3ODIsImV4cCI6MjA2MzYzNjc4Mn0.iGMHORALOtTdMy29m2dW54G6eXfCNCnddR-mzzNTdnk"


export const supabase = createClient(supabaseUrl, supabaseKey);
