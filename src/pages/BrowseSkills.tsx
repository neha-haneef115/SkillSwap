import React, { useState, useEffect } from 'react';
import { supabase, Skill } from '../lib/supabase';
import { toast } from 'react-hot-toast';
import { Search, Filter, Wrench, Gift, MapPin, User, Calendar, MessageCircle, Sparkles, TrendingUp } from 'lucide-react';

const BrowseSkills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [availableLocations, setAvailableLocations] = useState<string[]>([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  useEffect(() => {
    filterSkills();
  }, [skills, searchTerm, locationFilter]);

  const fetchSkills = async () => {
    try {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setSkills(data || []);
      
      // Get unique locations for filter
      const locations = [...new Set(data?.map(skill => skill.location) || [])];
      setAvailableLocations(locations);
    } catch (error) {
      console.error('Error fetching skills:', error);
      toast.error('Failed to load skills');
    } finally {
      setLoading(false);
    }
  };

  const filterSkills = () => {
    let filtered = skills;

    if (searchTerm) {
      filtered = filtered.filter(skill =>
        skill.skill_offer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.skill_need.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (locationFilter) {
      filtered = filtered.filter(skill => skill.location === locationFilter);
    }

    setFilteredSkills(filtered);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading amazing skills...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-600 rounded-2xl shadow-lg">
              <Search className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Browse Skills</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing talents in your community
          </p>
        </div>

        {/* Filter Bar */}
        <div className="card p-8 mb-12 animate-slide-up">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search skills or people..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-200/50 transition-all text-lg bg-white/95 backdrop-blur-sm shadow-lg"
              />
            </div>
            
            <div className="relative lg:w-64">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-200/50 transition-all bg-white/95 backdrop-blur-sm shadow-lg text-lg"
              >
                <option value="">All Locations</option>
                {availableLocations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="mb-8">
              <Search className="h-24 w-24 text-gray-300 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">No skills found</h3>
            <p className="text-xl text-gray-600">
              {searchTerm || locationFilter 
                ? 'Try adjusting your search filters'
                : 'Be the first to share a skill!'
              }
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredSkills.map((skill, index) => (
              <div 
                key={skill.id} 
                className="card p-8 group hover:bg-gradient-to-br hover:from-white hover:to-primary-50 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{skill.name}</h3>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{formatDate(skill.created_at)}</span>
                    </div>
                  </div>
                  <Sparkles className="h-6 w-6 text-yellow-400 animate-bounce-subtle" />
                </div>

                {/* Skills */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl">
                    <div className="p-2 bg-green-100 rounded-lg mt-1">
                      <Wrench className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-green-800 mb-1">Offers</p>
                      <p className="text-green-700">{skill.skill_offer}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
                    <div className="p-2 bg-blue-100 rounded-lg mt-1">
                      <Gift className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-blue-800 mb-1">Needs</p>
                      <p className="text-blue-700">{skill.skill_need}</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-3 mb-6 p-3 bg-purple-50 rounded-xl">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <span className="font-medium text-purple-800">{skill.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {skill.description}
                </p>

                {/* Action Button */}
                <button className="w-full btn-primary flex items-center justify-center space-x-3 group-hover:scale-105 transition-transform duration-300">
                  <MessageCircle className="h-5 w-5" />
                  <span>Request Swap</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseSkills;