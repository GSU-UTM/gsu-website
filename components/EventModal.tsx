import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Clock,
  MapPin,
  X,
  Sparkles,
  ArrowRight,
  Trophy,
} from 'lucide-react';

export function EventModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="pointer-events-auto relative w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl blur-xl opacity-40"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl border border-orange-500/30 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>

                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs sm:text-sm font-semibold mb-4">
                    <Sparkles className="h-4 w-4" />
                    <span>Flagship Event</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                    🤖 GSU AI Startup Competition
                  </h2>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-orange-400" />
                      September 19, 2026
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-orange-400" />
                      10:00 AM - 4:00 PM
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-orange-400" />
                      UTM Campus
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                    Canada's next groundbreaking AI startup could begin right
                    here. Sixteen selected teams step into a Shark Tank-style
                    environment to pitch their AI-driven ventures before a panel
                    of industry professionals, founders, investors, and
                    technology leaders.
                  </p>

                  <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-xl mb-6">
                    <Trophy className="h-5 w-5 text-orange-400 flex-shrink-0" />
                    <p className="text-sm text-orange-300 font-semibold">
                      16 teams compete · Cash prizes · Industry judges
                    </p>
                  </div>

                  <a
                    href="https://luma.com/4gghfflq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold rounded-2xl transform hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-orange-500/25"
                  >
                    Register on Luma
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
