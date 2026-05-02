import { getCourses } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";

const CoursesDetailsPage = async ({ params }) => {
  const courses = await getCourses();
  const { id } = await params;

  const courseDetails = courses.find((c) => c.id == id);
  const {
    title,
    instructor,
    duration,
    rating,
    level,
    description,
    category,
    image,
  } = courseDetails;
  return (
    <div className=" bg-amber-50 py-13 pb-15 ">
        
        <h1 className=" px-15 font-bold text-3xl text-gray-800 pb-10 ">Courses Details </h1>
      
      <div className="border  bg-white rounded-2xl overflow-hidden shadow-lg max-w-5xl mx-auto px-6 py-12 grid  grid-cols-1 gap-5  md:grid-cols-2">
        <div>
          <div className="relative w-full  h-[420px] ">
            <Image
              src={image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={title}
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="p-8  space-y-4">
          <p className="text-xs font-bold uppercase  bg-orange-100 text-orange-500 px-4 py-1 rounded-full w-fit">
            {category}
          </p>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

          <div className="flex items-center gap-2">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
              alt="icon-instructor:"
              width={20}
              height={20}
            />
            <p className="text-sm text-gray-500">Instructor :</p>
            <p className="font-semibold text-gray-800">{instructor}</p>
          </div>
                  <div className="flex items-center gap-2 ">
                        <span className=" flex items-center text-yellow-400 text-sm">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                        </span>
                        <span className="font-semibold text-gray-800">
                          {rating}
                        </span>
                      </div>
          <div className="flex items-center gap-2">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2784/2784459.png"
              alt="icon-Duration:"
             width={20}
              height={20}
            />
            <p className="text-sm text-gray-500">Duration :</p>
            <p className="font-semibold text-gray-800">{duration}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2779/2779857.png"
              alt="icon-Duration:"
              width={20}
              height={20}
            />
            <p className="text-sm text-gray-500">Level :</p>
            <p className="font-semibold text-gray-800">{level}</p>
          </div>

             <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 rounded-full transition ">
             Enroll Now — Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetailsPage;
