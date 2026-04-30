import Link from 'next/link';
import React from 'react';
import AllCourseCard from './AllCourseCard';

const PopularCourses = async() => {
    const res = await fetch("https://skillshare-umber.vercel.app/data.json")
    const courses = await res.json()
    const topCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 3)

    return (
        <div className='max-w-6xl mx-auto py-12'>

            <div className='flex justify-between '>
                <h2 className='font-bold text-4xl'>Popular <span className='text-orange-500'>Courses</span>
             </h2>
              <Link href={"/courses"} className=' text-orange-400'>
              All-Courses
              </Link>
            </div>
             
             <div className='max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
                {topCourses.map(Course => <AllCourseCard key={Course.id} Course={Course} ></AllCourseCard>

                 )}
             </div>
        </div>
    );
};

export default PopularCourses;