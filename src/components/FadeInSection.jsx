/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function FadeInSection({ children, delay = "0ms" }) {
  // Parse delay string (e.g., "100ms") to seconds
  const delaySec = parseFloat(delay) / 1000;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: isNaN(delaySec) ? 0 : delaySec,
      }}
    >
      {children}
    </motion.div>
  );
}
