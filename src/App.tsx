import { motion } from 'framer-motion';

export default function App() {
  const textAnimation = {
    hidden: { opacity: 0, rotateX: 20, translateY: 50 },
    visible: { opacity: 1, rotateX: 0, translateY: 0 },
  };

  return (
    <div className="flex justify-between items-center h-screen w-4/5 ml-auto bg-primarybg perspective-1000 pt-20">
      <img 
        className="w-auto max-w-[500px] h-auto object-contain" 
        src="profile.png" 
        alt="Profile" 
      />
      
      <div className="ml-10 -skew-y-3 mr-7 -mt-60">
        <motion.h1 
          className="text-7xl text-primarytext font-bold text-transparent bg-clip-text bg-gradient-to-r "
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Front-End Developer
        </motion.h1>
        
        <motion.h2 
          className="mt-3 text-1xl text-primarytext"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          with a passion for continuous learning and <br/> improving my skills
        </motion.h2>
      </div>
    </div>
  );
}
