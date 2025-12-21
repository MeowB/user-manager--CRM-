import { createRoute } from "@tanstack/react-router";
import LoginPage from "../../pages/login/LoginPage";
import rootRoute from "../rootRoute";

export const loginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'login',
	component: LoginPage
})