`use server`

import { createClient } from "@/utils/supabase/client";

export async function get_posts() {
  const supabase = createClient();
  const response = await supabase.from("post").select();
  console.log(response);
  return response;
}
