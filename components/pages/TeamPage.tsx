import React from 'react';
import { motion } from 'motion/react';
import { Users, Heart, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function TeamPage() {
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
                <span className="text-orange-400 tracking-wider uppercase">GSU UTM Team</span>
              </div>
              <div className="w-12 h-1 bg-gradient-to-l from-orange-500 to-red-500"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl mb-6">
              <span className="text-white">Meet Our</span><br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The passionate individuals driving innovation and entrepreneurship at the University of Toronto Mississauga.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Coming Soon */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black transform -skew-y-1 origin-top-left"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8">
                  <Users className="h-16 w-16 text-white mx-auto mb-6" />
                  
                  <h2 className="text-3xl text-white mb-4">
                    We're Building Something Amazing
                  </h2>
                  
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    Our founding team is working hard to create the best entrepreneurship experience for UTM students. 
                    We're assembling a diverse group of passionate individuals who share our vision of fostering innovation on campus.
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-8">
                    <Heart className="h-5 w-5 text-white" />
                    <span className="text-white">Built by students, for students</span>
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/10 rounded-xl p-4">
                      <h3 className="text-white font-semibold mb-2">Diverse Backgrounds</h3>
                      <p className="text-white/80 text-sm">Business, Engineering, Computer Science, and more</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <h3 className="text-white font-semibold mb-2">UTM Focused</h3>
                      <p className="text-white/80 text-sm">Dedicated to serving our campus community</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <h3 className="text-white font-semibold mb-2">Innovation Driven</h3>
                      <p className="text-white/80 text-sm">Passionate about entrepreneurship and startups</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              <span className="text-white">Want to</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Join Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're always looking for passionate UTM students to help build our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30"
            >
              <h3 className="text-2xl text-white mb-4">Executive Positions</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Lead our organization and shape the future of entrepreneurship at UTM. Executive roles are perfect for students who want to make a significant impact.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Leadership experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Event planning & management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Community building</span>
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
                Apply for Executive Role
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30"
            >
              <h3 className="text-2xl text-white mb-4">General Members</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Be part of our founding community and help us create amazing events and programs for UTM entrepreneurs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Networking opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Skill development workshops</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Startup support & mentorship</span>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                Become a Member
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent transform skew-x-12"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              <span className="text-white">Ready to</span><br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Get Involved?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Reach out to us and let's discuss how you can contribute to the GSU UTM community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <a href="mailto:groundup.startup.uoft@gmail.com">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-2xl transition-all duration-300"
              >
                <a href="https://instagram.com/gsu.utm" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}