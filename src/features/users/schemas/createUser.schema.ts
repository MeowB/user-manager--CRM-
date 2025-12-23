import { z } from "zod"

export const createUserSchema = z.object({
	email: z.email().min(1, "Email is required"),
	role: z.string().min(1, "Role is required"),
	status: z.enum(["active", "disabled"])
})

export type CreateUserFormValues = z.infer<typeof createUserSchema>