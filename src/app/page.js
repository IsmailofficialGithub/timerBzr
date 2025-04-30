
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TimerDisplay from "./components/TimerDisplay";
import { TARGET_DATE } from "./lib/TimeConfig"; // ✅ import the fixed date

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
        delay: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    },
  };

  return (
    <main className={`main ${isLoaded ? "loaded" : ""}`}>
      <div className="background-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      <motion.div
        className="container "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
      
        <motion.div  variants={containerVariants} className="flex">
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="logo"
          variants={titleVariants}
          initial="hidden"/>
        <motion.h1 className="title" variants={titleVariants}>
          BachatBzr
        </motion.h1>
        </motion.div>
     

        <TimerDisplay targetDate={TARGET_DATE} /> {/* ✅ Use fixed date */}
      </motion.div>
    </main>
  );
}
