// src/components/AnimatedBox.jsx
import { motion } from "framer-motion";

export default function AnimatedBox() {
  return (
    <motion.div
      style={{ width: 100, height: 100, backgroundColor: "skyblue", margin: 50 }}
      animate={{ scale: 1.5, rotate: 90 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    />
  );
}
