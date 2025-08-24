import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Instagram,
  MapPin,
  ArrowRight,
  MessageCircle,
  Users,
  Calendar,
} from "lucide-react";
import { Button } from "../ui/button";
import { FORM_URLS, openForm } from "../lib/forms";

export function ContactPage() {
  const contactMethods = [
    {
      title: "Email Us",
      description:
        "For business inquiries, partnerships, and general questions",
      icon: Mail,
      contact: "groundup.startup.uoft@gmail.com",
      action: "Send Email",
      href: "mailto:groundup.startup.uoft@gmail.com",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Follow Us",
      description:
        "Stay updated with our latest events and announcements",
      icon: Instagram,
      contact: "@gsu.utm",
      action: "Follow on Instagram",
      href: "https://instagram.com/gsu.utm",
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Visit UTM",
      description:
        "Find us on the University of Toronto Mississauga campus",
      icon: MapPin,
      contact: "University of Toronto Mississauga",
      action: "Get Directions",
      href: "https://maps.google.com/?q=University+of+Toronto+Mississauga",
      color: "from-orange-400 to-orange-600",
    },
  ];

  const quickActions = [
    {
      title: "Join Our Community",
      description: "Become a member of GSU UTM",
      icon: Users,
      color: "from-orange-500 to-red-500",
      href: undefined,
    },
    {
      title: "Attend Events",
      description: "Check out our upcoming events",
      icon: Calendar,
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Start a Conversation",
      description: "Reach out with your ideas",
      icon: MessageCircle,
      color: "from-red-500 to-pink-500",
    },
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
                <span className="text-orange-400 tracking-wider uppercase font-semibold">
                  Contact GSU UTM
                </span>
              </div>
              <div className="w-12 h-1 bg-gradient-to-l from-orange-500 to-red-500"></div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Let's Build</span><br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Something Great
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-semibold">
              Whether you're a student with a groundbreaking idea, a potential speaker, or a
              partner looking to collaborate, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
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
              <span className="text-white">Quick</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Actions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
              Choose the best way to get in touch with GSU UTM
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
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
                    <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 font-bold">
                        {action.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed text-sm font-semibold">
                        {action.description}
                      </p>
                      
                      <Button
                        onClick={() => openForm(action.href)}
                        className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 font-semibold"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent transform skew-x-12"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-red-500/5 to-transparent rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl lg:text-7xl leading-tight mb-6 font-bold">
              <span className="text-white">Send Us a</span><br />
              <span className="text-white">Message</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
              Have a specific inquiry? Fill out the form below and we'll get back to you shortly.
            </p>
          </motion.div>

          <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8">
            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}