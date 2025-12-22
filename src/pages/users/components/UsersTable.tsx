import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../../../components/ui/table"

import type { User } from "../../../domain/user"

type UsersTableProps = {
	users: User[],
}

const UsersTable = ({ users }: UsersTableProps) => {
	return (
		<div className="mt-6 rounded-md border">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Email</TableHead>
						<TableHead>Role</TableHead>
						<TableHead className="w-[1%] text-center">Status</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{users.length === 0 && (
						<TableRow>
							<TableCell
								colSpan={3}
								className="px-4 py-6 text-center text-sm text-muted-foreground"
							>
								No users found
							</TableCell>
						</TableRow>
					)}
					{users.map((user) => (
						<TableRow key={user.id} className="odd:bg-muted/50 hover:bg-muted">
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.role}</TableCell>
							<TableCell>
								<span className={`
									inline-flex items-center justify-center
									min-w-18 rounded-full px-2 py-0.5 text-xs font-medium
									${
										user.status === "active"
											? "bg-green-100 text-green-700"
											: "bg-gray-200 text-gray-600"
									}
									`}>
									{user.status}
								</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

export default UsersTable
