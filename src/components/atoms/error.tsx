import { motion } from "framer-motion";

export default function Error({ error }: { error: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center text-red-600 p-8"
    >
      <p>An error occurred. Please try again later. {error && `(${error})`}</p>
    </motion.div>
  );
}
