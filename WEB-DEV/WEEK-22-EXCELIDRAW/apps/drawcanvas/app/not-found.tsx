'use client'

import React from 'react';
import  Link  from 'next/link';
import { Shapes, Home, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const  NotFound=()=> {

    const router=useRouter();
    
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Shapes className="h-12 w-12 text-indigo-600" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Page not found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to home
          </Link>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go back
          </button>
        </div>
      </div>
      
      <div className="mt-16">
        <p className="text-center text-gray-600 text-sm">
          Need help? <a href="#" className="text-indigo-600 hover:text-indigo-500">Contact support</a>
        </p>
      </div>
    </div>
  );
}

export default NotFound;