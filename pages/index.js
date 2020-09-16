import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";

function HomePage() {
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>Welcome to Next.js!</h1>
                <h2>認証ページ（登録/ログイン/ログアウトのみ）</h2>
                <ul>
                    <li>
                        <Link href="/auth/login">
                            <a>認証ページ</a>
                        </Link>
                    </li>
                </ul>
                <h2>ダミーデータでのダイレクトルーティング</h2>
                <ul>
                    <li>
                        <Link href="/users/1">
                            <a>ユーザ１のページ</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/users/2">
                            <a>ユーザ２のページ</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/users/3">
                            <a>ユーザ３のページ</a>
                        </Link>
                    </li>
                </ul>
                <h2>firebaseでのダイレクトルーティング</h2>
                <ul>
                    <li>
                        <Link href="/history/1">
                            <a>ユーザ１のページ</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/history/2">
                            <a>ユーザ２のページ</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/history/3">
                            <a>ユーザ３のページ</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </Layout>
    );
}

export default HomePage;
