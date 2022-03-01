import { useEffect, useState } from "react";

export type ImageType = "png" | "jpg" | "webp";

export const useImageConverter = ():{
  setFile: (file: File) => void,
  setImageType: (imageType: ImageType) => void,
} => {
  const [file, setFile] = useState<File | null>(null);
  const [imageType, setImageType] = useState<ImageType>("jpg");

  useEffect(() => {
    if (file === null) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      
    };
    reader.readAsArrayBuffer(file);
  }, [file]);

  return {
    setFile,
    setImageType,
  };
};