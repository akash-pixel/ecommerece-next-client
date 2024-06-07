import { IProductCreate } from '@/interface/product';
import React from 'react';

interface IProps {
    Product: IProductCreate
}

const MediaUpload = ({ }: IProductCreate) => {
    return (
        <div className="media-uploader">
            <div className="media-header">
                Media
                <a href="#" className="add-media-url">Add media from URL</a>
            </div>
            <div className="media-upload">
                <div className="drag-drop-area">
                    Drag and drop your image here
                </div>
                <div className="or-text">or</div>
                <button className="browse-button">Browse image</button>
            </div>
        </div>

    );
};

export default MediaUpload;
