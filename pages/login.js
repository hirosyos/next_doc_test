import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { fire } from "../lib/db";

// export async function getServerSideProps() {
//   const firebaseConfig = {
//     apiKey: process.env.FIREBASE_APIKEY,
//     authDomain: process.env.FIREBASE_AUTHDOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASEURL,
//     projectId: process.env.FIREBASE_PROJECTID,
//     storageBucket: process.env.FIREBASE_STRAGEBUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
//     appId: process.env.FIREBASE_APPID,
//   };
//   console.log(firebaseConfig);

//   firebase.initializeApp(firebaseConfig);

//   return { props: {  } };
// }

const firebaseConfigOld = {
  apiKey: "AIzaSyBRQ8o4qDOtf-z3zuz54muAvn3NiovFBzI",
  authDomain: "next-doc-test.firebaseapp.com",
  databaseURL: "https://next-doc-test.firebaseio.com",
  projectId: "next-doc-test",
  storageBucket: "next-doc-test.appspot.com",
  messagingSenderId: "874511559326",
  appId: "1:874511559326:web:de4521a70605dd9224a98f",
};

console.log(firebaseConfigOld);

firebase.initializeApp(firebaseConfigOld);

const Signin = () => {
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
      await firebase.auth().createUserWithEmailAndPassword(email, pass);
    } catch (e) {
      console.log(e.message, mounted);
      if (mounted.current) setError(e);
    } finally {
      if (mounted.current) setPending(false);
    }
  };
  return (
    <div>
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
        <button type="submit">Signin</button>
        {pending && "Pending..."}
        {error && `Error: ${error.message}`}
      </form>
    </div>
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
    <div>
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
    </div>
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
    <div>
      <button type="button" onClick={logout}>
        Logout
      </button>
      {pending && "Pending..."}
    </div>
  );
};

function Auth() {
  const [user, initialising, error] = useAuthState(firebase.auth());
  if (initialising) {
    return <div>Initialising...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!user) {
    return (
      <>
        <Signin />
        <Login />
      </>
    );
  }
  return (
    <div>
      User: {user.email}
      <Logout />
    </div>
  );
}

export default Auth;
