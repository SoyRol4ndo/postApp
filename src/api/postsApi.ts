import { fakePosts } from "../data/fakePosts";
import { Post } from "../types/posts.interface";

let db: Post[] = [...fakePosts];

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const   listPosts = async (): Promise<Post[]>  => {
  await sleep(400); // simula red
  return [...db];
}

export const createPost = async (data:Post): Promise<void>  => {
  await sleep(1400);
  const newPost: Post = {...data };
  db = [newPost, ...db];
}

export const deletePost = async(id: string): Promise<void> => {
  await sleep(300);
  db = db.filter((p) => p.id !== id);
}