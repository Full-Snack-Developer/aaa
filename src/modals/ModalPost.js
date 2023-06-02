import UserComponent from "@/component/UserComponent";
import { auth, fs, storage } from "@/firebase/fireconfig";
import { Button, Input, Modal, Space, message } from "antd";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { CloseCircle, Image, EmojiHappy, TagUser } from "iconsax-react";
import { ref } from "firebase/storage";
import { handleUploadToStorage } from "../utils/uploadFile";

import React, { useEffect, useState } from "react";

const ModalPost = (props) => {
  const { isVisible, onClose, post } = props;
  const [fileList, setfileList] = useState([]);
  const [content, setContent] = useState("");

  const user = auth.currentUser;

  useEffect(() => {
    if (post) {
      setContent(post.content);
    }
  }, [post]);

  const handleClosemodal = () => {
    setfileList([]);
    setContent("");

    onClose();
  };

  const handleFileSeleted = (items) => {
    const newFiles = [];

    for (const i in items) {
      if (items[i].size) {
        newFiles.push(items[i]);
      }
    }

    setfileList(newFiles);
  };

  const handleRemoveImage = (index) => {
    fileList.splice(index, 1);
    const newImageList = [...fileList];
    setfileList(newImageList);
  };

  const handlePost = async () => {
    if (!user) {
      const data = {
        imageURL:
          fileList.length > 0 ? await handleUploadToStorage(fileList[0]) : "",
        content,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        createBy: "hele", //user.uid
      };

      await addDoc(collection(fs, "posts"), data).then(async (snap) => {
        // upload image to post with post id -> snap.id
        // if (fileList.length > 0) {
        //   const imageLinks = [];
        //   fileList.forEach(async (file) => {
        //     // handle upload file
        //     const downloadURL = file.name;
        //     // lấy được sau khi upload file lên storage
        //     imageLinks.push(downloadURL);
        //     if (imageLinks.length === fileList.length) {
        //       await updateDoc(doc(fs, `posts/${snap.id}`), {
        //         imageURLs: imageLinks,
        //         updatedAt: Date.now(),
        //       });
        //     }
        //   });
        // }
      });
      message.success("Post complete");
      handleClosemodal();
    } else {
      message.error("Please log in !!!");
    }
  };

  const handleUpdatePost = () => {
    if (post) {
    }
  };

  return (
    <Modal open={isVisible} onCancel={handleClosemodal} footer={null}>
      <UserComponent />
      <Input.TextArea
        rows={3}
        placeholder="Type something"
        // allowClear
        maxLength={500}
        bordered={false}
        value={content}
        onChange={(val) => setContent(val.target.value)}
        style={{ marginTop: 10 }}
      />
      <div className="row">
        <div className="col-6" style={{ color: "#9BABB8" }}>
          Thêm vào bài viết
        </div>
        <div className="col-6 text-right">
          <Space>
            <label htmlFor="inp-file">
              <Image size={24} color="#9BABB8" />
            </label>
            <Input
              accept={["image/png", "image/jpg"]}
              type="file"
              className="d-none"
              id="inp-file"
              multiple
              onChange={(val) => handleFileSeleted(val.target.files)}
            />
          </Space>
          <Space>
            <label htmlFor="inp-file">
              <EmojiHappy color="#9BABB8" />
            </label>
            <Input
              accept={["image/png", "image/jpg"]}
              type="file"
              className="d-none"
              id="inp-file"
              multiple
              onChange={(val) => handleFileSeleted(val.target.files)}
            />
          </Space>
          <Space>
            <label htmlFor="inp-file">
              <TagUser color="#9BABB8" />
            </label>
            <Input
              accept={["image/png", "image/jpg"]}
              type="file"
              className="d-none"
              id="inp-file"
              multiple
              onChange={(val) => handleFileSeleted(val.target.files)}
            />
          </Space>
        </div>
      </div>
      {fileList ? (
        <div className="row">
          {fileList.map((item, index) => (
            <div
              style={{
                position: "relative",
              }}
              className="col-4"
            >
              <img
                style={{
                  width: 150,
                  height: 150,
                }}
                src={URL.createObjectURL(item)}
                className="img img-thumbnail col mt-2"
              />

              <Button
                onClick={() => handleRemoveImage(index)}
                type="text"
                icon={<CloseCircle size={18} color="#212121" />}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 0,
                  left: 5,
                  marginTop: 10,
                  marginLeft: 10,
                }}
              />
            </div>
          ))}
        </div>
      ) : null}

      <div>
        <Button
          onClick={() => (post ? handleUpdatePost() : handlePost())}
          className="mt-2"
          style={{ width: "100%" }}
        >
          Post
        </Button>
      </div>
    </Modal>
  );
};

export default ModalPost;