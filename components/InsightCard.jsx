'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className='flex md:flex-row flex-col gap-4 '
  >
    <img
      src={imgUrl}
      alt='planet'
      className='md:w-[270px] w-full h-[250px] object-cover rounded-[32px]'
    />
    <div className='w-full flex justify-between items-center'>
      <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
        <h4 className='font-normal lg:text-[42px] text-[24px] text-white max-lg:cursor-pointer'>
          {title}
        </h4>
        <p className='font-normal mt-[16px] lg:text-[20px] text-[14px] text-secondary-white'>
          {subtitle}
        </p>
      </div>
      <div
        className='lg:flex hidden items-center justify-center
        w-[100px] h-[100px] border-[1px] rounded-full border-white cursor-pointer hover:border-blue-700'
      >
        <img
          src='arrow.svg'
          alt='arrow'
          className='w-[40%] h-[40%]  object-contain  '
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
