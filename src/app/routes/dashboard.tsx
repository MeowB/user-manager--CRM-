import { createRoute } from "@tanstack/react-router";
import { layoutRoute } from "../layout";
import DashboardPage from "@/pages/dashboard/DashboardPage";

export const dashboardRoute = createRoute({
	getParentRoute: () => layoutRoute,
	path: 'dashboard',
	component: DashboardPage
})