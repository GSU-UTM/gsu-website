import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucreziaImg from '../../assets/Lucrezia.jpeg';
import MichalImg from '../../assets/Michal.jpeg';
import TakatoshiImg from '../../assets/Takatoshi.jpeg';
import JacoboImg from '../../assets/Jacobo.jpeg';
import TshupiImg from '../../assets/Tshupi.jpeg';
import AkshayaImg from '../../assets/Akshaya.jpeg';
import TigerImg from '../../assets/Tiger.jpeg';
import { Users, Heart, MapPin, ArrowRight, Sparkles, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { FORM_URLS, openForm } from '../lib/forms';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  quote?: string;
  funFact?: string;
  linkedin?: string;
  size?: 'small' | 'medium' | 'large';
}

export function TeamPage() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleFlip = (name: string) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  };

  const members: TeamMember[] = [
    {
      name: 'Michal Buczek',
      role: 'Co-President & Co-Founder',
      photo: MichalImg,
      quote: 'Hey GSU team! I\'m Michal, a third-year CS student with a business minor, passionate about building software and businesses from the ground up.',
      funFact: 'This year our team is focused on creating the best growth community for UTM\'s visionaries'
    },
    {
      name: 'Jacobo Isaza',
      role: 'Co-President & Co-Founder',
      photo: JacoboImg,
      quote: 'My name is Jacobo Isaza, a third-year Biological Chemistry research student from Colombia with experience in computational languages.',
      funFact: 'Excited to guide GSU\'s team in boosting your chances of building a successful startup, while also supporting your journey toward personal growth and success'
    },
    {
      name: 'Takatoshi Lee',
      role: 'Chief Technology Officer (CTO)',
      photo: TakatoshiImg,
      quote: 'I\'m Taka, GSU\'s VP Tech and a Computer Science specialist with a big interest in AI and startups.',
      funFact: 'Excited to build our website and use tech to help students turn their ideas into reality'
    },
    {
      name: 'Keitshupile Makola',
      role: 'Chief Financial Officer (CFO)',
      photo: TshupiImg,
      quote: 'Most call me Tshupi. I\'m the numbers guy here at GSU. I\'m a third-year student in Finance and Economics from South Africa.',
      funFact: 'Coffee chats are not really my thing, but if you see me around, I\'d be more than happy if you said hello'
    },
    {
      name: 'Lucrezia Derossi',
      role: 'Reels Director',
      photo: LucreziaImg,
      quote: 'My name is Lu, I\'m a third-year Biological Chemistry co-op student with a passion for the pharmaceutical industry and hopes of contributing to future drug development.',
      funFact: 'As VP Marketing of GSU, I\'m excited to bring creativity and energy to our community and highlight all the great opportunities our club has to offer'
    },
    {
      name: 'Akshaya Sridhar',
      role: 'Researcher',
      photo: AkshayaImg,
      quote: 'Hi! My name is Akshaya, and I\'m a first year CCIT student.',
      funFact: 'I\'m excited to be joining GSU because it\'s a great opportunity to get involved on campus, meet new people, and contribute to meaningful projects that support students'
    },
    {
      name: 'Mayank Agarwal',
      role: 'Chief Marketing Officer (CMO)',
      photo: TigerImg,
      quote: 'Hey everyone, I\'m Tiger. A bold thinker who\'s obsessed with building startups that actually do something. My background\'s in strategy, marketing, and execution but my real focus is helping people turn ideas into high-impact ventures.',
      funFact: 'I believe every student has at least one billion-dollar idea in them they just need the right environment to bring it out. That\'s what I\'m here to build'
    }
  ];

  const initials = (name: string) => {
    const parts = name.trim().split(/\s+/);
    const letters = parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? '');
    return letters.join('');
  };

  const getCardHeight = () => {
    return 'min-h-[450px]';
  };

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
              <Sparkles className="h-5 w-5 text-orange-400" />
              <span className="text-orange-400 tracking-wider uppercase font-semibold">
                Meet the Team
              </span>
              <Sparkles className="h-5 w-5 text-orange-400" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-white">The Minds Behind</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                GSU UTM
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're UTM students passionate about building a thriving startup community.
              Click on any card to learn more about us!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Team Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
            {members.map((member, index) => {
              const isFlipped = flippedCards.has(member.name);

              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={getCardHeight()}
                  style={{ perspective: '1000px' }}
                >
                  <div
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => toggleFlip(member.name)}
                    style={{
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.6s',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* Front of Card */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden shadow-xl hover:border-orange-500/50 transition-all duration-300"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    >
                      <div className="relative w-full h-full p-6 flex flex-col">
                        {/* Photo Section */}
                        <div className="flex-1 flex items-center justify-center mb-4">
                          {member.photo ? (
                            <div className="relative group">
                              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="relative object-cover rounded-2xl w-40 h-40 shadow-2xl"
                              />
                            </div>
                          ) : (
                            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-2xl w-40 h-40">
                              {initials(member.name)}
                            </div>
                          )}
                        </div>

                        {/* Name and Role */}
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {member.name}
                          </h3>
                          <p className="text-orange-400 font-semibold text-lg mb-3">
                            {member.role}
                          </p>
                          <p className="text-gray-400 text-sm italic">
                            Click to flip
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl shadow-xl p-1"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="w-full h-full bg-black/90 backdrop-blur-xl rounded-[22px] p-6 flex flex-col overflow-y-auto">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {member.name}
                          </h3>
                          <p className="text-orange-400 font-semibold text-sm mb-3">
                            {member.role}
                          </p>
                        </div>

                        {member.quote && (
                          <div className="mb-4">
                            <p className="text-gray-300 italic leading-relaxed text-sm">
                              "{member.quote}"
                            </p>
                          </div>
                        )}

                        {member.funFact && (
                          <div className="mb-4">
                            <p className="text-xs text-gray-400 uppercase font-semibold mb-1">
                              Fun Fact
                            </p>
                            <p className="text-gray-300 leading-relaxed text-sm">
                              {member.funFact}
                            </p>
                          </div>
                        )}

                        <p className="text-gray-400 text-xs italic mt-auto pt-4">
                          Click to flip back
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 font-bold">
              <span className="text-white">Want to</span>{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Join Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're always looking for passionate UTM students to help build our community
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Executive Positions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 hover:border-orange-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-3xl text-white mb-4 font-bold">
                  Executive Roles
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Lead our organization and shape the future of entrepreneurship at UTM.
                  Perfect for students who want to make a significant impact.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Leadership experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Event planning & management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">Community building</span>
                  </li>
                </ul>

                <Button
                  onClick={() => openForm(FORM_URLS.volunteer)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 py-6 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            {/* General Members */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-3xl text-white mb-4 font-bold">
                  Join Community
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Be part of our founding community and help us create amazing events
                  and programs for UTM entrepreneurs.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Networking opportunities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Skill development workshops</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Startup support & mentorship</span>
                  </li>
                </ul>

                <Button
                  onClick={() => openForm(FORM_URLS.join)}
                  variant="outline"
                  className="w-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white py-6 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300"
                >
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                Get Involved?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Reach out to us and let's discuss how you can contribute to the GSU UTM community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => openForm(FORM_URLS.partner)}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 px-8 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl text-lg font-bold"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 rounded-2xl transition-all duration-300 text-lg font-semibold"
              >
                <a
                  href="https://instagram.com/gsu.utm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
