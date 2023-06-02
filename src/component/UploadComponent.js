import React from "react";
import { PlusOutlined } from "@ant-design/icons";
// import { Upload, message } from "antd";
import { useState } from "react";

import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
};

const UploadComponent = () => {
  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </div>
  );
};

export default UploadComponent;
