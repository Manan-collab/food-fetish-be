import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { IPost } from "./post.types";

const postSchema = new BaseSchema({
  postImageUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  likesCount: {
    type: Number,
    default: 0,
  },
});

type IPostDocument = Document & IPost;
const PostModel = model<IPostDocument>("Post", postSchema);
export default PostModel;
