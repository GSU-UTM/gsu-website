import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Users, Target, Award, MapPin, Building2, GraduationCap } from 'lucide-react';

export function AboutPage() {
  const timelineEvents = [
    {
      year: "2024",
      title: "GSU UTM Founded", 
      description: "Started as a small group of ambitious UTM students passionate about entrepreneurship",
      icon: Rocket
    },
    {
      year: "2025",
      title: "First Programs Launch",
      description: "Launching our inaugural innovation lab and mentorship programs for UTM students",
      icon: Target
    },
    {
      year: "2025",
      title: "Campus Recognition",
      description: "Working towards official recognition by UTM as a premier student entrepreneurship organization",
      icon: Award
    },
    {
      year: "Future",
      title: "Growing Community",
      description: "Building toward becoming UTM's largest startup community with members across all programs",
      icon: Users
    }
  ];

  const values = [
    {
      title: "UTM-Focused Innovation",
      description: "We believe in leveraging the unique strengths and diversity of the UTM community to drive innovation.",
      icon: GraduationCap,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Collaborative Growth",
      description: "Building startups together, sharing knowledge, and supporting each other's entrepreneurial journeys.",
      icon: Users,
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Campus Impact",
      description: "Creating solutions that benefit not just the market, but our UTM campus and local Mississauga community.",
      icon: Building2,
      color: "from-red-500 to-pink-500"
    }
  ];

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
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="text-orange-400 tracking-wider uppercase font-semibold">About GSU UTM</span>
              </div>
              <div className="w-12 h-1 bg-gradient-to-l from-orange-500 to-red-500"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Students First.</span><br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Startups Together.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-semibold">
              We started as friends hacking on ideas after class. Now we’re a growing UTM community
              where anyone curious about building can find teammates, mentors, and momentum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black transform -skew-y-1 origin-top-left"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl lg:text-7xl leading-tight mb-6 font-bold">
                <span className="text-white">Our Mission</span><br />
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Build a second home for builders
                </span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-semibold">
                We make it easier to start. Show up, find your people, try things, and learn by building.
                No gatekeeping — just a supportive crew that wants to see you win.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                We believe that every student at UTM has the potential to be an entrepreneur. Through mentorship, 
                resources, and a collaborative community, we help turn ideas into reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30 relative overflow-hidden group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="text-lg text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 font-semibold">
                          {value.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm font-semibold">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
              From a small group of passionate students to UTM's premier startup community
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-full lg:w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                          <div className={`flex items-center space-x-3 mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-orange-500 text-lg font-semibold">{event.year}</span>
                          </div>
                          
                          <h3 className="text-lg text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 font-semibold">
                            {event.title}
                          </h3>
                          
                          <p className="text-gray-400 leading-relaxed text-sm font-semibold">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-4 border-black z-20"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent transform skew-x-12"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-red-500/5 to-transparent rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl lg:text-7xl leading-tight mb-6 font-bold">
              <span className="text-white">GSU UTM</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                By Numbers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
              Our impact on the UTM entrepreneurship ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "20+", label: "Founding Members", description: "Active student entrepreneurs" },
              { number: "3", label: "Programs Launching", description: "Starting in 2025" },
              { number: "5+", label: "Partner Organizations", description: "Campus collaborations" },
              { number: "100%", label: "UTM Focused", description: "Campus-first approach" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-3xl text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 font-bold">
                    {stat.number}
                  </div>
                  <div className="text-lg text-orange-500 mb-1 font-semibold">{stat.label}</div>
                  <div className="text-gray-400 text-sm font-semibold">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}