async function fetchDetails(currentuserId) {
	try {
		const response = await fetch(
			`https://dummyjson.com/users/${currentuserId}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}
async function DetailsPage({ params }) {
	const userDetails = await fetchDetails(params.details);
	return (
		<div>
			<h1>details page</h1>
			<p>
				{userDetails?.firstName} {userDetails?.lastName}
			</p>
			<p>{userDetails?.email}</p>
			<p>{userDetails?.state}</p>
		</div>
	);
}

export default DetailsPage;
