import { motion } from 'framer-motion';

const FloatingComponent = ({ children,
    className, 
    floatInitialZ,
    floatInitialY,
    floatAnimateZ,
    floatAnimateY,
    floatDuration  }) => {
    return (
        <motion.div
      className={`review ${className}`}
      initial={{
        transform: `translateZ(${floatInitialZ}) translateY(${floatInitialY})`
      }}
      animate={{
        transform: `translateZ(${floatAnimateZ}) translateY(${floatAnimateY})`
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: floatDuration,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
    );
};

export default FloatingComponent;
