import { useRouter } from "next/router";
import { getDummyJsonData } from "../../dummyData";

// コンポーネント：ユーザーページ出力
const UserPage = () => {
  const router = useRouter();

  // URLに入力されたユーザID読み出し
  const { id } = router.query;

  // ユーザ情報読み出し
  // 本来はここでFireStoreアクセス
  const dummyJsonData = getDummyJsonData(Number(id));

  console.log({ dummyJsonData });
  const dummyData = JSON.parse(dummyJsonData);

  console.log({ dummyData });

  return (
    <>
      <p>URLに指定されたID: {id}</p>
      <p>
        {id}のid: {dummyData.id}
      </p>
      <p>
        {id}のname: {dummyData.name}
      </p>
      <p>
        {id}のhistory: {dummyData.history}
      </p>
    </>
  );
};

export default UserPage;
