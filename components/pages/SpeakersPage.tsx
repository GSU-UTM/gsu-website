import React from 'react';
import { motion } from 'motion/react';
import { Mic2, Linkedin, ExternalLink, Award, Handshake } from 'lucide-react';
import { speakers, sponsors } from '../data/speakersData';

export function SpeakersPage() {
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
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Mic2 className="h-6 w-6 text-orange-400" />
              <span className="text-orange-400 tracking-wider uppercase font-semibold">
                Speakers & Sponsors
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-white">The People Behind</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Our Events
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A huge thank you to every speaker, judge, and partner who has supported
              Ground-Up Startups UTM and helped our community grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="relative py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Award className="h-6 w-6 text-orange-400" />
              <span className="text-orange-400 tracking-wider uppercase font-semibold text-sm">
                Featured
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Speakers & Judges
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry leaders, founders, and entrepreneurs who have shared their
              insights with our community
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Photo */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-orange-500/30 group-hover:border-orange-500 transition-all duration-300">
                      <img
                        src={speaker.photo}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="text-orange-400/80 text-sm font-semibold mb-3">
                    {speaker.title}
                  </p>

                  {/* Description */}
                  {speaker.description && (
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                      {speaker.description}
                    </p>
                  )}

                  {/* Bottom: Tag + LinkedIn */}
                  <div className="flex flex-col items-center gap-3 mt-auto">
                    {speaker.event && (
                      <span className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-xs font-semibold">
                        {speaker.event}
                      </span>
                    )}
                    {speaker.linkedin && (
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Handshake className="h-6 w-6 text-orange-400" />
              <span className="text-orange-400 tracking-wider uppercase font-semibold text-sm">
                Partners
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Sponsors & Partners
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The organizations that make our mission possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 hover:border-orange-500/50 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {sponsor.name}
                    </h3>
                    <ExternalLink className="h-5 w-5 text-gray-500 group-hover:text-orange-400 transition-colors duration-300 flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {sponsor.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
