This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

```sh
yarn
```

## サーバーの起動

```sh
yarn dev
```

## 動的ルーティング

`[]` で囲むことで動的な値を許容している

```text
/pages/hello/[id]
-> /hello/hoge
-> /hello/fuga
-> /hello/1
```

ただし，ネストされた URL を許容するには`[...]`で囲む必要がある

```text
/pages/nested/[...id]
-> /nested/hoge
-> /nested/hoge/fuga
-> /nested/hoge/2
```

path の取得は以下の様にする

ただし，`[]`で囲んだ変数名と合わせること

```ts
// `/hello/hoge
const { id } = router.query; // hoge

// `nested/hoge/fuga`
const { id } = router.query; // ['hoge', 'fuga']

// ?q=XXX クエリ文字列を含む場合
const { id, q } = router.query;
```

## URL の置き換え

`next.config.js` で `rewrite`を定義し

`/hoge/:path*` とアクセスされた場合，`/user/:path*` を表示する設定を追加

```js
async rewrites() {
    return [
      {
        source: '/hoge/:path*',
        destination: '/user/:path*',
      },
      {
        source: '/',
        destination: '/hello/home',
      },
    ];
  },
```
