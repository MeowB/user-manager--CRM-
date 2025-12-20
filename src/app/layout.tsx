import { createRoute, Link, Outlet } from "@tanstack/react-router";
import rootRoute from "./rootRoute";


function Layout() {
	return (
		<>
		<header>
			<nav>
				<Link to='/dashboard'>Dashboard</Link>
				<Link to='/users'>Users</Link>
			</nav>
		</header>
		<main>
			<Outlet />
		</main>
		<footer>
			some app footer
		</footer>
		</>
	)
}

export const layoutRoute = createRoute({
	getParentRoute: () => rootRoute,
	id: 'layout',
	component: Layout
})