import React, { useState, useRef } from 'react';

function FileInputButton() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const handleClick = (e) => {
    fileInputRef.current.click();
    e.preventDefault();
  };

  return (
    <div className=''>
      <span className="placeholder">{fileName}</span>
      <div className='w-full bg-zinc-200 p-1 h-[7em] flex flex-col justify-between'>
        <textarea className='bg-zinc-200 border border-none pl-2 outline-none text-sm placeholder-text-sm placeholder-gray-500 w-full' placeholder='Write here...' />
        <label htmlFor="file-upload" className="cursor-pointer" onClick={handleClick}>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <button className='bg-customgray px-4 py-1 mb-1 ml-2 rounded'><span className='flex font-semibold text-sm'><img src='images/upload.png' height='10px' width="50%" />Attach</span></button>
      </label>
      </div>
    </div>
  );
}

export default FileInputButton;
