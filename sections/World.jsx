"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col gap-2`}
    >
      <TypingText title="|People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track Friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className=" w-full h-full object-cover" />
        <div className="absolute bottom-[95px] right-[120px] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full  " />
        </div>
        <div className="absolute left-[140px] top-[60px] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full  " />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full  " />
        </div>
        <div className="absolute top-[70%] left-[15%] w-[360px] h-[282px] p-[6px] hover:scale-105 max-[1200px]:hidden">
          <img
            src="/world-m1-bg.png"
            alt="people"
            className="w-full h-full  "
          />
        </div>
        <div className="absolute top-[20%] right-[20%] w-[400px] h-[360px] p-[6px] hover:scale-105 max-[1200px]:hidden">
          <img
            src="/world-m-2-bg.png"
            alt="people"
            className="w-full h-full  "
          />
        </div>
        <div className="absolute top-3/4 left-[15%]  w-[280px] h-[180px] p-[2px]  rounded-[15%] bg-[#5d6680] hover:scale-105 max-[1200px]:hidden ">
          <img src="/World-m-1.png" alt="people" className="w-full h-full  " />
        </div>
        <div className="absolute top-1/4 right-[20%]  w-[280px] h-[180px] p-[2px]  rounded-[15%] bg-[#5d6680] hover:scale-105 max-[1200px]:hidden">
          <img src="/World-m-2.png" alt="people" className="w-full h-full  " />
        </div>
        <div className="absolute top-[45%]  right-[18%] w-[280px] h-[180px] p-[2px] max-[1200px]:hidden ">
          <p className="text-white font-normal text-[14px]">+189 Joined</p>
          <p className="text-white font-bold text-[18px]"> Hawkings Lab </p>
        </div>
        <div className="absolute top-[95%]  left-[17%] w-[280px] h-[180px] p-[2px] max-[1200px]:hidden ">
          <p className="text-white font-normal text-[14px]">+255 Joined</p>
          <p className="text-white font-bold text-[18px]"> The UpSide Dowm </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
