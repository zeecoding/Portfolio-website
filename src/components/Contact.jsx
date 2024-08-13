import { CONTACT } from "../constants"
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
           whileInView={{opacity: 1, y:0}}
           initial={{y: -100 , opacity: 0}}
           transition={{duration: 1,ease: "easeInOut"}}
          className="my-20 text-center text-4xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
              whileInView={{opacity: 1, x:0}}
              initial={{x: -100 , opacity: 0}}
              transition={{duration: 1}}
              className="my-4">{CONTACT.address}</motion.p>
            <motion.p 
              whileInView={{opacity: 1, x:0}}
              initial={{x: -100 , opacity: 0}}
              transition={{duration: 1}}
              className="my-4">{CONTACT.phoneNo}</motion.p>
            <a 
              className="border-b" href="#" target="_blank">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact