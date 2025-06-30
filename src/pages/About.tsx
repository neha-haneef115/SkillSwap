import React from 'react';
import { Heart, Users, Shield, Globe, Target, Award, CheckCircle, Sparkles, Plus, Search } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of neighbors helping neighbors, building stronger communities one skill exchange at a time."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Creating a safe environment where community members can connect and share their talents with confidence."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making skill sharing accessible to everyone, regardless of economic background or geographic location."
    },
    {
      icon: Target,
      title: "Purpose Driven",
      description: "Focused on meaningful connections that create lasting value for individuals and communities."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Skills Shared" },
    { number: "5,000+", label: "Community Members" },
    { number: "200+", label: "Cities" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  const features = [
    "100% Free to use",
    "No hidden fees or charges",
    "Community-verified members",
    "Secure messaging system",
    "Local neighborhood focus",
    "Wide variety of skills",
    "Easy-to-use platform",
    "Mobile-friendly design"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-12 animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-600 rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
                <div className="relative p-8 bg-primary-600 rounded-full shadow-2xl animate-glow">
                  <Users className="h-20 w-20 text-white" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-8 w-8 text-accent-400 animate-bounce-subtle" />
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-slide-up">
              <span className="text-black">About</span>
              <br />
              <span className="gradient-text">SkillSwap</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl text-grey/400 mb-6 font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Building stronger communities through skill sharing
            </p>
            
            <p className="text-xl text-grey/700 mb-16 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              SkillSwap is more than just a platform—it's a movement to reconnect neighbors, share knowledge, and build thriving communities where everyone has something valuable to offer.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-32 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To create a world where every person's skills are valued and accessible, fostering community connections that transcend economic barriers.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Why SkillSwap Exists</h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  In today's world, we often live next to people we've never met, despite having skills that could benefit each other immensely. SkillSwap bridges this gap by creating meaningful connections based on mutual learning and growth.
                </p>
                <p>
                  We believe that everyone has something valuable to teach and something important to learn. Whether you're a professional chef who wants to learn guitar, or a programmer who needs help with gardening, SkillSwap makes these exchanges possible.
                </p>
                <p>
                  By removing money from the equation, we focus on the pure joy of learning, teaching, and building relationships that last beyond a single transaction.
                </p>
              </div>
            </div>
            
            <div className="card p-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Makes Us Different</h4>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-primary-600" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-2xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div 
                key={index}
                className="card p-12 text-center group hover:bg-gradient-to-br hover:from-white hover:to-primary-50 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-8">
                  <div className="p-6 bg-primary-600 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                    <value.icon className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-32 dark-section-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-2xl text-white/80">
              See how we're making a difference in communities worldwide
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-dark p-10 group hover:bg-white/20 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">{stat.number}</div>
                <div className="text-white/80 text-xl font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-32 section-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-16 text-center animate-fade-in">
            <Award className="h-16 w-16 text-primary-600 mx-auto mb-8" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-6">
              <p>
               The idea for “SkillSwap” came from a simple, real-life problem, sometimes you need help, but don’t have the money for it. I’ve seen people around me, especially students and freelancers, who are talented but can’t afford services like design, tutoring, or even small fixes.
              </p>
              <p>
                That’s when I thought: What if we could just trade skills instead of spending money? A designer could get a cake made. A teacher could get their website done. This idea felt personal, useful, and community-driven, and I knew I could build it with Bolt in a short time.
              </p>
              <p>
                Today, SkillSwap connects thousands of neighbors worldwide, proving that the best solutions often come from the people closest to us. We're not just building a platform—we're rebuilding the village.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
            Join Our Community
          </h2>
          <p className="text-2xl text-primary-100 mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Be part of the movement that's bringing neighbors together
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="/post"
              className="group bg-white text-primary-600 font-bold py-6 px-12 rounded-2xl shadow-2xl hover:bg-gray-50 hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 text-xl"
            >
              <Plus className="h-7 w-7" />
              <span>Share Your First Skill</span>
            </a>
            
            <a
              href="/browse"
              className="group bg-primary-700 text-white font-bold py-6 px-12 rounded-2xl shadow-2xl hover:bg-primary-800 hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 text-xl border-2 border-white/20"
            >
              <Search className="h-7 w-7" />
              <span>Explore Skills</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;