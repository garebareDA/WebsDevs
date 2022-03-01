import { useEffect, useState } from "react";
import sharp from "sharp";

type ImageType = "png" | "jpg" | "webp";

export const useImageConverter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageType, setImageType] = useState<ImageType>("jpg");

  useEffect(() => {
    
  }, [file]);
};