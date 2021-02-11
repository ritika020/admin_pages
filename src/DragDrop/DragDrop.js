
import React, { useState } from "react";
import "./DragDrop.css";
import Dropzone from "react-dropzone";
import img from "../Images/img.svg";

export default function DragDrop() {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles => {
    setFileNames(acceptedFiles.map(file => file.name));
    console.log(acceptedFiles[0])
  }
  
  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p className="Admin_text">Drag'n'drop files, or click to select files</p>
            <p className="Admin_text1"><img src={img} className="Admin_arrow"></img>Extra Uploads</p>
          </div>
        )}
      </Dropzone>
      <div>
        {/* <strong>Files:</strong>
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
