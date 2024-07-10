import { NextFunction, Request, Response, Router } from "express";
import { PostValidator } from "./post.validation";
import postService from "./post.service";
import { IPost } from "./post.types";
import { ResponseHandler } from "../../utility/response-handler";

export const PostRouter = Router();

PostRouter.post(
  "/",
  PostValidator,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = res.locals.user.id;
      const postData = { ...req.body, userId };
      const post = await postService.addPost(postData);
      return res.send(new ResponseHandler(post));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

PostRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await postService.getAllPosts();
    return res.send(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

PostRouter.get(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.userId;
      const posts = await postService.getAllPostsByUserId(userId);
      return res.send(new ResponseHandler(posts));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

PostRouter.put(
  "/like/:postId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId = req.params.postId;
      const userId = res.locals.user.id;
      console.log(postId, userId);
      const likePost = await postService.likePost({ userId, postId });
      return res.send(new ResponseHandler(likePost));
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);
