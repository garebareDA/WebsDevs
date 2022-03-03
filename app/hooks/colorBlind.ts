import { useEffect, useState } from 'react';
import { simulate } from '@bjornlu/colorblind';

export const useColorBlind = (): {
  setFile: (file: File) => void,
  original: string,
  protanopia: string,
  deuteranopia: string,
  tritanopia: string,
  error: boolean,
} => {
  const [file, setFile] = useState<File | null>(null);
  const [original, setOriginal] = useState<string>('');
  const [protanopia, setProtanopia] = useState<string>('');
  const [deuteranopia, setDeuteranopia] = useState<string>('');
  const [tritanopia, setTritanopia] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (file === null) return;
    const image = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        if (ctx === null) {
          setError(true);
          return;
        }
        ctx.drawImage(image, 0, 0);
        const imageData = ctx.getImageData(0, 0, image.width, image.height);
        const protanopiaImageData = ctx.getImageData(0, 0, image.width, image.height);
        const tritanopiaImageData = ctx.getImageData(0, 0, image.width, image.height);
        const deuteranopiaImageData = ctx.getImageData(0, 0, image.width, image.height);

        for(let y = 0; y < imageData.height; y++) {
          for(let x=0; x<imageData.width; x++) {
            const index = (y * imageData.width + x) * 4;
            const r = imageData.data[index];
            const g = imageData.data[index + 1];
            const b = imageData.data[index + 2];

            const p = simulate({ r, g, b }, "protanopia");
            const t = simulate({ r, g, b }, "tritanopia");
            const d = simulate({ r, g, b }, "deuteranopia");

            protanopiaImageData.data[index] = p.r;
            protanopiaImageData.data[index + 1] = p.g;
            protanopiaImageData.data[index + 2] = p.b;

            tritanopiaImageData.data[index] = t.r;
            tritanopiaImageData.data[index + 1] = t.g;
            tritanopiaImageData.data[index + 2] = t.b;

            deuteranopiaImageData.data[index] = d.r;
            deuteranopiaImageData.data[index + 1] = d.g;
            deuteranopiaImageData.data[index + 2] = d.b;
          }
        }
        setOriginal(canvas.toDataURL());

        ctx.putImageData(protanopiaImageData, 0, 0);
        setProtanopia(canvas.toDataURL());

        ctx.putImageData(deuteranopiaImageData, 0, 0);
        setDeuteranopia(canvas.toDataURL());

        ctx.putImageData(tritanopiaImageData, 0, 0);
        setTritanopia(canvas.toDataURL());
      };
      image.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, [file]);

  return {
    setFile,
    original,
    protanopia,
    deuteranopia,
    tritanopia,
    error
  };
};