import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Loader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Animate loader out
      gsap.to('.loader-container', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          const loader = document.querySelector('.loader-container');
          if (loader) {
            loader.remove();
          }
        }
      });
    }
  }, [isLoading]);

  return (
    <motion.div
      className="loader-container fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      initial={{ opacity: 1 }}
    >
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-24 h-24 border-4 border-blue-500 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Middle ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-cyan-400 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Inner dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Loading text */}
        <motion.div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-lg font-light"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
         <span className='text-2xl font-medium mt-2'>Loading...</span>
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: '50%',
              left: '50%',
            }}
            animate={{
              x: [0, Math.cos(i * 60 * Math.PI / 180) * 50],
              y: [0, Math.sin(i * 60 * Math.PI / 180) * 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Loader; 