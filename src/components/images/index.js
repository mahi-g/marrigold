
import React from 'react';

const UploadImage = () => {
    return (
        <label htmlFor="upload-photo">
            <input type="file" id="upload-photo" name="img" accept="image/*" />
        </label>
    );

}


export default UploadImage;