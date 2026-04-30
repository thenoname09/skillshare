
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import BannerMotionText from './BannerMotionText';
const Banner = () => {
    return (
       
        <div className="bg-[url('/hero.jpg')] h-[80vh] w-full bg-cover bg-no-repeat bg-top flex items-center  shadow-2xl">
      
      
      <div className="w-full h-full  bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-10 text-white">

         <BannerMotionText></BannerMotionText>
        

        </div>
      </div>
    </div>
    );
};

export default Banner;