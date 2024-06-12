import React, { CSSProperties } from "react";
import { useFileUpload } from "../utils/fileUpload";
import { Container, Button } from "./styles/Styles";

const Dropzone: React.FC = () => {
  const { files, getRootProps, getInputProps, isDragActive } = useFileUpload({
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <Container>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        {files && files[0] && files[0].name ? (
          <p>{files[0].name}</p>
        ) : isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <Button onClick={() => console.log(files)}>Upload Files</Button>
    </Container>
  );
};

const dropzoneStyle: CSSProperties = {
  border: "2px dashed #007bff",
  padding: "20px",
  width: "300px",
  textAlign: "center",
};

export default Dropzone;
