import { createRoute } from "@tanstack/react-router";
import { layoutRoute } from "../layout";
import UsersPage from "../../pages/users/UsersPage";

export const usersRoute = createRoute({
	getParentRoute: () => layoutRoute,
	path: 'users',
	component: UsersPage
})