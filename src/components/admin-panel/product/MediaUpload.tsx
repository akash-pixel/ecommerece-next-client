import React from 'react';

const MediaUpload = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Media</h3>
                <button className="text-purple-600">Add media from URL</button>
            </div>
            <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center">
                <p className="text-gray-600">Drag and drop your image here</p>
                <p className="text-gray-400">or</p>
                <button className="px-4 py-2 text-white bg-purple-600 rounded-lg">Browse image</button>
            </div>
        </div>
    );
};

export default MediaUpload;
