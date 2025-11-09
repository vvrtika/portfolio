import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { skills } from '../data/portfolio';
import { Code, Zap, Database, BookOpen } from 'lucide-react';

const iconMap: Record<number, typeof Code> = {
  0: Code,
  1: Zap,
  2: Database,
  3: BookOpen,
};

export default function Skills() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-0 md:pt-24 pb-24 md:pb-16 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">My technical expertise</p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skillGroup, index) => {
              const Icon = iconMap[index] || Code;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-2xl transition-all"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-100 dark:bg-purple-600/20 rounded-lg">
                      <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{skillGroup.category}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        className="px-3 py-2 bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-500/30 rounded-lg text-purple-700 dark:text-purple-300 text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-600/30 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-linear-to-br from-purple-600 to-pink-600 p-1 rounded-2xl shadow-2xl shadow-purple-500/50"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
                <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                Problem Solving Achievements
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-purple-50 dark:bg-purple-600/10 rounded-xl"
                >
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">450+</div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">DSA Problems Solved</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">LeetCode & Code360</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-pink-50 dark:bg-pink-600/10 rounded-xl"
                >
                  <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">11</div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">LeetCode Badges</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Consistency & Excellence</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-indigo-50 dark:bg-indigo-600/10 rounded-xl"
                >
                  <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">98.36%</div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">Percentile Rank</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">NaukariCampus Contest</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 italic text-lg">
              "The only way to learn a new programming language is by writing programs in it."
            </p>
            <p className="text-purple-600 dark:text-purple-400 mt-2 font-semibold">- Dennis Ritchie</p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
