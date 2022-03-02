import { useEffect, useState } from 'react';
import imageCompression from 'browser-image-compression';

type CompressedFile = {
  file: File,
  url: string,
}

export const useCompressor = (): {
  setFile: (file: File) => void,
  compressedFiles: CompressedFile[],
  error: boolean,
} => {
  const [file, setFile] = useState<File | null>(null);
  const [compressedFiles, setCompressedFiles] = useState<CompressedFile[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (file === null) return;
    try {
      imageCompression(file, {
        useWebWorker: true,
        maxSizeMB: 0.1,
      }).then((compressedFile) => {
        setError(false);
        const compressedFileUrl = URL.createObjectURL(compressedFile);
        setCompressedFiles([...compressedFiles, {
          file: compressedFile,
          url: compressedFileUrl,
        }]);
      });
    } catch (error) {
      setError(true);
      alert(error);
    }
  }, [file]);

  return {
    setFile,
    compressedFiles,
    error,
  };
};