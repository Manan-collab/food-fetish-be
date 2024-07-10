import { POST_RESPONSES } from "./post.constant";
import postRepo from "./post.repo";
import { ILikePostData, IPost } from "./post.types";

const addPost = async (postData: IPost) => {
  try {
    await postRepo.addPost(postData);
    return POST_RESPONSES.POST_ADDED_SUCCESSFULLY;
  } catch (error) {
    console.error(error);
    throw POST_RESPONSES.POST_NOT_ADDED;
  }
};

const likePost = async (likePostData: ILikePostData) => {
  try {
    await postRepo.findAndLikePost(likePostData.postId);
    return POST_RESPONSES.POST_LIKED_SUCCESSFULLY;
  } catch (error) {
    console.error(error);
    throw POST_RESPONSES.POST_LIKE_FAILED;
  }
};

const getAllPosts = async () => {
  try {
    const posts = await postRepo.getAllPosts();
    return posts.length > 0 ? posts : POST_RESPONSES.POSTS_NOT_FOUND;
  } catch (error) {
    console.error(error);
    return POST_RESPONSES.POSTS_NOT_FOUND;
  }
};

const getAllPostsByUserId = async (userId: string) => {
  try {
    const posts = await postRepo.getAllPostsByUserId(userId);
    return posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default {
  addPost,
  getAllPosts,
  likePost,
  getAllPostsByUserId,
};
