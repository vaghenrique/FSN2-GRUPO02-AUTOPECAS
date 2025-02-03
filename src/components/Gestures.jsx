import {motion} from "motion/react";
const Gestures = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      {children}
    </motion.div>
  );
};

export default Gestures;