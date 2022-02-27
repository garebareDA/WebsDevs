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
        for(let y = 0; y < imageData.height; y++) {
          for(let x=0; x<imageData.width; x++) {
            const index = (y * imageData.width + x) * 4;
            const r = imageData.data[index];
            const g = imageData.data[index + 1];
            const b = imageData.data[index + 2];

            const { r: r2, g: g2, b: b2 } = simulate({ r, g, b }, "protanopia");
            imageData.data[index] = r2;
            imageData.data[index + 1] = g2;
            imageData.data[index + 2] = b2;
          }
        }
        ctx.putImageData(imageData, 0, 0);
        const url = canvas.toDataURL();
        console.log(url);
      };
      image.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, [file]);

  return {
    setFile,
  };
};