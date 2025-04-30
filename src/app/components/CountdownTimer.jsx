"use client";
import { useState, useEffect } from 'react';
import TimerUnit from './TimerUnit';
import { motion } from 'framer-motion';

const CountDownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.7
      } 
    }
  };

  return (
    <motion.div 
      className="timerContainer"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <TimerUnit value={timeLeft.days} label="Days" />
      <TimerUnit value={timeLeft.hours} label="Hours" />
      <TimerUnit value={timeLeft.minutes} label="Minutes" />
      <TimerUnit value={timeLeft.seconds} label="Seconds" />
    </motion.div>
  );
};

export default CountDownTimer;