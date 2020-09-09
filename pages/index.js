import Link from "next/link";

function HomePage() {
  return (
    <>
      <h1>Welcome to Next.js!</h1>
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
          <Link href="https://next-doc-test.vercel.app/users/2">
            <a>ユーザ３のページ</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
