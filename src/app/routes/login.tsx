import { createRoute } from "@tanstack/react-router";
import LoginPage from "../../pages/login/LoginPage";
import rootRoute from "../rootRoute";

const loginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'login',
	component: LoginPage
})

export default loginRoute