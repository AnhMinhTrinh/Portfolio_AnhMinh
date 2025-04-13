import profilePic from "../assets/AM.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import CV from "../assets/CV_Trinh_Anh_Minh.pdf";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVarients = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 lg:mt-3 ">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-10">
        {/* Image */}
        <motion.img
          src={profilePic}
          alt="Anh Minh"
          className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] rounded-3xl border border-stone-900"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* Text content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.h2
            variants={childVarients}
            className="pb-2 text-4xl tracking-tighter lg:text-8xl font-bold whitespace-nowrap"
          >
            Trịnh Anh Minh
          </motion.h2>

          <motion.span
            variants={childVarients}
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent mt-2 lg:ml-5"
          >
            Front End Developer
          </motion.span>

          <motion.p
            variants={childVarients}
            className="my-6 max-w-xl text-xl leading-relaxed tracking-tighter lg:ml-5"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.a
            variants={childVarients}
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            download 
            className="bg-white rounded-full px-6 py-3 text-sm text-stone-800 shadow-md hover:bg-cyan-400 hover:font-extrabold transition-all duration-300 ease-in-out hover:shadow-lg lg:ml-5"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;