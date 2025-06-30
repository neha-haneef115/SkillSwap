import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Plus, Search, Users, Info } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-primary-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary-600">
              SkillSwap
            </span>
          </Link>
          
          <div className="flex space-x-2">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <Home className="h-5 w-5" />
              <span className="font-semibold">Home</span>
            </Link>
            
            <Link
              to="/post"
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                isActive('/post') 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <Plus className="h-5 w-5" />
              <span className="font-semibold">Post</span>
            </Link>
            
            <Link
              to="/browse"
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                isActive('/browse') 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <Search className="h-5 w-5" />
              <span className="font-semibold">Browse</span>
            </Link>

            <Link
              to="/about"
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <Info className="h-5 w-5" />
              <span className="font-semibold">About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;