import React from 'react';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Page not found</p>
        <p className="text-gray-500 mb-8">The requested page does not exist.</p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go back to homepage
        </a>
      </div>
    </div>
  );
};

export default Error;
