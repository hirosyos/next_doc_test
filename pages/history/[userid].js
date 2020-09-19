import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    useCollectionData,
    useCollection,
    useDocumentData,
    useDocument,
} from "react-firebase-hooks/firestore";
import firebase from "../../plugins/firebase";
import styles from "../../styles/Home.module.scss";
import Layout from "../../components/Layout";
import { useAuthState } from "react-firebase-hooks/auth";

// export async function getServerSideProps() {
//     return {
//         props: {}, // will be passed to the page component as props
//     };
// }

// この関数はビルド時に呼び出されます。
// export async function getStaticPaths() {
//     // 外部APIエンドポイントを呼び出して記事を取得します。
//     //firebase読み出し
//     // const [values, loading, error1] = useCollectionData(
//     //     firebase.firestore().doc(`users2/`),
//     //     {
//     //         idField: "id",
//     //     }
//     // );

//     // 記事に基づいてプリレンダリングしたいパスを取得します
//     // const paths = values.map((value) => ({
//     //     params: { id: value.id },
//     // }));

//     const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];

//     // ビルド時にこれらのパスだけをプリレンダリングします。
//     // { fallback: false } は他のルートが404になることを意味します。
//     return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//     return { props: { propUserId: params.userid } };
// }

// コンポーネント：ユーザーページ出力
const UserPage = ({ propUserId }) => {
    console.log({ propUserId });

    const router = useRouter();

    // URLに入力されたユーザID読み出し
    const { userid } = router.query;
    console.log({ userid });

    //認証チェック
    const [user, initialising, error] = useAuthState(firebase.auth());

    //firebase読み出し
    const [values, loading, error1] = useDocumentData(
        firebase.firestore().doc(`users2/${userid}`),
        {
            idField: "id",
        }
    );

    //認証チェックの結果判定
    if (initialising) {
        return <div>Initialising...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!user) {
        <div>ログインされていません: {error}</div>;
        <div>ログインページへリダイレクトします: {error}</div>;
        router.replace("/auth/login");
        return <div />;
    }

    //firebaseからの呼び出し結果判定
    if (loading) {
        return (
            <Layout>
                <div className={styles.container}>
                    <Head>
                        <title>自分史図書館</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div>Loading...</div>
                </div>
            </Layout>
        );
    }
    if (error1) {
        return (
            <Layout>
                <div className={styles.container}>
                    <Head>
                        <title>自分史図書館/ユーザページ</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div>{`Error: ${error1.message}`}</div>;
                </div>
            </Layout>
        );
    }
    console.log(values);

    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>自分史図書館/ユーザページ</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>firebase読み出しテストページ</h1>
                <p>URLに指定されたID: {userid}</p>
                <p>
                    {userid}のid: {values.id}
                </p>
                <p>
                    {userid}のname: {values.name}
                </p>
                <p>
                    {userid}のhistory: {values.history}
                </p>
            </div>
        </Layout>
    );
};

export default UserPage;
