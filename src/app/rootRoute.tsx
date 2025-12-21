/*

 * Root route of the application.
 * Acts as the top-level parent for all routes and provides shared context and structure.
 * This route is intentionally kept free of navigation or auth logic.
 
*/


import { createRootRoute } from "@tanstack/react-router";

const rootRoute = createRootRoute()

export default rootRoute