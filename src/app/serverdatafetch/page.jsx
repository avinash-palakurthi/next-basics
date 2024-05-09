import Link from "next/link";

async function fetchUsers() {
	try {
		const response = await fetch("https://dummyjson.com/users");
		const data = await response.json();

		return data.users;
	} catch (error) {
		throw new Error(error);
	}
}

async function ServerDataFetching() {
	const users = await fetchUsers();
	return (
		<div>
			ServerDataFetching
			<ul>
				{users && users.length > 0
					? users.map((user) => (
							<li className="mt-5 cursor-pointer hover:bg-orange-400 w-fit px-5">
								<Link href={`serverdatafetch/$${user.id}`}>
									{user.firstName}
								</Link>
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
}

export default ServerDataFetching;
