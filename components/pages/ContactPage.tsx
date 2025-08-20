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
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfAh771LDLQTKuyQHjGATUSesG8Smxmll1amwSkIDDCLU981A/viewform?usp=dialog",
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

            <h1 className="text-6xl lg:text-7xl mb-6 font-extrabold">
              <span className="text-white">Get in</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-normal">
              Ready to join the{" "}
              <span className="font-semibold text-orange-400">
                most innovative startup community
              </span>{" "}
              at UTM? Have questions about our programs? We'd
              love to hear from you and help you start your
              entrepreneurial journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
            <h2 className="text-4xl lg:text-5xl mb-6 font-bold">
              <span className="text-white">How to</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Reach Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-normal">
              Choose the{" "}
              <span className="font-medium text-orange-400">
                best way
              </span>{" "}
              to connect with our team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 h-full transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <div className="relative z-10 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-2xl text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 font-bold">
                        {method.title}
                      </h3>

                      <p className="text-gray-400 mb-4 leading-relaxed font-normal">
                        {method.description}
                      </p>

                      <div className="mb-6">
                        <p className="text-orange-500 font-semibold text-lg">
                          {method.contact}
                        </p>
                      </div>

                      <Button
                        asChild
                        className={`w-full bg-gradient-to-r ${method.color} text-white hover:opacity-90 py-3 rounded-xl transition-all duration-300 font-semibold`}
                      >
                        <a
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {method.action}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-6 font-bold">
              <span className="text-white">Quick</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Actions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-normal">
              Take the{" "}
              <span className="font-medium text-orange-400">
                next step
              </span>{" "}
              in your entrepreneurial journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => {
                    if (action.href) {
                      window.open(action.href, "_blank");
                    }
                  }}
                >
                  <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-orange-500/30 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <div className="relative z-10 text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <h3 className="text-lg text-white mb-2 group-hover:text-orange-400 transition-colors duration-300 font-semibold">
                        {action.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed font-normal">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
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
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl mb-6 font-bold">
                <span className="text-white">Have</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Questions?
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-normal">
                We're here to help! Whether you're curious about
                membership, want to know more about our events,
                or have ideas for collaboration,{" "}
                <span className="font-medium text-orange-400">
                  don't hesitate to reach out
                </span>
                .
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-300 font-normal">
                    What are the membership requirements?
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-300 font-normal">
                    How can I get involved with GSU UTM?
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-300 font-normal">
                    Are there opportunities for partnerships?
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 text-center">
                  <Mail className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-2xl text-white mb-4 font-bold">
                    Get Instant Answers
                  </h3>
                  <p className="text-white/90 mb-6 font-normal">
                    Send us your questions and we'll get back to
                    you within{" "}
                    <span className="font-semibold">
                      24 hours
                    </span>
                    .
                  </p>
                  <Button
                    asChild
                    className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold"
                  >
                    <a href="mailto:groundup.startup.uoft@gmail.com">
                      Email Us Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}