import { useEffect, useState } from 'react';
import { simulate } from '@bjornlu/colorblind';
import { createCanvas, loadImage } from 'canvas';

export const useColorBlind = (): {
  setFile: (file: File) => void,
} => {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (file === null) return;
    const image = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      image.onload = () => {
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        const imageData = ctx.getImageData(0, 0, image.width, image.height);
      };
      image.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);

  }, [file]);

  return {
    setFile,
  };
};