import Link from "next/link";
import "../styles/globals.scss";
import firebase from "../plugins/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAppRouter } from "../hooks";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    const [router, { needAuth }] = useAppRouter();
    const [user, initialising, error] = useAuthState(firebase.auth());
    // if (initialising) {
    //     return <div>Initialising...</div>;
    // }
    // if (error) {
    //     return <div>Error: {error}</div>;
    // }
    // if (!user) {
    //     return <div>ログインされていません: {error}</div>;
    // }

    // useEffect(() => {
    //     if (needAuth) {
    //         if (!user) {
    //             // router.push("/auth/login");
    //             return (
    //                 <div>
    //                     ログインされていません: {error}
    //                     <Link href="/auth/login">
    //                         <a>認証ページ</a>
    //                     </Link>
    //                 </div>
    //             );
    //         }
    //         // else {
    //         //     // fetchUser();
    //         // }
    //     }
    // }, [router]);

    return <Component {...pageProps} />;
}

// もし、アプリケーション内のすべてのページでブロックするデータを必要とする場合のみ、このメソッドのコメントを外してください。
// Automatic Static Optimizationを無効にし、アプリケーション内の各ページはサーバーサイドでレンダリングされます。
//
// MyApp.getInitialProps = async (appContext) => {
//   // ページの`getInitialProps`を呼び、`appProps.pageProps`を満たします。
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
