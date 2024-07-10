export interface IPost {
  postImageUrl: string;
  userId: string;
  likesCount: number;
}

export interface ILikePostData {
  userId: string;
  postId: string;
}

export class postResponses {
  constructor(public statusCode: number, public message: string) {}
}
