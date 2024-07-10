import { IExcludedPaths } from "../../utility/authorization";
import { AuthRouter } from "../auth/auth.routes";
import { ContactUsRouter } from "../contactUs/contactUs.routes";
import { PostRouter } from "../post/post.routes";
import { UserRouter } from "../user/user.routes";
import { Route, Routes } from "./route.types";

export const routes: Routes = [
  new Route("/user", UserRouter),
  new Route("/auth", AuthRouter),
  new Route("/contact-us", ContactUsRouter),
  new Route("/post", PostRouter),
];

export const excludedPaths: IExcludedPaths[] = [
  { path: "/auth/login", method: "POST" },
  { path: "/user", method: "POST" },
  { path: "/contact-us/", method: "POST" },
];
