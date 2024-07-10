import { postResponses } from "./post.types";

export const POST_RESPONSES = {
  POST_ADDED_SUCCESSFULLY: new postResponses(201, "POST ADDED SUCCESSFULLY"),
  POST_NOT_ADDED: new postResponses(201, "POST ADD FAILED"),
  POST_LIKED_SUCCESSFULLY: new postResponses(201, "POST LIKED SUCCESSFULLY"),
  POST_LIKE_FAILED: new postResponses(400, "POST LIKED FAILED"),
  POSTS_NOT_FOUND: new postResponses(404, "POSTS NOT FOUND"),
  NO_POSTS_FOUND_FOR_USER: new postResponses(404, "NO POSTS FOUND FOR USER"),
};
