"use client";
import { ClipLoader } from "react-spinners";



const loading = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">

      <ClipLoader
        color="#f97316"
        size={60}
        speedMultiplier={0.8}
      />

      <p className="text-gray-400 text-sm font-medium tracking-wide">
        Loading...
      </p>

    </div>
    );
};

export default loading;