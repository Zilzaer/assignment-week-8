import Post from "@/Components/Post/Post"
import { createClient } from "@/utils/supabase/client";

import styles from './styles.module.css'

export default async function Home() {
  async function get_posts() {
    'use server'

    const supabase = createClient();
    return await supabase.from("post").select();
  }

  const posts = (await get_posts()).data;

  return (
    <main className={`${styles.posts}`}>
      <button className="peer">Sort</button>
      {posts && posts.length > 0 && posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} author={post.author} content={post.content} timestamp={post.timestamp} />
      ))}
    </main>
  );
}

