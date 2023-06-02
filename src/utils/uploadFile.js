import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/fireconfig";

export const handleUploadToStorage = async (file) => {
  //   const filename = replaceName(file.name)

  const storageRef = ref(storage, file.name);

  const res = await uploadBytes(storageRef, file);

  if (res) {
    if (res.metadata.size === file.size) {
      return getDownloadURL(storageRef);
    } else {
      return "uploading";
    }
  } else {
    return "Error upload";
  }
};
