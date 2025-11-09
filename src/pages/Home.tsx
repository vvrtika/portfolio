import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Rocket, Trophy, Code } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import { personalInfo } from '../data/portfolio';
import { useEffect, useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const fullText = personalInfo.title;
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [fullText]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors">
      <ParticleBackground />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 dark:bg-purple-600/50 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-pink-600 dark:bg-pink-600/50 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-600 dark:bg-indigo-600/50 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-pulse delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 md:pt-32 pb-24 md:pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Greeting */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-purple-600 dark:text-purple-300 text-sm font-medium">
              <Sparkles className="inline-block w-4 h-4 mr-2" />
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-16 mb-8"
          >
            <h2 className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 font-light">
              {text}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-purple-500/50"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-200 dark:bg-gray-800 border border-purple-500/50 text-gray-800 dark:text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                Get In Touch
                <Mail className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-6 justify-center mb-16"
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-400 hover:text-white hover:bg-purple-600 transition-all"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-400 hover:text-white hover:bg-purple-600 transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-400 hover:text-white hover:bg-purple-600 transition-all"
            >
              <Code className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-400 hover:text-white hover:bg-purple-600 transition-all"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Floating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-purple-500/20 rounded-2xl hover:border-purple-500/50 transition-all shadow-lg"
            >
              <Code2 className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Clean Code</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Writing maintainable, scalable Java & Spring Boot applications
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-purple-500/20 rounded-2xl hover:border-cyan-500/50 transition-all shadow-lg"
            >
              <Rocket className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Fast Learner</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quick to adapt new technologies and frameworks
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-purple-500/20 rounded-2xl hover:border-pink-500/50 transition-all shadow-lg"
            >
              <Trophy className="w-12 h-12 text-pink-600 dark:text-pink-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Problem Solver</h3>
              <p className="text-gray-600 dark:text-gray-400">
                450+ DSA problems solved on LeetCode & Code360
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-600 dark:border-purple-500 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-500 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
