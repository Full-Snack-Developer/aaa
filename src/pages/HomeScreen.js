import React, { use, useEffect, useState } from "react";
import StoryComponent from "@/component/StoryComponent";
import PostComponent from "@/component/PostComponent";
import BigCardComponent from "@/component/BigCardComponent";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { fs } from "@/firebase/fireconfig";
import { List } from "antd";
import ModalPost from "@/modals/ModalPost";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPost, setCurrentPost] = useState();
  const [isVisibleModalPost, setIsVisibleModalPost] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    setIsLoading(true);

    // realtime

    onSnapshot(collection(fs, "posts"), (snap) => {
      if (snap) {
        if (snap) {
          const items = [];
          snap.forEach((item) => {
            items.push({
              key: item.id,
              ...item.data(),
            });
          });

          setPosts(items);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          console.log("posts not found in homescreen");
        }
      }
    });

    // not realtime

    // const snap = await getDocs(collection(fs, "posts"));

    // if (snap) {
    //   const items = [];
    //   snap.forEach((item) => {
    //     items.push({
    //       key: item.id,
    //       ...item.data(),
    //     });
    //   });

    //   setPosts(items);
    //   setIsLoading(false);
    // } else {
    //   setIsLoading(false);
    //   console.log("posts not found in homescreen");
    // }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <StoryComponent /> */}

      <div style={{ marginTop: 20 }}>
        <PostComponent />
      </div>
      <List
        loading={isLoading}
        dataSource={posts}
        renderItem={(item) => (
          <BigCardComponent
            post={item}
            onEditPost={() => {
              setCurrentPost(item);
              setIsVisibleModalPost(true);
            }}
          />
        )}
      />
      <ModalPost
        isVisible={isVisibleModalPost}
        onClose={() => {
          setIsVisibleModalPost(false);
        }}
        post={currentPost}
      />
    </div>
  );
};

export default HomeScreen;
