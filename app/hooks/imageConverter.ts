import { useEffect, useState } from "react";
import sharp from "sharp";

export type ImageType = "png" | "jpg" | "webp";

export const useImageConverter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageType, setImageType] = useState<ImageType>("jpg");

  useEffect(() => {
    
  }, [file]);
};