import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface UploadProps {
  onDrop: (acceptedFiles: File[]) => void;
}

export const useFileUpload = ({ onDrop }: UploadProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDropCallback = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCallback,
  });

  return {
    files,
    getRootProps,
    getInputProps,
    isDragActive,
  };
};
