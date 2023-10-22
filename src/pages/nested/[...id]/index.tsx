import { useRouter } from "next/router";

export default function Page() {
	// ネストされたパスを受け取るには `...` を追加する
	// /dynamic/XX -> query.id で XXを取得
	const router = useRouter();
	// 分割代入の変数はフォルダ名 = ...idと一致させる
	const { id } = router.query;
	return (
		<>
			<h3>Hello nested {id.join("/")}</h3>
		</>
	);
}
