import axios from "axios";
import type { Post } from "@/types";
import CollectionUtils from "@/utils/CollectionUtils";

const serial = localStorage.getItem("posts") as string;
const posts = JSON.parse(serial) as Post[];

const baseURL = "http://localhost:3000";

export const PostFetcher = {
  fetchAll(): Promise<Post[]> {
    return axios.get(`${baseURL}/posts`).then((res) => {
      return res.data;
    });
  },

  async fetchMax() {
    const posts = await this.fetchAll();
    if (posts == null) return null;

    const maxId = CollectionUtils.max(posts.map((post) => post.id));
    return posts.find((post) => post.id == maxId) as Post;
  },

  fetch(id: number) {
    return axios.get(`${baseURL}/posts/id`).then((res) => {
      return res.data;
    });
  },

  update(post: Post) {
    const url = `${baseURL}/posts`;
    const data = post;

    return axios.put(url, data).then((res) => {
      return res.data;
    });
  },

  insert(post: Post) {
    const url = `${baseURL}/posts`;
    const data = post;

    return axios.post(url, data).then((res) => {
      return res.data;
    });
  },

  remove(id: number) {
    const url = `${baseURL}/posts`;
    const data = post;

    return axios.put(url, data).then((res) => {
      return res.data;
    });
  },
};
