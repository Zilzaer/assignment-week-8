import Image from "next/image";

import Post from "@/Components/Post/Post"

import { createClient } from '@/utils/supabase/client'

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  
  const response = await supabase.from("post").select();

  return (
    <main className="">
      {response.data.map((post) => (
        <Post key={post.id} title={post.title} author={post.author} content={post.content} timestamp={post.timestamp} />
      ))}
    </main>
  );
}
