import { useRouter } from "next/router";
import { getDummyJsonData, getDummyObjData } from "../../dummyData";

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
      <>
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
      </>
    );
  } else {
    return <p>URLに指定されたID: {id} ロード中</p>;
  }
};

// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

export default UserPage;
