import Link from 'next/link';
import React from 'react';

const notfound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-6 text-center px-6">

      
      <h1 className="text-9xl font-bold text-orange-500">404</h1>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-sm max-w-md">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
      </div>

      
      <Link href="/">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition">
           Back to Home
        </button>
      </Link>

    </div>
    );
};

export default notfound;