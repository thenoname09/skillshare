"use client";
import { Button } from "@heroui/react";

import { motion } from "motion/react";
import Link from "next/link";
const BannerMotionText = () => {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-orange-400 font-semibold text-sm mb-3"
      >
        #1 Online Learning Platform
      </motion.p>
      {/* <p className="text-orange-400 font-semibold  text-xm mb-3">
                        #1 Online Learning Platform
                      </p> */}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Upgrade Your Skills Today
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl mb-6 text-gray-200"
      >
        Learn from industry experts. Master Web Development, <br />
        Design, Marketing & more — at your own pace.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex gap-4 mt-9 mb-6"
      >
        <Link href="/courses">
          <Button className="bg-orange-500 text-white font-semibold px-8 rounded-full">
            Explore Courses
          </Button>
        </Link>
        <Link href="/courses">
          <Button
            variant="outline"
            className="text-white border-white rounded-full"
          >
            View All
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default BannerMotionText;
