import styles from "./style.module.css";
import { motion } from 'framer-motion';


export default function PixelBackground() {
  const getBlocks = () => {
    const { innerWidth, innerHeight } = window;

    // block size is 5vw (size of the columns) =  width of the window * 0.05
    const blockSize = innerWidth * 0.05;
    // Calculate the amount of blocks we need to fill the entire height of the window
    const amountBlocks = Math.ceil(innerHeight / blockSize);
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
