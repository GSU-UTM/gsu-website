import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Building2, ArrowRight, Plus } from 'lucide-react';
import { Button } from '../ui/button';

export function StartupsPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Rocket className="h-4 w-4 text-orange-400" />
              <span className="text-orange-400 tracking-wider uppercase font-semibold">
                Our Startups
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Innovation in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Action
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the groundbreaking startups born from our community.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="h-16 w-16 text-orange-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Startups Coming Soon
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're currently incubating amazing ideas from our community members.
            Check back soon to see the innovative startups that will emerge from
            GSU!
          </p>
        </div>
      </section>
    </div>
  );
}