import { create } from 'zustand'
import { Post } from '../types/posts.interface'
import { fakePosts } from '../data/fakePosts'

interface PostStoreState {
  posts: Post[]
  addPost: (post: Post) => void
  removePost: (id: string) => void
}

export const usePostStore = create<PostStoreState>((set) => ({
  posts: fakePosts,
  addPost: (post: Post) => set((state) => ({ posts: [...state.posts, post] })),
  removePost: (id: string) => set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
}))

export const usePosts = () => {
  return usePostStore((state) => state.posts)
}

export const useAddPost = () => {
  return usePostStore((state) => state.addPost)
}

export const useRemovePost = () => {
  return usePostStore((state) => state.removePost)
}
