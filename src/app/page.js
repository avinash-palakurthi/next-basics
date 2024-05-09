"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	function handleNavigate() {
		router.push("/india");
	}
	return (
		<div>
			{/* link */}
			<div className="flex flex-col  items-center justify-center gap-10">
				<div>
					<h2>Link</h2>
				</div>
				<div className="flex gap-10">
					<button className="shadow-lg shadow-slate-400 px-10 py-2 border border-slate-600">
						<Link href={"/india"}>India</Link>
					</button>
					<button className="shadow-lg shadow-slate-400 px-10 py-2 border border-slate-600">
						<Link href={"/usa"}>USA</Link>
					</button>
				</div>
			</div>

			{/* link alternative */}

			<div className="flex flex-col justify-center items-center mt-2">
				link alternative <strong>useRouter </strong>
				<span className="text-red-600">from next/navigation</span>
				<button
					onClick={handleNavigate}
					className="shadow-lg shadow-slate-400 px-10 py-2 border border-slate-600"
				>
					<h2>navigating to inda page using userouter</h2>
				</button>
			</div>
		</div>
	);
}
