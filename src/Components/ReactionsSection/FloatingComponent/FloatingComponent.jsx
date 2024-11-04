import { motion } from 'framer-motion';

const FloatingComponent = ({ children, className }) => {
    return (
        <motion.div
            className={`review ${className}`}
            initial={{
                transform: "translateZ(8px) translateY(-2px)"
            }}
            animate={{
                transform: "translateZ(32px) translateY(-8px)"
            }}
            transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
};

export default FloatingComponent;
