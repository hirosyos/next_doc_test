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

// コンポーネント：ユーザーページ出力
const UserPage = () => {
    const router = useRouter();

    // URLに入力されたユーザID読み出し
    const { userid } = router.query;
    console.log({ userid });

    const [values, loading, error] = useDocumentData(
        // firebase.firestore().collection("todos"),
        // {
        //   idField: "id",
        // }
        firebase.firestore().doc(`users2/${userid}`),
        {
            idField: "id",
        }
    );
    if (loading) {
        return (
            <Layout>
                <div className={styles.container}>
                    <div>Loading...</div>
                </div>
            </Layout>
        );
    }
    if (error) {
        return (
            <Layout>
                <div className={styles.container}>
                    <div>{`Error: ${error.message}`}</div>;
                </div>
            </Layout>
        );
    }
    console.log(values);

    return (
        <Layout>
            <div className={styles.container}>
                {/* <ul>
        {values.map((value) => (
          <li key={value.id}>{value.history}</li>
        ))}
      </ul> */}
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
