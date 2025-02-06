'use client'

import React from 'react';
import Link from 'next/link';
import { Paintbrush, Home, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
    
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-[138deg] from-[#AEEAEC] via-[#FFC9D0] to-[#56C5FF]">
      <header className="w-full px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/20 border-b border-white/20">
        <Link href="/" className="flex items-center justify-center">
          <Paintbrush className="w-6 h-6 mr-2 text-slate-800" />
          <span className="font-bold text-xl text-slate-800">100x Canvas</span>
        </Link>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center backdrop-blur-md bg-white/20 p-8 rounded-xl border border-white/20 shadow-lg">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-white/50 flex items-center justify-center">
              <Paintbrush className="h-12 w-12 text-slate-800" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-slate-800 mb-6">Page not found</h2>
          
          <p className="text-lg text-slate-700 mb-8 max-w-md mx-auto">
           {` Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.`}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to home
            </Link>
            
            <button
              onClick={() => router.back()}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white/95 text-slate-800 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go back
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-700 text-sm">
            Need help?{" "}
            <Link href="/contact" className="text-blue-600 hover:text-blue-500 transition-colors">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;