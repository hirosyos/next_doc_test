import Link from "next/link";

function HomePage() {
  return (
    <>
      <h1>Welcome to Next.js!</h1>
      <h2>認証ページ（登録/ログイン/ログアウトのみ）</h2>
      <ul>
        <li>
          <Link href="https://next-doc-test.vercel.app/login">
            <a>認証ページ</a>
          </Link>
        </li>
      </ul>
      <h2>ダミーデータでのダイレクトルーティング</h2>
      <ul>
        <li>
          <Link href="https://next-doc-test.vercel.app/users/1">
            <a>ユーザ１のページ</a>
          </Link>
        </li>
        <li>
          <Link href="https://next-doc-test.vercel.app/users/2">
            <a>ユーザ２のページ</a>
          </Link>
        </li>
        <li>
          <Link href="https://next-doc-test.vercel.app/users/3">
            <a>ユーザ３のページ</a>
          </Link>
        </li>
      </ul>
      <h2>firebaseでのダイレクトルーティング</h2>
      <ul>
        <li>
          <Link href="https://next-doc-test.vercel.app/history/1">
            <a>ユーザ１のページ</a>
          </Link>
        </li>
        <li>
          <Link href="https://next-doc-test.vercel.app/history/2">
            <a>ユーザ２のページ</a>
          </Link>
        </li>
        <li>
          <Link href="https://next-doc-test.vercel.app/history/3">
            <a>ユーザ３のページ</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
