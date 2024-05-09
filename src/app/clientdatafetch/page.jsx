"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const ClientDataFetching = () => {
	// const [loading, setLoading] = useState(false);
	// const [users, setUsers] = useState([]);

	// async function fetchUsers() {
	// 	try {
	// 		setLoading(true);
	// 		const apiResponse = await fetch("https://dummyjson.com/users");
	// 		const result = await apiResponse.json();

	// 		if (result?.users) {
	// 			setUsers(result.users);
	// 			setLoading(false);
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 		setUsers([]);
	// 		setLoading(false);
	// 	}
	// }

	// useEffect(() => {
	// 	fetchUsers();
	// }, []);

	const { data, error, isLoading } = useSWR(
		"https://dummyjson.com/users",
		fetcher
	);
	if (error) return <div>failed to load</div>;

	if (isLoading) return <h3>Loading ...!! please wait</h3>;
	return (
		<div>
			<h1>ClientDataFetching</h1>
			<ul className="gap-6 flex flex-col">
				{data && data?.users && data?.users.length > 0
					? data?.users.map((user) => (
							<li>
								<Link href={`clientdatafetching/${user.id}`}>
									{user.firstName}
								</Link>
							</li>
					  ))
					: null}
			</ul>
			{/* ----------------------------------------- */}

			{}
		</div>
	);
};

export default ClientDataFetching;
