"use server";

import { createClient } from "@/utils/supabase/client";

export async function post_comment(formData, post_id) {
  const supabase = createClient();

  const username = formData.get("username");
  const comment = formData.get("comment");

  supabase.from("comment").insert({
    timestamp: Date.now(),
    content: comment,
    author: username,
    post_id: post_id,
  });
}
