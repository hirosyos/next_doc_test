import { useRouter } from "next/router";
import { getDummyJsonData, getDummyObjData } from "../../dummyData";

import React, { useState } from "react";
import ReactDOM from "react-dom";

import firebase from "firebase";
import {
  useCollectionData,
  useCollection,
  useDocumentData,
  useDocument,
} from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRQ8o4qDOtf-z3zuz54muAvn3NiovFBzI",
  authDomain: "next-doc-test.firebaseapp.com",
  databaseURL: "https://next-doc-test.firebaseio.com",
  projectId: "next-doc-test",
  storageBucket: "next-doc-test.appspot.com",
  messagingSenderId: "874511559326",
  appId: "1:874511559326:web:de4521a70605dd9224a98f",
};
firebase.initializeApp(firebaseConfig);

// コンポーネント：ユーザーページ出力
const UserPage = () => {
  const router = useRouter();

  // URLに入力されたユーザID読み出し
  const { userid } = router.query;
  console.log({ userid });

  // const [values, loading, error] = useCollectionData(
  //   firebase.firestore().collection("users2/1"),
  //   {
  //     idField: "id",
  //   }
  // );
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>{`Error: ${error.message}`}</div>;
  // }
  // return (
  //   <>
  //     <ul>
  //       {values.map((value) => (
  //         <li key={value.id}>{value.history}</li>
  //       ))}
  //     </ul>
  //     <p>URLに指定されたID: {userid}</p>
  //     <p>{userid}のid: TBD</p>
  //     <p>{userid}のname: TBD</p>
  //     <p>{userid}のhistory: TBD</p>
  //   </>
  // );

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
