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
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{`Error: ${error.message}`}</div>;
    }
    console.log(values);

    return (
        <>
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
        </>
    );
};

export default UserPage;
