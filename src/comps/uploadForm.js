import React, { useState } from 'react';
import ProgressBar from './progressBar';

function UploadForm() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null);
            setError('Please select an image file (png, jpeg or jpg file)')
        }
    }
    return (
        <form>
            <label>
                <span className='add-btn'>+</span>
                <input type='file' className='add-btn-holder' onChange={changeHandler} />
            </label>
            <div className='output'></div>
            {error && <div className='error'>{error}</div>}
            {file && <><div>Uploading Image...</div><ProgressBar file={file} setFile={setFile} /></>}
        </form>
    );
}

export default UploadForm;