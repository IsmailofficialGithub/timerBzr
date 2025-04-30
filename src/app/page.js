"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TimerDisplay from './components/TimerDisplay';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set a target date 15 days from now for the countdown
  const calculateTargetDate = () => {
    const target = new Date();
    target.setDate(target.getDate() + 15);
    return target;
  };
  
  useEffect(() => {
    // Animation trigger on page load
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.3 
      } 
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.5 
      } 
    }
  };

  return (
    <main className={`main ${isLoaded ? 'loaded' : ''}`}>
      <div className="background-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      <motion.div 
        className="container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="title"
          variants={titleVariants}
        >
          Time Remaining 
        </motion.h1>
        <TimerDisplay targetDate={calculateTargetDate()} />
      </motion.div>
      {/* <motion.div>
        <motion.img 
          src="/logo.png" 
          alt="Description" 
          variants={titleVariants} 
        />
      </motion.div> */}
    </main>

  );
}