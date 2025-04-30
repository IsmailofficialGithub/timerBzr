"use client";
import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const TimerUnit = ({ value, label }) => {
  const controls = useAnimationControls();
  
  useEffect(() => {
    // Animate on value change
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.4 }
    });
  }, [value, controls]);

  const unitVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        duration: 0.5
      } 
    }
  };

  return (
    <motion.div 
      className="unitContainer"
      variants={unitVariants}
    >
      <motion.div 
        className="unitValue"
        animate={controls}
      >
        {String(value).padStart(2, '0')}
        <motion.div className="unitGlow" />
      </motion.div>
      <motion.div className="unitLabel">
        {label}
      </motion.div>
    </motion.div>
  );
};

export default TimerUnit;