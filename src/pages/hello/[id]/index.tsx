import { useRouter } from "next/router";

export default function Page() {
	// /dynamic/XX -> query.id で XXを取得
	const router = useRouter();
	return (
		<>
			<h3>Hello {router.query.id}</h3>
		</>
	);
}
