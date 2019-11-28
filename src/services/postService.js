import { get } from "../utils/api";
export default class PostService {
  getAllPosts() {
    return get(`/posts`);
  }

  getAllComments() {
    return get(`/comments`);
  }
}
