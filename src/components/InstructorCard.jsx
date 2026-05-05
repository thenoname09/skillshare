import { Avatar, Card } from "@heroui/react";
import React from "react";
import { FaStar, FaUser } from "react-icons/fa";

const InstructorCard = ({ topInstructor }) => {
  const getRole = (category) =>
    ({
      Development: "Full Stack Developer",
      Design: "UI/UX Designer",
      Marketing: "Digital Marketer",
      "Data Science": "Data Scientist",
      "Mobile Development": "Mobile Developer",
      Security: "Cyber Security Expert",
    })[category];

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("");
  return (
    <div>
      <Card className="border   rounded-2xl bg-white hover:bg-white/50  shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300  p-7">
        <div className="  h-48  flex justify-center items-center ">
         <Avatar className="h-32 w-32 ">
          <Avatar.Image
            alt="user.name"
            src={topInstructor.instructor?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback className="text-4xl ">{topInstructor?.instructor.charAt(0)}</Avatar.Fallback>
        </Avatar>

        </div>

          <p className=" flex gap-2  text-xl items-center font-bold text-gray-900">
            <FaUser /> {topInstructor.instructor}
          </p>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold  text-gray-700 ">
            {getRole(topInstructor.category)}
          </h3>

         

          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center  ">
              <p className="text-sm font-bold text-gray-900 flex items-center ">
                {topInstructor.rating}
                <span className="  text-yellow-400 text-sm">
                  <FaStar />
                </span>
              </p>

              <span className="text-gray-400 text-xs">Rating</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-bold text-gray-900">{topInstructor.level}</span>
              <span className="text-gray-400 text-xs">Level</span>
            </div>

          </div>

        </div>
      </Card>
    </div>
  );
};

export default InstructorCard;
