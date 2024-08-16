import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.jpg";
import { delay, motion } from "framer-motion";
import { PiHandWavingFill } from "react-icons/pi";
import './Hero.css';
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-row items-center lg:items-start">
              <motion.h1
                variants={container(0.25)}
                initial="hidden"
                animate="visible"
                className="typewriter pb-16 text-4xl font-normal tracking-tight lg:mt-16 lg:text-6xl flex items-center"
              >
                <motion.span 
                    animate={{ rotate: [0, 20 , 0] }} // Rotates from 0° to 20° and back to 0°
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} // Continuous animation
                    style={{ display: 'inline-block', transformOrigin: 'bottom center' }} // Sets pivot point
                    className="text-yellow-400 text-4xl mr-2">
                  <PiHandWavingFill />
                </motion.span>
                Hi,I'm Kevin Rush
              </motion.h1>
            </div>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.75)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="image-container flex justify-center items-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, delay: 1.25 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              whileHover={{ scale: 1.1, rotate: 1 }}
              src={profilePic} 
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
