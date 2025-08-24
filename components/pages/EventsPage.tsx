import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, Target, MapPin, ArrowRight } from 'lucide-react';
import { upcomingEvents, Event } from '../data/eventsData';
import { Button } from '../ui/button';
import { FORM_URLS, openForm } from '../lib/forms';

export function EventsPage() {
  const renderEvent = (event: Event, index: number) => (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          {/* Event Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">{event.week}</span>
              </div>
              <div>
                <h3 className="text-xl text-white mb-1 group-hover:text-orange-400 transition-colors duration-300 font-semibold">
                  {event.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400 font-semibold">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{event.totalDuration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Description */}
          <p className="text-gray-300 mb-4 leading-relaxed font-semibold">
            {event.description}
          </p>

          {/* Event Activities */}
          <div className="space-y-2">
            <h4 className="text-lg text-orange-500 mb-3 flex items-center">
              <Target className="h-4 w-4 mr-2" />
              Session Breakdown
            </h4>
            <div className="space-y-2">
              {event.activities.map((activity, activityIndex) => (
                <div
                  key={activityIndex}
                  className="flex items-center justify-between py-2 px-3 bg-gray-800/50 rounded-lg"
                >
                  <span className="text-gray-300">{activity.name}</span>
                  {activity.duration && (
                    <span className="text-orange-400 text-sm font-medium">
                      {activity.duration}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

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
                <span className="text-orange-400 tracking-wider uppercase">GSU UTM Events</span>
              </div>
              <div className="w-12 h-1 bg-gradient-to-l from-orange-500 to-red-500"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Upcoming</span><br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-semibold">
              Join us for an exciting semester of workshops, co-working sessions, and networking events designed 
              to accelerate your entrepreneurial journey at UTM.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Coming Soon Notice */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black transform -skew-y-1 origin-top-left"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="bg-black/20 backdrop-blur-xl rounded-xl p-6">
                <Users className="h-12 w-12 text-white mx-auto mb-4" />
                <h2 className="hero-text-gsu mb-4">Events Coming Soon!</h2>
                <p className="text-white/90 mb-4 font-semibold">
                  We're finalizing our exciting lineup of events. Stay tuned for registration details and updates.
                </p>
                <Button
                  onClick={() => openForm(FORM_URLS.join)}
                  className="bg-white text-orange-500 hover:bg-gray-100 font-semibold"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Schedule */}
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
              <span className="text-white">Semester</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Schedule
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
              Our comprehensive program designed to take you from idea to launch
            </p>
          </motion.div>

          <div className="grid gap-8">
            {upcomingEvents.map((event, index) => renderEvent(event, index))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <h2 className="text-6xl lg:text-7xl leading-tight mb-6 font-bold">
              <span className="text-white">Ready to</span><br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Get Started?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-semibold">
              Don't miss out on this opportunity to build your startup with fellow UTM entrepreneurs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openForm(FORM_URLS.join)}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Join GSU UTM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-semibold"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}