"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function PageWrapper({ children }) {
  const router = useRouter();
  const isPhotoSearch = router.pathname === "/photosearch";

  return (
    <motion.div
      initial={{ opacity: 0, x: isPhotoSearch ? 20 : -20 }} // Move right for photosearch, left for others
      animate={{ opacity: 1, x: 0 }}  // Fade in and move to original position
      exit={{ opacity: 0, x: isPhotoSearch ? -20 : 20 }}   // Fade out (opposite direction)
      transition={{ duration: 0.3 }}  // Smooth transition
    >
      {children}
    </motion.div>
  );
}
