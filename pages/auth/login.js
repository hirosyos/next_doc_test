import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../../plugins/firebase";
import styles from "../../styles/Home.module.scss";
import Layout from "../../components/Layout";

// Firestoreにデータを送信する関数
const postDataToFirestore = async (collectionName, docName, postData) => {
    const addedData = await firebase
        .firestore()
        .collection(collectionName)
        .doc(docName)
        .set(postData);
    return addedData;
};

const Signup = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [account, setAccount] = useState("");
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(false);
    const mounted = useRef(true);
    useEffect(() => {
        const cleanup = () => {
            mounted.current = false;
        };
        return cleanup;
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setPending(true);
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, pass);

            // //ユーザデータ書き込み
            const postData = {
                history: "React難しい",
                id: "4",
                name: account,
            };
            await postDataToFirestore("users2", account, postData);
        } catch (e) {
            console.log(e.message, mounted);
            if (mounted.current) setError(e);
        } finally {
            if (mounted.current) setPending(false);
        }
    };
    return (
        <>
            <h2>サインアップ</h2>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email..."
                />
                <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Password..."
                />
                <input
                    type="text"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    placeholder="Account..."
                />
                <button type="submit">Signup</button>
                {pending && "Pending..."}
                {error && `Error: ${error.message}`}
            </form>
        </>
    );
};

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(false);
    const mounted = useRef(true);
    useEffect(() => {
        const cleanup = () => {
            mounted.current = false;
        };
        return cleanup;
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setPending(true);
        try {
            await firebase.auth().signInWithEmailAndPassword(email, pass);
        } catch (e) {
            console.log(e.message, mounted);
            if (mounted.current) setError(e);
        } finally {
            if (mounted.current) setPending(false);
        }
    };
    return (
        <>
            <h2>ログイン</h2>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email..."
                />
                <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Password..."
                />
                <button type="submit">Login</button>
                {pending && "Pending..."}
                {error && `Error: ${error.message}`}
            </form>
        </>
    );
};

const Logout = () => {
    const [pending, setPending] = useState(false);
    const mounted = useRef(true);
    useEffect(() => {
        const cleanup = () => {
            mounted.current = false;
        };
        return cleanup;
    }, []);
    const logout = async () => {
        setPending(true);
        await firebase.auth().signOut();
        if (mounted.current) setPending(false);
    };
    return (
        <>
            <button type="button" onClick={logout}>
                Logout
            </button>
            {pending && "Pending..."}
        </>
    );
};

function Auth() {
    const [user, initialising, error] = useAuthState(firebase.auth());
    if (initialising) {
        return (
            <Layout>
                <div className={styles.container}>
                    <Head>
                        <title>自分史図書館/ログイン</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div>Initialising...</div>
                </div>
            </Layout>
        );
    }
    if (error) {
        return (
            <Layout>
                <div className={styles.container}>
                    <Head>
                        <title>自分史図書館/ログイン</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div>Error: {error}</div>
                </div>
            </Layout>
        );
    }
    if (!user) {
        return (
            <Layout>
                <div className={styles.container}>
                    <Head>
                        <title>自分史図書館/ログイン</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <h1>認証ページ</h1>
                    <Signup />
                    <Login />
                </div>
            </Layout>
        );
    }
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>自分史図書館/ログイン</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <p>displayName: {user.displayName}</p>
                <p>email: {user.email}</p>
                <p>emailVerified: {user.emailVerified}</p>
                <p>photoURL: {user.photoURL}</p>
                <p>isAnonymous: {user.isAnonymous}</p>
                <p>uid: {user.uid}</p>
                {/* <p>providerData: {user.providerData}</p> */}
                {console.log("あああああ")}
                {console.log({ user })}
                <Logout />
            </div>
        </Layout>
    );
}

export default Auth;
