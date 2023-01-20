import { PostFetcher } from "@/api/posts";
import type { Post } from "@/types";
import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
  state: () => ({ posts: [] as Post[] }),
  actions: {
    async fetchAll() {
      this.posts = await PostFetcher.fetchAll();
      return this.posts;
    },
    async getPost(id: number) {
      return await PostFetcher.fetch(id);
    },
  },
});
