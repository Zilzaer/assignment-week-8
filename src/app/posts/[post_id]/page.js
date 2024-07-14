
import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/client'
import Comment from "@/Components/Comment/Comment"

import styles from './styles.module.css'
import { redirect } from 'next/dist/server/api-utils';

export default async function PostPage(post) {

  const supabase = createClient();

  const response_posts = await supabase.from("post").select().eq("id", post.params.post_id);
  // todo: (optional) parse json from response.data.at(0)

  const response_comments = await supabase.from("comment").select().eq("post_id", post.params.post_id);
  // todo: (optional) parse json from response_comments.data.at(0)

  async function post_comment(formData) {
    'use server'
    const supabase = createClient();
  
    const username = formData.get("username");
    const comment = formData.get("comment");
    console.log(username);
    console.log(comment );
  
    const {error} = await supabase.from("comment").insert({
      content: comment,
      author: username,
      post_id: post.params.post_id,
    });

    console.log(error);
    revalidatePath('/posts');
    
  }

  return (
    <main className=""> 
      <h1>This is a post titled: {response_posts.data.at(0).title} </h1>
      <form action={post_comment} className={`${styles.comments}`}> 
        <label htmlFor='name'>Name</label>
        <input type="text" id="username" name='username' />
        <input type="text" id="comment" name='comment' />
        <button type="submit">Submit</button>
      </form>
      {response_comments.data.map((comment) => (
        <Comment key={comment.id} author={comment.author} content={comment.content} timestamp={comment.timestamp} />
      ))}
    </main>
  );
}
