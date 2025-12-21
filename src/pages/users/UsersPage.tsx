import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../api/users.mock"

const UsersPage = () => {
	const { data: usersResponse, isLoading, isError, error} = useQuery({queryKey: ['users'], queryFn: getUsers})

	if (isLoading) {
		return <p>Loading users...</p>
	}

	if (isError) {
		return <p>Error: {(error as Error).message}</p>
	}

	return (
		<ul>
			{usersResponse?.data.map((el) => (
				<li key={el.id}>
				{`${el.email} - ${el.role} - ${el.status}`}
				</li>
			))}
		</ul>
	)
}

export default UsersPage