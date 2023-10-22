import { useRouter } from "next/router";

export default function UserPage() {
	// /user/:path* または /hoge/:path* でアクセス可能
	// rewritesをnext.config.jsに記述
	const router = useRouter();
	const { user } = router.query;

	const slug = Array.isArray(user) ? user.join("/") : user;

	if (!slug) return null;
	return <h3>User: {slug}</h3>;
}
