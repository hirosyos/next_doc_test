let dummyData = [
  {
    id: 1,
    name: "アルファ",
    history: "今日は頑張った",
  },
  {
    id: 2,
    name: "ブラボー",
    history: "明日も頑張ろう",
  },
  {
    id: 3,
    name: "チャーリー",
    history: "明後日も頑張ろう",
  },
];

// let dummyJsonData = JSON.stringify(dummyData);

export const getDummyJsonData = (id) => {
  // 指定されたユーザIDの情報を取り出す
  // const userData = dummyData.find(function (user) {
  //   Number(user.id) == Number(id);
  //   alert(`user.idは${user.id} idは${id}`);
  // });

  const userData = dummyData.find((element) => element.id === id);
  // alert(`user.idは${element.id} idは${id}`);

  console.log({ userData });

  return JSON.stringify(userData);
};
