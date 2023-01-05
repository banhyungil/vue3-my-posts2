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
    return posts.find((post) => post.id == maxId) as Post;
  },
  // post id가 없는 경우는 어떻게 처리하지? crud에서 create는 별도로 구별해야하나....
  save(post: Post) {
    const maxPost = this.fetchMax();
    if (post.id == null) post.id = maxPost == null ? 1 : maxPost.id;
    const idx = posts.findIndex((item) => item.id == post.id);
    posts[idx] = post;
    localStorage.setItem("posts", JSON.stringify(posts));
  },

  remove(id: number) {
    const idx = posts.findIndex((post) => post.id == id);
    posts.splice(idx, 1);

    localStorage.setItem("posts", JSON.stringify(posts));
  },
};
