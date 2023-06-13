import React from "react";
import { Card } from "antd";
import TitleComponent from "./TitleComponent";
import UserComponent from "./UserComponent";

const NotiComponent = ({ item }) => {
  // const [userDetail, setUserDetail] = useState();

  // useEffect(() => {
  //   getUserById();
  // }, [uid]);

  // const getUserById = async () => {
  //   await getDoc(doc(fs, `users/${uid}`))
  //     .then((item) =>
  //       setUserDetail({
  //         key: item.id,
  //         ...item.data(),
  //       })
  //     )
  //     .catch((error) => console.log(error));
  // };

  return (
    <div
      style={{
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Card
        title="New Notication"
        bordered={false}
        style={{
          width: 500,
          boxShadow:
            "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
        }}
      >
        <UserComponent uid={item.from} />
        <TitleComponent
          text={item.content}
          size={15}
          weight={350}
          color="#9BABB8"
        />
      </Card>
    </div>
  );
};

export default NotiComponent;
