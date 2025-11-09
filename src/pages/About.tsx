import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { personalInfo, education, achievements } from '../data/portfolio';
import { MapPin, Mail, Phone, GraduationCap, Trophy } from 'lucide-react';
import vartikaMemoji from '../assets/vartika-memoji.png';

export default function About() {
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
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Get to know me better</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Profile Card */}
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-purple-500/20 rounded-2xl p-8 mb-8 shadow-lg">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl overflow-hidden">
                  <img 
                    src={vartikaMemoji} 
                    alt="Vartika - Java Developer & AI Enthusiast" 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-2">
                  {personalInfo.name}
                </h2>
                <p className="text-purple-600 dark:text-purple-400 text-center mb-6">{personalInfo.title}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span>{personalInfo.phone}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-purple-500/20 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  Achievements
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-purple-600 dark:text-purple-400 mt-1">🏆</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Column - Bio & Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Bio */}
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-purple-500/20 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Journey</h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Hi! I'm Vartika, a passionate software developer currently pursuing my Bachelor's in 
                    Computer Science and Engineering at Guru Nanak Dev University, Amritsar. My journey 
                    in tech has been driven by curiosity and a love for problem-solving.
                  </p>
                  <p>
                    I specialize in Java and Spring Boot development, building robust full-stack applications 
                    that solve real-world problems. From creating job portals to developing e-learning platforms, 
                    I enjoy taking on challenges that push my technical boundaries.
                  </p>
                  <p>
                    Problem-solving is my passion! I've solved over 450 Data Structures and Algorithms problems 
                    on LeetCode and Code360, earning 11 badges for consistency. I believe that strong foundations 
                    in DSA are crucial for writing efficient and scalable code.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or participating in competitive programming contests. I'm always eager to learn 
                    and grow as a developer.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-purple-500/20 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="border-l-4 border-purple-600 dark:border-purple-500 pl-6 pb-6 last:pb-0"
                  >
                    <div className="relative">
                      <div className="absolute -left-[29px] w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-full border-4 border-gray-50 dark:border-gray-950" />
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{edu.degree}</h4>
                      <p className="text-purple-600 dark:text-purple-400 mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{edu.period} • {edu.location}</p>
                      {edu.gpa && (
                        <p className="text-pink-600 dark:text-pink-400 font-semibold mb-3">CGPA: {edu.gpa}</p>
                      )}
                      {edu.details && (
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                          {edu.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-purple-600 dark:text-purple-400">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
