import React, { useState } from 'react';
import UploadBox from './components/UploadBox';

export default function App() {
  const [showTool, setShowTool] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {!showTool ? (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-br from-blue-50 to-blue-100">
          <h1 className="text-5xl font-extrabold mb-4">Kleapix</h1>
          <p className="text-lg mb-6 max-w-xl">
            Clean watermark-free images with one click. Kleapix uses smart AI to remove unwanted text and logos from your photos in seconds.
          </p>
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
            onClick={() => setShowTool(true)}
          >
            Get Started
          </button>
        </div>
      ) : (
        <div className="p-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Upload Your Watermarked Images</h2>
          <UploadBox />
        </div>
      )}
    </div>
  );
}