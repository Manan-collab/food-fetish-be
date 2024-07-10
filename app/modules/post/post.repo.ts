import { POST_RESPONSES } from "./post.constant";
import PostModel from "./post.schema";
import postService from "./post.service";
import { ILikePostData, IPost } from "./post.types";

const addPost = async (postData: IPost) => {
  try {
    await PostModel.create({ ...postData });
  } catch (error) {
    throw error;
  }
};

const getAllPosts = async () => {
  try {
    return await PostModel.find();
  } catch (error) {
    throw error;
  }
};

const getAllPostsByUserId = async (userId: string) => {
  try {
    const posts = await PostModel.aggregate([{ $match: { userId: userId } }]);
    if (posts.length) {
      return posts;
    }
    return POST_RESPONSES.NO_POSTS_FOUND_FOR_USER;
  } catch (error) {
    throw error;
  }
};

const findAndLikePost = async (postId: string) => {
  try {
    console.log("getPostById", postId);
    const post = await PostModel.findByIdAndUpdate(postId, { $inc: { likesCount: 1 } }, { new: true })
    return post;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default {
  addPost,
  getAllPosts,
  getAllPostsByUserId,
  findAndLikePost,
};
