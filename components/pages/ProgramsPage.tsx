import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Users, Target, TrendingUp, Calendar, Clock, MapPin, GraduationCap, Building2, Rocket } from 'lucide-react';
import { Button } from '../ui/button';
import { FORM_URLS, openForm } from '../lib/forms.ts';

export function ProgramsPage() {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      id: "innovation-lab",
      title: "UTM Innovation Lab",
      subtitle: "Where Ideas Come to Life",
      description: "Our flagship program designed specifically for UTM students to develop and validate their startup ideas through hands-on workshops and mentorship.",
      features: [
        "Weekly ideation workshops",
        "One-on-one mentorship with UTM alumni",
        "Access to campus innovation resources",
        "Prototype development support"
      ],
      duration: "12 weeks",
      commitment: "6 hours/week",
      location: "UTM Campus",
      icon: Lightbulb,
      color: "from-orange-500 to-red-500"
    },
    {
      id: "startup-accelerator",
      title: "GSU UTM Accelerator",
      subtitle: "Fast-Track Your Startup",
      description: "An intensive program for UTM students with validated business ideas ready to scale and launch their startups.",
      features: [
        "Funding opportunities",
        "Legal and business setup guidance",
        "Industry connections",
        "UTM network access"
      ],
      duration: "16 weeks",
      commitment: "10 hours/week",
      location: "UTM + Downtown",
      icon: Rocket,
      color: "from-orange-400 to-orange-600"
    },
    {
      id: "mentorship",
      title: "UTM Mentorship Network",
      subtitle: "Learn from Success Stories",
      description: "Connect with successful UTM alumni entrepreneurs and industry leaders who provide ongoing guidance and support.",
      features: [
        "1:1 mentor matching",
        "Monthly group sessions",
        "Industry-specific guidance",
        "Career development support"
      ],
      duration: "Ongoing",
      commitment: "2 hours/month",
      location: "UTM Campus",
      icon: Users,
      color: "from-red-500 to-pink-500"
    },
    {
      id: "pitch-competition",
      title: "UTM Pitch Series",
      subtitle: "Showcase Your Vision",
      description: "Regular pitch competitions exclusively for UTM students with prizes, funding opportunities, and investor connections.",
      features: [
        "Monthly pitch nights",
        "Cash prizes and funding",
        "Investor networking",
        "Public speaking development"
      ],
      duration: "Monthly events",
      commitment: "4 hours/event",
      location: "UTM Campus",
      icon: Target,
      color: "from-orange-600 to-red-600"
    }
  ];

  const upcomingEvents = [
    {
      title: "UTM Startup Showcase",
      date: "March 15, 2025",
      time: "6:00 PM",
      location: "UTM Meeting Place",
      description: "Join us for our biggest event of the year featuring student startup presentations."
    },
    {
      title: "Innovation Workshop",
      date: "March 22, 2025", 
      time: "2:00 PM",
      location: "UTM Innovation Complex",
      description: "Hands-on workshop focused on design thinking and problem-solving for UTM students."
    },
    {
      title: "Alumni Entrepreneur Panel",
      date: "April 5, 2025",
      time: "7:00 PM",
      location: "UTM Davis Building",
      description: "Hear success stories from UTM alumni who built successful companies."
    }
  ];

  // Add a check here for programs[activeProgram]
  if (!programs[activeProgram]) {
    return null; // Or a loading spinner, or a message
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-400/10 to-orange-600/10 transform rotate-45"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-4 w-4 text-orange-400" />
                <span className="text-orange-400 tracking-wider uppercase">UTM Programs</span>
              </div>
              <div className="w-12 h-1 bg-gradient-to-l from-orange-500 to-red-500"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Transform Your Ideas</span><br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Into Startups at UTM
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-semibold">
              Discover our comprehensive programs designed specifically for UTM students. 
              From initial idea validation to scaling your startup, we provide the resources 
              and community support you need to succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl lg:text-7xl leading-tight mb-6 font-bold">
              <span className="text-white">Our</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
              Choose the program that fits your entrepreneurial journey at UTM
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Program Tabs */}
            <div className="space-y-4">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveProgram(index)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                      activeProgram === index
                        ? 'bg-gray-900/80 border-orange-500/50 backdrop-blur-xl'
                        : 'bg-gray-900/40 border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-lg mb-1 transition-colors duration-300 font-semibold ${
                          activeProgram === index ? 'text-orange-400' : 'text-white group-hover:text-orange-400'
                        }`}>
                          {program.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-semibold">
                          {program.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Program Details */}
            <motion.div
              key={activeProgram}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${programs[activeProgram].color} opacity-5`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${programs[activeProgram].color} rounded-2xl flex items-center justify-center`}>
                    {React.createElement(programs[activeProgram].icon, { className: "h-8 w-8 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-1 font-bold">{programs[activeProgram].title}</h3>
                    <p className="text-orange-400 font-semibold">{programs[activeProgram].subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 font-semibold">
                  {programs[activeProgram].description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-black/20 rounded-xl">
                    <Clock className="h-5 w-5 text-orange-400 mx-auto mb-1" />
                    <p className="text-white text-sm font-semibold">{programs[activeProgram].duration}</p>
                    <p className="text-gray-400 text-xs font-semibold">Duration</p>
                  </div>
                  <div className="text-center p-3 bg-black/20 rounded-xl">
                    <TrendingUp className="h-5 w-5 text-orange-400 mx-auto mb-1" />
                    <p className="text-white text-sm font-semibold">{programs[activeProgram].commitment}</p>
                    <p className="text-gray-400 text-xs font-semibold">Time Commitment</p>
                  </div>
                  <div className="text-center p-3 bg-black/20 rounded-xl">
                    <MapPin className="h-5 w-5 text-orange-400 mx-auto mb-1" />
                    <p className="text-white text-sm font-semibold">{programs[activeProgram].location}</p>
                    <p className="text-gray-400 text-xs font-semibold">Location</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg text-white mb-3 font-semibold">What You'll Get:</h4>
                  <ul className="space-y-2">
                    {programs[activeProgram].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 font-semibold">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => openForm(FORM_URLS.partner)}
                  className={`w-full bg-gradient-to-r ${programs[activeProgram].color} text-white hover:scale-105 transition-all duration-300 py-3 rounded-xl font-semibold`}
                >
                  Apply to {programs[activeProgram].title}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black transform -skew-y-1 origin-top-left"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl lg:text-7xl leading-tight mb-6 font-bold">
              <span className="text-white">Upcoming</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                UTM Events
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
              Join us for exciting events happening right here on UTM campus
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 text-orange-400 mb-3 font-semibold">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.date}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm">{event.time}</span>
                  </div>
                  
                  <h3 className="text-lg text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 font-semibold">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-gray-400 mb-3 font-semibold">
                    <Building2 className="h-4 w-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 font-semibold">
                    {event.description}
                  </p>
                  
                  <Button
                    onClick={() => openForm(FORM_URLS.join)}
                    variant="outline"
                    size="sm"
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 font-semibold"
                  >
                    Register Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}