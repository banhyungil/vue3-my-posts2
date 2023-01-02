import type { Post } from "@/types";
import CollectionUtils from "@/utils/CollectionUtils";

const serial = localStorage.getItem("posts") as string;
const posts = JSON.parse(serial) as Post[];

export const PostFetcher = {
  fetchAll() {
    return posts;
  },
  fetch(id: number) {
    const posts = this.fetchAll();
    if (posts == null) return null;

    return posts.find((post) => post.id == id);
  },
  fetchMax() {
    const posts = this.fetchAll();
    if (posts == null) return null;

    const maxId = CollectionUtils.max(posts.map((post) => post.id));
    return posts.find((post) => post.id == maxId);
  },
  save(post: Post) {
    const idx = posts.findIndex((item) => item.id == post.id);
    posts[idx] = post;
    localStorage.setItem("posts", JSON.stringify(posts));
  },
};
