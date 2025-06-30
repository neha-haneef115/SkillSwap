import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Heart, Star, Users, Shield, Zap, ArrowRight, CheckCircle, Quote, Sparkles, Globe, TrendingUp, Award } from 'lucide-react';

const Home: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      text: "I learned photography from my neighbor and taught her web design in return. It's amazing what you can accomplish without spending money!",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      location: "Austin, TX", 
      text: "Through SkillSwap, I found someone to help with my plumbing in exchange for guitar lessons. Best trade ever!",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      location: "Miami, FL",
      text: "The community here is incredible. I've made lasting friendships while learning new skills.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    }
  ];

  const popularSkills = [
    { name: "Web Development", count: 45, icon: "💻", trend: "+12%" },
    { name: "Photography", count: 38, icon: "📸", trend: "+8%" },
    { name: "Cooking", count: 52, icon: "👨‍🍳", trend: "+15%" },
    { name: "Language Tutoring", count: 29, icon: "🗣️", trend: "+6%" },
    { name: "Music Lessons", count: 34, icon: "🎵", trend: "+10%" },
    { name: "Home Repair", count: 41, icon: "🔧", trend: "+9%" }
  ];

  const features = [
    {
      icon: Plus,
      title: "Share Your Skills",
      description: "Post what you're good at and what you'd like to learn. From coding to cooking, every skill has value in our community.",
      color: "from-primary-600 to-primary-700",
      delay: "0s"
    },
    {
      icon: Search,
      title: "Find Perfect Matches",
      description: "Browse through your neighbors' skills and find someone who needs what you offer and has what you need.",
      color: "from-secondary-600 to-secondary-700",
      delay: "0.2s"
    },
    {
      icon: Heart,
      title: "Build Community",
      description: "Connect, learn, and grow together. Create lasting friendships while developing new abilities.",
      color: "from-accent-600 to-accent-700",
      delay: "0.4s"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden hero-bg min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-primary-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Hero Icon */}
            <div className="flex justify-center mb-12 animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-600 rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
                <div className="relative p-8 bg-primary-600 rounded-full shadow-2xl animate-glow">
                  <Heart className="h-20 w-20 text-white" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-8 w-8 text-accent-400 animate-bounce-subtle" />
                </div>
              </div>
            </div>
            
            {/* Hero Title */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-slide-up">
              <span className="text-white">Trade Talent With Your</span>
              <br />
              <span className="gradient-text">Neighbors</span>
            </h1>
            
            {/* Hero Subtitle */}
            <p className="text-3xl sm:text-4xl lg:text-5xl text-white/90 mb-6 font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
              No cash. Just community.
            </p>
            
            {/* Hero Description */}
            <p className="text-xl sm:text-2xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Connect with your neighbors to exchange skills, build relationships, and create a stronger community—all without spending a dime.
            </p>
            
            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/post"
                className="group btn-primary flex items-center space-x-4 text-xl w-full sm:w-auto relative overflow-hidden"
              >
                <Plus className="h-7 w-7 transition-transform group-hover:rotate-90" />
                <span>Post a Skill</span>
                <ArrowRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0" />
              </Link>
              
              <Link
                to="/browse"
                className="group btn-secondary flex items-center space-x-4 text-xl w-full sm:w-auto relative overflow-hidden"
              >
                <Search className="h-7 w-7" />
                <span>Find Skills</span>
                <ArrowRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 text-white/80 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-3 glass px-6 py-3">
                <Shield className="h-6 w-6 text-green-400" />
                <span className="text-lg font-medium">100% Free</span>
              </div>
              <div className="flex items-center space-x-3 glass px-6 py-3">
                <Users className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-medium">Community Verified</span>
              </div>
              <div className="flex items-center space-x-3 glass px-6 py-3">
                <Zap className="h-6 w-6 text-yellow-400" />
                <span className="text-lg font-medium">Instant Matching</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-32 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Three simple steps to start building meaningful connections in your community
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card p-12 text-center group hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: feature.delay }}
              >
                <div className="flex justify-center mb-8">
                  <div className={`p-6 bg-gradient-to-br ${feature.color} rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110`}>
                    <feature.icon className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{index + 1}. {feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Skills Section */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Popular Skills</h2>
            <p className="text-2xl text-gray-600">
              See what's trending in your community
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="card p-8 text-center group hover:bg-gradient-to-br hover:from-white hover:to-primary-50 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{skill.name}</h3>
                <p className="text-lg text-gray-600 mb-3">{skill.count} available</p>
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-semibold">{skill.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-32 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">What Our Community Says</h2>
            <p className="text-2xl text-gray-600">
              Real stories from real neighbors
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="card p-10 hover:bg-gradient-to-br hover:from-white hover:to-secondary-50 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Quote className="h-12 w-12 text-primary-400 mb-6" />
                <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>
                
                {/* Star Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-32 dark-section-bg relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">Growing Every Day</h2>
            <p className="text-2xl text-white/80">
              Join thousands of neighbors already trading skills
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "2,500+", label: "Skills Shared", icon: Globe },
              { number: "1,200+", label: "Happy Neighbors", icon: Users },
              { number: "150+", label: "Cities Connected", icon: Award },
              { number: "98%", label: "Success Rate", icon: TrendingUp }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-dark p-10 group hover:bg-white/20 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-12 w-12 text-primary-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-6xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">{stat.number}</div>
                <div className="text-white/80 text-xl font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 bg-gradient-to-r from-gray-900 via-neutral-900 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
            Ready to Start Trading?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Join your neighbors in building a stronger, more connected community
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/post"
              className="group bg-primary-600 text-white font-bold py-6 px-12 rounded-2xl shadow-2xl hover:shadow-primary-600/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 text-xl hover:bg-primary-700"
            >
              <Plus className="h-7 w-7 group-hover:rotate-90 transition-transform duration-300" />
              <span>Share Your First Skill</span>
            </Link>
            
            <Link
              to="/browse"
              className="group bg-white text-gray-900 font-bold py-6 px-12 rounded-2xl shadow-2xl hover:bg-gray-50 hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 text-xl"
            >
              <Search className="h-7 w-7" />
              <span>Explore Available Skills</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-8 lg:mb-0">
              <div className="p-3 bg-primary-600 rounded-2xl">
                <Users className="h-10 w-10 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">SkillSwap</span>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-500 text-lg">
              <Star className="h-6 w-6" />
              <span>Built with</span>
              <a 
                href="https://bolt.new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-bold transition-colors duration-300"
              >
                Bolt.new
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-lg">
            <p>&copy; 2025 SkillSwap. Building stronger communities, one skill at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;