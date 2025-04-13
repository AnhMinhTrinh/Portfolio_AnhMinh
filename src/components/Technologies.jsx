import { FaHtml5 } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiMysql,
  SiDotnet,
  SiFigma
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl lg:-translate-y-17 transition-transform font-bold"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4 "
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <FaHtml5 className="text-7xl text-[#E34F26] " />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <SiCss3 className="text-7xl text-[#1572B6]" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiTailwindcss className="text-7xl text-[#38BDF8]" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <SiBootstrap className="text-7xl text-[#7952B3]" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <SiJavascript className="text-7xl text-[#F7DF1E]" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <SiDotnet className="text-7xl text-[#512BD4]" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <SiMysql className="text-7xl text-[#4479A1]" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <SiFigma className="text-7xl text-[#F24E1E]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
