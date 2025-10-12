import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, MapPin, ArrowRight, Instagram, Bell, Rocket, Lightbulb, Target, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';
import { FORM_URLS, openForm } from '../lib/forms';
import { allEvents, getUpcomingEvents, getPastEvents, Event } from '../data/eventsData';

export function EventsPage() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [showPastEvents, setShowPastEvents] = useState(false);

  useEffect(() => {
    // Update events on component mount
    setUpcomingEvents(getUpcomingEvents(allEvents));
    setPastEvents(getPastEvents(allEvents));
  }, []);

  const renderEvent = (event: Event, index: number, isPast: boolean = false) => (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300`}></div>
      <div className={`relative backdrop-blur-xl border rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30 ${
        isPast ? 'bg-gray-900/40 border-gray-800/50 opacity-75' : 'bg-gray-900/60 border-gray-800'
      }`}>
        <div className="relative z-10">
          {/* Event Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                isPast ? 'bg-gray-700' : 'bg-gradient-to-br from-orange-500 to-red-500'
              }`}>
                <span className="text-white font-bold text-lg">W{event.week}</span>
              </div>
              <div>
                <h3 className={`text-2xl mb-2 group-hover:text-orange-400 transition-colors duration-300 font-bold ${
                  isPast ? 'text-gray-400' : 'text-white'
                }`}>
                  {event.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm font-semibold">
                  <div className={`flex items-center space-x-1 ${isPast ? 'text-gray-500' : 'text-gray-400'}`}>
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className={`flex items-center space-x-1 ${isPast ? 'text-gray-500' : 'text-gray-400'}`}>
                    <Clock className="h-4 w-4" />
                    <span>{event.totalDuration}</span>
                  </div>
                </div>
              </div>
            </div>
            {isPast && (
              <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-xs font-semibold">
                Past Event
              </span>
            )}
          </div>

          {/* Event Description */}
          <p className={`mb-6 leading-relaxed font-semibold ${isPast ? 'text-gray-500' : 'text-gray-300'}`}>
            {event.description}
          </p>

          {/* Guest Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <div className="mb-6">
              <h4 className={`text-lg mb-4 flex items-center font-semibold ${isPast ? 'text-gray-500' : 'text-orange-500'}`}>
                <Users className="h-4 w-4 mr-2" />
                Guest Speakers
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                {event.speakers.map((speaker, speakerIndex) => (
                  <div
                    key={speakerIndex}
                    className={`flex flex-col items-center text-center p-4 rounded-xl ${
                      isPast ? 'bg-gray-800/30' : 'bg-gray-800/50'
                    }`}
                  >
                    {speaker.photo && (
                      <img
                        src={speaker.photo}
                        alt={speaker.name}
                        className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-orange-500/50"
                      />
                    )}
                    <p className={`font-bold text-sm mb-1 ${isPast ? 'text-gray-400' : 'text-white'}`}>
                      {speaker.name}
                    </p>
                    <p className={`text-xs ${isPast ? 'text-gray-600' : 'text-gray-400'}`}>
                      {speaker.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Event Activities */}
          <div className="space-y-2">
            <h4 className={`text-lg mb-3 flex items-center font-semibold ${isPast ? 'text-gray-500' : 'text-orange-500'}`}>
              <Target className="h-4 w-4 mr-2" />
              Session Breakdown
            </h4>
            <div className="space-y-2">
              {event.activities.map((activity, activityIndex) => (
                <div
                  key={activityIndex}
                  className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                    isPast ? 'bg-gray-800/30' : 'bg-gray-800/50'
                  }`}
                >
                  <span className={isPast ? 'text-gray-500' : 'text-gray-300'}>{activity.name}</span>
                  {activity.duration && (
                    <span className={`text-sm font-medium ${isPast ? 'text-gray-600' : 'text-orange-400'}`}>
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
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Calendar className="h-6 w-6 text-orange-400" />
              <span className="text-orange-400 tracking-wider uppercase font-semibold">
                GSU UTM Events
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-white">Upcoming</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Events
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Join us for hands-on workshops, co-working sessions, and networking events designed
              to accelerate your entrepreneurial journey at UTM.
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/10 border border-orange-500/30 rounded-2xl">
              <Bell className="h-5 w-5 text-orange-400" />
              <p className="text-orange-300 font-semibold">
                Dates subject to change - follow{' '}
                <a
                  href="https://www.instagram.com/gsu.utm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-orange-200 transition-colors"
                >
                  @gsu.utm
                </a>
                {' '}for latest updates
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Schedule */}
      {upcomingEvents.length > 0 && (
        <section className="relative py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">This Semester's</span>{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Schedule
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive program designed to take you from idea to launch
              </p>
            </motion.div>

            <div className="grid gap-8">
              {upcomingEvents.map((event, index) => renderEvent(event, index, false))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="relative py-20 lg:py-24 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <button
                onClick={() => setShowPastEvents(!showPastEvents)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900/60 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-all duration-300"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  Past Events ({pastEvents.length})
                </h2>
                {showPastEvents ? (
                  <ChevronUp className="h-6 w-6 text-orange-400" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-orange-400" />
                )}
              </button>
            </motion.div>

            {showPastEvents && (
              <div className="grid gap-8">
                {pastEvents.map((event, index) => renderEvent(event, index, true))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 font-bold">
              <span className="text-white">Ready to</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Get Started?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our community today and be the first to know about upcoming events, workshops, and opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 px-8 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl text-lg font-bold"
                onClick={() => openForm(FORM_URLS.join)}
              >
                Join GSU UTM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 rounded-2xl transition-all duration-300 text-lg font-semibold"
                onClick={() => window.open('https://www.instagram.com/gsu.utm/', '_blank')}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
