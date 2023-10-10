"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";

export default function PixelBackground() {


  const getBlocks = () => {
    // Client-side-only code
    // block size is 5vw (size of the columns) =  width of the window * 0.05

    let blockSize;
    let windowHeight;

    if (typeof window !== "undefined") {
      // Code will only execute in a browser environment
      blockSize = window.innerWidth * 0.05;
      windowHeight = window.innerHeight;
    } else {
      // Handle the case where window is not defined (e.g., server-side)
      blockSize = 1; // or some default value
      windowHeight = 10;
    }
    // Calculate the amount of blocks we need to fill the entire height of the window
    const amountBlocks = Math.ceil(windowHeight / blockSize);
    
    [...Array(amountBlocks)].map((_, i) => {
      return <div className={styles.block}></div>;
    });
  };

  return (
    <motion.div className={styles.pixelBackground}>
      {[...Array(20)].map((_, index) => {
        return (
          <div key={index} className={styles.column}>
            {getBlocks()}
          </div>
        );
      })}
    </motion.div>
  );
}
