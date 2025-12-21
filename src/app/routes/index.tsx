/*

 * Entry-point route for the application (`/`).
 * This route does not render UI and is responsible for redirecting users
 * to the appropriate initial page (e.g. login or dashboard).
 * Auth-based routing logic can be extended here later.
 
*/


import { createRoute, redirect } from "@tanstack/react-router";
import rootRoute from "../rootRoute";

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	beforeLoad: () => {
		if (location.pathname === '/') {
			throw redirect({
				to: '/login'
			})
		}
	}
})