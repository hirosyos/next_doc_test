import Head from "next/head";
import { useRouter } from "next/router";
import { getDummyJsonData, getDummyObjData } from "../../dummyData";
import styles from "../../styles/Home.module.scss";
import Layout from "../../components/Layout";

// コンポーネント：ユーザーページ出力
const UserPage = () => {
    const router = useRouter();

    // URLに入力されたユーザID読み出し
    const { id } = router.query;
    console.log({ id });

    // ユーザ情報読み出し;
    // 本来はここでFireStoreアクセス;
    const dummyJsonData = getDummyJsonData(Number(id));

    if (dummyJsonData) {
        console.log({ dummyJsonData });
        const dummyData2 = JSON.parse(dummyJsonData);

        //   const dummyData2 = getDummyObjData(Number(id));

        console.log({ dummyData2 });

        return (
            <Layout>
                <div className={styles.container}>
                    <Head>
                        <title>自分史図書館/ユーザダミー</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <h1>ダミーデータ読み出しテストページ</h1>
                    <p>URLに指定されたID: {id}</p>
                    <p>
                        {id}のid: {dummyData2.id}
                    </p>
                    <p>
                        {id}のname: {dummyData2.name}
                    </p>
                    <p>
                        {id}のhistory: {dummyData2.history}
                    </p>
                </div>
            </Layout>
        );
    } else {
        return (
            <Layout>
                <div className={styles.container}>
                    <Head>
                        <title>自分史図書館/ユーザダミー</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <p>URLに指定されたID: {id} ロード中</p>
                </div>
            </Layout>
        );
    }
};

// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

export default UserPage;
