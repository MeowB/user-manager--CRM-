/*

 * TanStack Query client configuration.
 * Centralizes server-state management and caching behavior for the app.
 * The QueryClient is created once and shared across all routes via a provider.
 
*/


import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			refetchOnWindowFocus: false,
		},
	},
})