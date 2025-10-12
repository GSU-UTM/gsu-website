import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Rocket,
  ArrowRight,
  X,
  Globe,
  Users,
  Calendar,
  TrendingUp,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';
import { Button } from '../ui/button';

// Startup data structure
interface Startup {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  founders: string[];
  foundedDate: string;
  category: string;
  image: string; // Path to startup logo/image
  website?: string;
  achievements: string[];
  stage: 'idea' | 'mvp' | 'growth' | 'scale';
}

// Sample startup data - replace with real data
const startups: Startup[] = [
  {
    id: 'techflow',
    name: 'TechFlow',
    tagline: 'Streamlining developer workflows',
    description: 'AI-powered development environment that increases coding productivity by 40%.',
    longDescription: 'TechFlow revolutionizes the way developers work by integrating AI assistance directly into their workflow. Our platform reduces context switching, automates repetitive tasks, and provides intelligent code suggestions based on your project context.',
    founders: ['Alice Chen', 'Bob Kumar'],
    foundedDate: 'September 2024',
    category: 'Developer Tools',
    image: '/assets/startups/techflow.png', // Add actual image
    website: 'https://techflow.io',
    achievements: [
      'Winner of GSU Pitch Competition 2024',
      '$50K in pre-seed funding',
      '500+ beta users'
    ],
    stage: 'mvp'
  },
  {
    id: 'ecotrack',
    name: 'EcoTrack',
    tagline: 'Your personal sustainability companion',
    description: 'Mobile app helping students reduce their carbon footprint through gamification.',
    longDescription: 'EcoTrack makes sustainability fun and achievable for students. Track your daily activities, earn points for eco-friendly choices, and compete with friends to see who can make the biggest environmental impact.',
    founders: ['Sarah Martinez', 'David Lee'],
    foundedDate: 'October 2024',
    category: 'Sustainability',
    image: '/assets/startups/ecotrack.png', // Add actual image
    website: 'https://ecotrack.app',
    achievements: [
      '1000+ downloads in first month',
      'Partnership with UTM Sustainability Office',
      'Featured in Toronto Star'
    ],
    stage: 'growth'
  },
  {
    id: 'studybuddy',
    name: 'StudyBuddy AI',
    tagline: 'Never study alone again',
    description: 'AI tutor that adapts to your learning style and helps you ace your exams.',
    longDescription: 'StudyBuddy AI uses advanced machine learning to understand how you learn best. It creates personalized study plans, provides instant explanations, and tracks your progress to ensure you\'re always improving.',
    founders: ['Michael Zhang', 'Emily Johnson'],
    foundedDate: 'August 2024',
    category: 'EdTech',
    image: '/assets/startups/studybuddy.png', // Add actual image
    website: 'https://studybuddy.ai',
    achievements: [
      'Used by 2000+ UTM students',
      'Average grade improvement of 15%',
      'Secured angel investment'
    ],
    stage: 'growth'
  }
];

const stageColors = {
  idea: 'bg-blue-500',
  mvp: 'bg-purple-500',
  growth: 'bg-green-500',
  scale: 'bg-orange-500'
};

const stageLabels = {
  idea: 'Idea Stage',
  mvp: 'MVP',
  growth: 'Growth',
  scale: 'Scaling'
};

export function StartupsNewPage() {
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(startups.map(s => s.category)))];

  const filteredStartups = filter === 'all'
    ? startups
    : startups.filter(s => s.category === filter);

  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      <AnimatePresence mode="wait">
        {!selectedStartup ? (
          // Startup List View
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <Rocket className="h-6 w-6 text-orange-400" />
                    <span className="text-orange-400 tracking-wider uppercase font-semibold">
                      Our Portfolio
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                    Student{' '}
                    <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                      Innovations
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Discover the groundbreaking startups launched by GSU members.
                    From idea to impact, these ventures are changing the game.
                  </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-wrap justify-center gap-3 mb-12"
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`px-6 py-2 rounded-full font-medium transition-all ${
                        filter === category
                          ? 'bg-orange-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {category === 'all' ? 'All Startups' : category}
                    </button>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Startups Grid */}
            <section className="py-16 lg:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredStartups.map((startup, index) => (
                    <motion.div
                      key={startup.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${stageColors[startup.stage]} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300`}></div>
                      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
                        {/* Startup Image */}
                        <div className="aspect-video bg-gradient-to-br from-orange-500/10 to-purple-500/10 relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Rocket className="w-20 h-20 text-white/20 group-hover:scale-110 transition-transform duration-300" />
                          </div>

                          {/* Stage Badge */}
                          <div className="absolute top-4 right-4">
                            <span className={`px-4 py-2 rounded-full text-sm font-bold text-white ${stageColors[startup.stage]} shadow-lg`}>
                              {stageLabels[startup.stage]}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-1 flex flex-col">
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                            {startup.name}
                          </h3>
                          <p className="text-orange-400 text-base mb-4 font-semibold">
                            {startup.tagline}
                          </p>
                          <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed flex-1">
                            {startup.description}
                          </p>

                          {/* Meta Info */}
                          <div className="flex items-center justify-between text-sm text-gray-400 mb-6 pb-6 border-b border-gray-800">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-orange-400" />
                              <span>{startup.founders.length} founders</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-orange-400" />
                              <span>{startup.foundedDate}</span>
                            </div>
                          </div>

                          {/* Action Button */}
                          <Button
                            onClick={() => setSelectedStartup(startup)}
                            className={`w-full bg-gradient-to-r ${stageColors[startup.stage]} text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg`}
                          >
                            Learn More
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          // Individual Startup Detail View
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Back Button */}
              <button
                onClick={() => setSelectedStartup(null)}
                className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back to all startups</span>
              </button>

              {/* Startup Header */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Startup Logo/Image */}
                  <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-2xl mb-8 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Rocket className="w-24 h-24 text-white/30" />
                    </div>
                    {/* When you have actual images, use: */}
                    {/* <img
                      src={selectedStartup.image}
                      alt={selectedStartup.name}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white">
                      {selectedStartup.name}
                    </h1>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold text-white ${stageColors[selectedStartup.stage]}`}>
                      {stageLabels[selectedStartup.stage]}
                    </span>
                  </div>

                  <p className="text-xl text-orange-400 mb-6">
                    {selectedStartup.tagline}
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {selectedStartup.longDescription}
                  </p>

                  {selectedStartup.website && (
                    <a
                      href={selectedStartup.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all"
                    >
                      <Globe className="w-5 h-5" />
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Founders */}
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-orange-400" />
                      Founders
                    </h3>
                    <div className="space-y-2">
                      {selectedStartup.founders.map((founder) => (
                        <div key={founder} className="text-gray-300">
                          {founder}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Info */}
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-orange-400" />
                      Key Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Founded</span>
                        <span className="text-white">{selectedStartup.foundedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Category</span>
                        <span className="text-white">{selectedStartup.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Stage</span>
                        <span className="text-white">{stageLabels[selectedStartup.stage]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-orange-400" />
                      Achievements
                    </h3>
                    <ul className="space-y-3">
                      {selectedStartup.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-orange-400 mt-1">"</span>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}