import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Code, Award, Mail, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/projects', label: 'Projects', icon: Code },
  { path: '/skills', label: 'Skills', icon: Award },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export default function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Desktop Navigation - Top */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-purple-500/20 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                VS
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                        isActive
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-purple-600/20'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </motion.div>
                  </Link>
                );
              })}
              
              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-lg bg-purple-600/20 text-purple-600 dark:text-purple-400 hover:bg-purple-600/30 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Floating Bottom Bar with Glass Effect */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="md:hidden fixed bottom-3 left-3 right-3 z-50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-purple-500/20 transition-colors shadow-xl shadow-black/5"
      >
        <div className="px-1 py-2">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileTap={{ scale: 0.85 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all ${
                      isActive
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-500/40'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <Icon size={18} className={isActive ? '' : 'opacity-70'} />
                    <span className={`text-[9px] font-medium ${isActive ? '' : 'opacity-70'}`}>
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
            
            {/* Theme Toggle Button on Mobile */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={toggleTheme}
              className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl text-purple-600 dark:text-purple-400"
              aria-label="Toggle theme"
            >
              <motion.div
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
              <span className="text-[9px] font-medium">Theme</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
