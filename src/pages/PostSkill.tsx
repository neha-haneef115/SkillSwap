import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';
import { Send, User, Wrench, Gift, MapPin, FileText, Sparkles } from 'lucide-react';

const PostSkill: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    skill_offer: '',
    skill_need: '',
    location: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('skills')
        .insert([formData]);

      if (error) {
        throw error;
      }

      toast.success('Skill posted successfully! 🎉');
      navigate('/thank-you');
    } catch (error) {
      console.error('Error posting skill:', error);
      toast.error('Failed to post skill. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-primary-600 px-10 py-12 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Sparkles className="h-8 w-8 text-white/60 animate-bounce-subtle" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Share Your Skill</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Connect with your community and start trading talents
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-10 space-y-8">
            {/* Name Field */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <label className="flex items-center space-x-3 text-lg font-bold text-gray-700 mb-4">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <User className="h-5 w-5 text-primary-600" />
                </div>
                <span>Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="input-field text-lg"
                placeholder="Enter your full name"
              />
            </div>

            {/* Skill Offered Field */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <label className="flex items-center space-x-3 text-lg font-bold text-gray-700 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Wrench className="h-5 w-5 text-green-600" />
                </div>
                <span>Skill You Offer</span>
              </label>
              <input
                type="text"
                name="skill_offer"
                required
                value={formData.skill_offer}
                onChange={handleChange}
                className="input-field text-lg"
                placeholder="e.g., Web Development, Guitar Lessons, Cooking"
              />
            </div>

            {/* Skill Needed Field */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <label className="flex items-center space-x-3 text-lg font-bold text-gray-700 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Gift className="h-5 w-5 text-blue-600" />
                </div>
                <span>Skill You Need</span>
              </label>
              <input
                type="text"
                name="skill_need"
                required
                value={formData.skill_need}
                onChange={handleChange}
                className="input-field text-lg"
                placeholder="e.g., Photography, Plumbing, Language Tutoring"
              />
            </div>

            {/* Location Field */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <label className="flex items-center space-x-3 text-lg font-bold text-gray-700 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <span>Location (City)</span>
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="input-field text-lg"
                placeholder="e.g., San Francisco, CA"
              />
            </div>

            {/* Description Field */}
            <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <label className="flex items-center space-x-3 text-lg font-bold text-gray-700 mb-4">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <FileText className="h-5 w-5 text-yellow-600" />
                </div>
                <span>Description</span>
              </label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="input-field resize-none text-lg"
                placeholder="Tell us more about your skill and what you're looking for..."
              />
            </div>

            {/* Submit Button */}
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed text-xl py-6"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="h-6 w-6" />
                    <span>Post My Skill</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostSkill;