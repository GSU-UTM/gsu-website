import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { FORM_URLS, openForm } from '../lib/forms';
import {
  ArrowRight,
  Rocket,
  Users,
  MapPin,
  Calendar,
  Zap,
  Heart,
  Building2,
  Clock,
  Instagram,
  Sparkles,
  Star,
} from 'lucide-react';
import { motion } from 'motion/react';
import firstImage from '../../assets/first.JPG';
import secondImage from '../../assets/second.JPG';
import thirdImage from '../../assets/third.JPG';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-05-01T17:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-3 sm:gap-4">
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Mins' },
        { value: timeLeft.seconds, label: 'Secs' },
      ].map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-900 to-black border border-orange-500/50 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs text-gray-400 mt-1 font-medium">
              {unit.label}
            </span>
          </div>
          {index < 3 && (
            <span className="text-2xl font-bold text-orange-500 mt-3 animate-pulse">
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export function HomePage() {
  const stats = [
    { number: '50+', label: 'Active Members', icon: Users },
    { number: '3', label: 'Events Hosted', icon: Calendar },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section - Clean & Simple */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[700px] h-[700px] bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <MapPin className="h-5 w-5 text-orange-400" />
              <span className="text-orange-400 tracking-wider uppercase font-semibold text-sm">
                University of Toronto Mississauga
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              <span className="text-white">Ground-Up</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Startups UTM
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              We're UTM students building real ventures together. A
              collaborative community for innovators. Join us weekly to connect
              with peers, develop your ideas, and launch your startup.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white hover:from-orange-600 hover:via-red-600 hover:to-pink-600 px-10 py-7 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 text-xl font-bold"
                onClick={() => openForm(FORM_URLS.join)}
              >
                Join GSU UTM
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-10 py-7 rounded-2xl transition-all duration-300 text-xl font-semibold backdrop-blur-sm"
              >
                <a
                  href="https://lu.ma/user/usr-mELXS77OWK0UMVW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Calendar className="mr-2 h-6 w-6" />
                  Register for Events
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spring Business Fair Featured Section */}
      <section className="relative py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>

              <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-orange-500/30 group-hover:border-orange-500/60 transition-colors duration-500">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                    <div className="flex-shrink-0 text-center lg:text-left lg:w-1/3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold mb-4">
                        <Sparkles className="h-4 w-4" />
                        <span>Flagship Event</span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                        GSU Spring
                        <br />
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                          Business Fair
                        </span>
                      </h3>
                      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-orange-400" />
                          May 1st, 2026
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-orange-400" />
                          UTM Campus
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 w-full lg:w-auto">
                      <div className="text-center mb-4">
                        <p className="text-gray-400 text-sm font-medium mb-3">
                          Countdown to Event
                        </p>
                        <CountdownTimer />
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-center lg:text-right lg:w-1/4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white font-bold mb-4 shadow-lg shadow-orange-500/30">
                        <Star className="h-4 w-4" />
                        <span>Applications Open</span>
                      </div>
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2 justify-center">
                        <a
                          href="https://luma.com/user/usr-mELXS77OWK0UMVW"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl text-white text-sm font-bold transition-all duration-300 shadow-lg shadow-orange-500/30"
                        >
                          Register Now
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        {
                          icon: Building2,
                          number: '20+',
                          label: 'UofT Companies',
                        },
                        { icon: Users, number: '500+', label: 'Attendees' },
                        { icon: Rocket, number: '25+', label: 'Investors' },
                        { icon: Star, number: '$10K+', label: 'Prize Money' },
                      ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                          <div
                            key={index}
                            className="text-center p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-orange-500/30 transition-colors"
                          >
                            <Icon className="h-5 w-5 text-orange-400 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-white">
                              {stat.number}
                            </p>
                            <p className="text-xs text-gray-500">
                              {stat.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-block p-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl mb-4">
                    <Icon className="h-10 w-10 text-orange-400" />
                  </div>
                  <h3 className="text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400 text-lg">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why GSU - Asymmetric Layout */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 font-bold">
              <span className="text-white">Why </span>
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                GSU UTM?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your launchpad for building real ventures with real people at UTM
            </p>
          </motion.div>

          {/* Asymmetric Feature Cards */}
          <div className="space-y-16">
            {/* Feature 1 - Left Aligned */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-6">
                  Real Students, Real Ventures
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Every workshop, event, and resource is created by UTM students
                  who are building startups themselves. We get it because we
                  live it. No corporate templates, just practical advice from
                  people in the trenches.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">
                      Weekly co-working sessions with your peers
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">
                      Access to a supportive founder community
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden aspect-square">
                  <img
                    src={firstImage}
                    alt="GSU UTM community"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Feature 2 - Right Aligned */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative lg:order-1 order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden aspect-square">
                  <img
                    src={secondImage}
                    alt="GSU UTM workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-2 order-1">
                <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
                  <Rocket className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-6">
                  Learn By Building
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  We skip the fluff. Every session is hands-on: build your MVP,
                  validate with real users, pitch to actual founders. You'll
                  leave with something tangible, not just theory from a slide
                  deck.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">
                      Build MVPs and test with real users
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">
                      Pitch to investors and get feedback
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Feature 3 - Left Aligned */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-6">
                  Find Your Co-Founder
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  The best startups are built by teams, not solo founders. We
                  help you find people who complement your skills and share your
                  vision. Some of our members have already formed teams and are
                  building together.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">
                      Find co-founders who share your vision
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">
                      Connect with mentors and advisors
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden aspect-square">
                  <img
                    src={thirdImage}
                    alt="GSU UTM event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-red-500/5 to-transparent rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 font-bold">
              <span className="text-white">Ready to</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Build the Future
              </span>
              <br />
              <span className="text-white">at UTM?</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              We're building real ventures with real people, right here on
              campus. Join our collaborative community focused on innovation and
              growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white hover:from-orange-600 hover:via-red-600 hover:to-pink-600 px-10 py-7 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl text-xl font-bold"
                onClick={() => openForm(FORM_URLS.join)}
              >
                Join GSU UTM
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-7 rounded-2xl transition-all duration-300 text-xl font-semibold"
              >
                <a
                  href="https://lu.ma/user/usr-mELXS77OWK0UMVW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Calendar className="mr-2 h-6 w-6" />
                  Register for Events
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-7 rounded-2xl transition-all duration-300 text-xl font-semibold"
              >
                <a
                  href="https://instagram.com/gsu.utm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Follow @gsu.utm
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
