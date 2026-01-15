import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-full mb-6">
        <span className="material-symbols-outlined text-6xl text-slate-400">wrong_location</span>
      </div>
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">Page Not Found</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-md"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;