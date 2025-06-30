import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Search, Heart, Sparkles, ArrowRight } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="card p-12 animate-slide-up">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative p-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-2xl">
                <CheckCircle className="h-20 w-20 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="h-8 w-8 text-yellow-400 animate-bounce-subtle" />
              </div>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Thanks for sharing! 🎉
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl lg:text-3xl text-gray-600 mb-12 font-light">
            Let's find you a match.
          </p>
          
          {/* Info Cards */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center space-x-4 text-left p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border border-green-200">
              <div className="p-3 bg-green-500 rounded-xl">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <p className="text-lg text-green-800 font-medium">
                Your skill has been added to our community marketplace.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-left p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <div className="p-3 bg-blue-500 rounded-xl">
                <Search className="h-6 w-6 text-white" />
              </div>
              <p className="text-lg text-blue-800 font-medium">
                Start browsing to find someone who needs what you offer and has what you need.
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/browse"
              className="group btn-primary flex items-center justify-center space-x-3 text-xl"
            >
              <Search className="h-6 w-6" />
              <span>Browse Skills</span>
              <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0" />
            </Link>
            
            <Link
              to="/"
              className="group btn-secondary flex items-center justify-center space-x-3 text-xl"
            >
              <Heart className="h-6 w-6" />
              <span>Back to Home</span>
              <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;