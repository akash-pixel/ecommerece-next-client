"use client"

import FileUpload from '@/components/common/file-upload/file-upload.component';
import { IProductCreate } from '@/interface/product';
import React, { useState } from 'react';
import "./styles.css"
import { useDropzone } from 'react-dropzone';

interface IProps {
    Product?: IProductCreate
}

const MediaUpload = ({ }: IProps) => {

    return (
        <div className="media-uploader">
            <div className="media-header">
                Media
                <a href="#" className="add-media-url">Add media from URL</a>
            </div>
            <FileUpload />
        </div>

    );
};

export default MediaUpload;
