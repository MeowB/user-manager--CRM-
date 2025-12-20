import { createRouter } from "@tanstack/react-router";
import loginRoute from "./routes/login";
import rootRoute from "./rootRoute";
import { layoutRoute } from "./layout";
import { dashboardRoute } from "./routes/dashboard";
import { usersRoute } from "./routes/users";

const routeTree = rootRoute.addChildren([
	loginRoute,
	layoutRoute.addChildren([
		dashboardRoute,
		usersRoute
	])
])

export const router = createRouter({
	routeTree
})