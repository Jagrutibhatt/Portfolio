// NameAnimation.tsx
import { motion } from "framer-motion";

const NameAnimation = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-no-repeat bg-cover mt-14">
        <motion.div
          className="relative"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-2xl  text-gray-800  ">Hello 🙋‍♀️, I'm</div>

          <div className="text-6xl text-gray-800 font-extrabold relative  z-20 ">
            Jagruti Bhatt
          </div>
          <div className=" flex items-center justify-center font-bold text-gray-600  ">
            Front end developer
          </div>
          <motion.div
            className="absolute bottom-0 w-full  "
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default NameAnimation;
