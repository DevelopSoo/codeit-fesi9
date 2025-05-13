import { setupServer } from "msw/node";
import { usersHandlers } from "./handlers/users";
import { postsHandlers } from "./handlers/posts";

export const server = setupServer(...usersHandlers, ...postsHandlers);
