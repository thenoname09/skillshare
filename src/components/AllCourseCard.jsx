import { Card } from "@heroui/react";
import { Caesar_Dressing } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaStarHalfAlt, FaUser } from "react-icons/fa";

const AllCourseCard = ({ Course }) => {
  return (
    <Card className="border  rounded-2xl hover:bg-white/40  shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ">
      
          
      <div className="relative w-full h-48 ">
        <Image
          src={Course.image}
          alt={Course.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900 ">
            {Course.title}
        </h3>

        <p className=" flex gap-2  text-xl items-center text-gray-700">
          <FaUser /> {Course.instructor}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <span className=" flex items-center text-yellow-400 text-sm">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
            <span className="text-sm font-bold text-gray-800">
              {Course.rating}
            </span>
          </div>
        </div>

        <Link href={`/courses/${Course.id}`} className="mt-3">
          <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2.5 rounded-full transition cursor-pointer">
            View Details
          </button>
        </Link>

      </div>
    </Card>
  );
};

export default AllCourseCard;
