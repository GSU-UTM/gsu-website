<<<<<<< HEAD
import React from "react";
import { Button } from "../ui/button";
import { FORM_URLS, openForm } from "../lib/forms";
=======
import React from 'react';
import { Button } from '../ui/button';
import { FORM_URLS, openForm } from '../lib/forms';
>>>>>>> ca13cde29ab7cf9b569dd077c2549f536a2e6101
import {
  ArrowRight,
  Rocket,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  MapPin,
  GraduationCap,
  Calendar,
  Mail,
<<<<<<< HEAD
} from "lucide-react";
import { motion } from "motion/react";
=======
} from 'lucide-react';
import { motion } from 'motion/react';
>>>>>>> ca13cde29ab7cf9b569dd077c2549f536a2e6101

export function HomePage() {
  const features = [
    {
<<<<<<< HEAD
      title: "UTM Innovation Labs",
      description:
        "Transform your ideas into viable business concepts through our comprehensive innovation program at UTM",
      icon: Lightbulb,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Campus Mentorship",
      description:
        "Connect with UTM alumni and successful entrepreneurs for personalized guidance",
      icon: GraduationCap,
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Pitch Competitions",
      description:
        "Showcase your startup to the UTM community and potential investors",
      icon: Target,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Growth Accelerator",
      description:
        "Scale your startup with strategic guidance from UTM's extensive network",
      icon: TrendingUp,
      color: "from-orange-600 to-red-600",
=======
      title: 'UTM Innovation Labs',
      description:
        'Transform your ideas into viable business concepts through our comprehensive innovation program at UTM',
      icon: Lightbulb,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Campus Mentorship',
      description:
        'Connect with UTM alumni and successful entrepreneurs for personalized guidance',
      icon: GraduationCap,
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Pitch Competitions',
      description:
        'Showcase your startup to the UTM community and potential investors',
      icon: Target,
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Growth Accelerator',
      description:
        "Scale your startup with strategic guidance from UTM's extensive network",
      icon: TrendingUp,
      color: 'from-orange-600 to-red-600',
>>>>>>> ca13cde29ab7cf9b569dd077c2549f536a2e6101
    },
  ];

  const values = [
    {
<<<<<<< HEAD
      title: "Student-Led Innovation",
      description:
        "Our programs are designed by UTM students, specifically tailored to meet the unique needs of our campus community.",
      icon: Users,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Practical Learning",
      description:
        "Engage in hands-on workshops and gain real-world startup experience through our comprehensive curriculum.",
      icon: Rocket,
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Community First",
      description:
        "We prioritize building lasting connections within the UTM entrepreneurship ecosystem.",
      icon: Users,
      color: "from-red-500 to-pink-500",
=======
      title: 'Student-Led Innovation',
      description:
        'Our programs are designed by UTM students, specifically tailored to meet the unique needs of our campus community.',
      icon: Users,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Practical Learning',
      description:
        'Engage in hands-on workshops and gain real-world startup experience through our comprehensive curriculum.',
      icon: Rocket,
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Community First',
      description:
        'We prioritize building lasting connections within the UTM entrepreneurship ecosystem.',
      icon: Users,
      color: 'from-red-500 to-pink-500',
>>>>>>> ca13cde29ab7cf9b569dd077c2549f536a2e6101
    },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-orange-600/20 transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-orange-500/20 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-orange-400" />
                    <span className="text-orange-400 tracking-wider uppercase font-semibold text-sm">
                      University of Toronto Mississauga
                    </span>
                  </div>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Groundup Startups</span>
                  <br />
                  <span className="text-white">UTM</span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                  We're UTM students building real ventures together — a
                  collaborative community for innovators. Join us weekly to
                  connect with peers, develop your ideas, and launch your
                  startup.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/25 font-bold"
                >
                  <span
                    onClick={() => openForm(FORM_URLS.join)}
<<<<<<< HEAD
                    style={{ display: "inline-flex", alignItems: "center" }}
=======
                    style={{ display: 'inline-flex', alignItems: 'center' }}
>>>>>>> ca13cde29ab7cf9b569dd077c2549f536a2e6101
                  >
                    Join GSU UTM <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
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

            {/* Right Content - Values Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="space-y-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="bg-gray-900/80 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/40 relative overflow-hidden group"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      ></div>

                      <div className="relative z-10 flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
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
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Diagonal Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black transform -skew-y-2 origin-top-left"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl lg:text-7xl leading-tight mb-6 font-bold">
              <span className="text-white">Build With Us</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                at UTM
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
              Weekly co-working sessions, hands-on workshops, mentorship from
              experienced entrepreneurs, and a supportive community to keep you
              accountable. Our programs are designed by students, specifically
              for students.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 h-full transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30 relative overflow-hidden">
                    {/* Hover Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <div className="relative z-10">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <h3 className="text-lg text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 font-semibold">
                        {feature.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed text-sm font-semibold">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
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
              <span className="text-white">Get</span>{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Involved
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
              Ready to get started? Here's how to become part of our community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl text-white mb-4 group-hover:text-orange-400 transition-colors duration-300 font-bold">
                  Upcoming Events
                </h3>
                <p className="text-gray-400 mb-6 font-semibold">
                  Join our workshops, networking sessions, and startup
                  competitions
                </p>
                <Button
<<<<<<< HEAD
                  onClick={() => (window.location.href = "#events")}
=======
                  onClick={() => (window.location.href = '#events')}
>>>>>>> ca13cde29ab7cf9b569dd077c2549f536a2e6101
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 font-semibold"
                >
                  View Events
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl text-white mb-4 group-hover:text-orange-400 transition-colors duration-300 font-bold">
                  Join Our Team
                </h3>
                <p className="text-gray-400 mb-6 font-semibold">
<<<<<<< HEAD
                  Become part of the{" "}
                  <span className="font-medium text-gray-300">
                    founding team
                  </span>{" "}
=======
                  Become part of the{' '}
                  <span className="font-medium text-gray-300">
                    founding team
                  </span>{' '}
>>>>>>> ca13cde29ab7cf9b569dd077c2549f536a2e6101
                  building GSU UTM
                </p>
                <Button
                  onClick={() => openForm(FORM_URLS.volunteer)}
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold"
                >
                  Join Now
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl text-white mb-4 group-hover:text-orange-400 transition-colors duration-300 font-bold">
                  Contact Us
                </h3>
                <p className="text-gray-400 mb-6 font-semibold">
                  Have questions? Want to collaborate? Reach out to us
                </p>
                <Button
                  onClick={() => openForm(FORM_URLS.partner)}
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold"
                >
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Creative Background Shapes */}
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
            className="text-center"
          >
            <h2 className="text-6xl lg:text-7xl leading-tight mb-6 font-bold">
              <span className="text-white">Ready to</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Build the Future
              </span>
              <br />
              <span className="text-white">at UTM?</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto font-semibold">
              We're building real ventures with real people — right here on
              campus. Join our collaborative community focused on innovation and
              growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl font-bold"
              >
                <span onClick={() => openForm(FORM_URLS.join)} className="flex">
                  Join GSU UTM
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-semibold"
              >
                <a
                  href="https://instagram.com/gsu.utm"
                  target="_blank"
                  rel="noopener noreferrer"
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
