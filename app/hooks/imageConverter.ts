import { useEffect, useState } from "react";
import { createCanvas } from "canvas";

export type ImageType = "png" | "jpeg";

type ConvertedFile = {
  file: File,
  url: string,
  type: ImageType,
}

export const useImageConverter = (): {
  setFile: (file: File) => void,
  setImageType: (imageType: ImageType) => void,
  converted: ConvertedFile[],
} => {
  const [file, setFile] = useState<File | null>(null);
  const [converted, setConverted] = useState<ConvertedFile[]>([]);
  const [imageType, setImageType] = useState<ImageType>("jpeg");

  useEffect(() => {
    if (file === null) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = createCanvas(img.width, img.height);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        if (imageType === "png") {
          const dataURL = canvas.toDataURL(`image/png`);
          setConverted([...converted, { file, url: dataURL, type: "png" }]);
          return;
        }

        if (imageType === "jpeg") {
          const dataURL = canvas.toDataURL(`image/jpeg`);
          setConverted([...converted, { file, url: dataURL, type: "jpeg" }]);
          return;
        }
      };
      img.src = e.target!.result as string;
    };
    reader.readAsDataURL(file);
  }, [file]);

  return {
    setFile,
    setImageType,
    converted,
  };
};