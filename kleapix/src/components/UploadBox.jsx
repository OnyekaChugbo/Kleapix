import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function UploadBox() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const previews = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    );
    setFiles(previews);
  }, []);

  const thumbs = files.map(file => (
    <div key={file.name} className="w-40 h-40 m-2 border rounded overflow-hidden">
      <img src={file.preview} className="object-cover w-full h-full" />
    </div>
  ));

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true
  });

  return (
    <>
      <div {...getRootProps({ className: 'border-2 border-dashed border-gray-400 p-6 rounded-xl text-center cursor-pointer' })}>
        <input {...getInputProps()} />
        <p>Drag & drop images here, or click to select files</p>
      </div>
      <div className="flex flex-wrap mt-6">{thumbs}</div>
    </>
  );
}