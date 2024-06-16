"use client"

import { HttpRequest } from '@/app/http.request.service';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface IProps {

}

const FileUpload = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: async (acceptedFiles: any) => {
            console.log({ acceptedFiles })

            const formData = new FormData();

            acceptedFiles.forEach((file: any) => {
                formData.append(
                    "files",
                    file
                );
            })

            console.log(formData);

            const uploadedFile = await HttpRequest.uploadProductImage(formData);
            console.log({ uploadedFile })
            if (!uploadedFile) {

                return;
            }
            setUploadedFiles(acceptedFiles);

        },
    });
    return (

        <div {...getRootProps()} className="media-upload">
            <input {...getInputProps()} className="drag-drop-area" placeholder='abc' />
            <div style={{ color: "gray" }}>
                Drag and drop your image here
            </div>
            <div className="or-text">or</div>
            <button className="browse-button">Browse image</button>
            <ul>
                {uploadedFiles.map((file: any) => (
                    <li key={file.name}>
                        <img src={file.path} alt={file.name} width="50" height="60" />
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default FileUpload;