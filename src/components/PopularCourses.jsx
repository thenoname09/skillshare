import Link from 'next/link';
import React from 'react';
import AllCourseCard from './AllCourseCard';
import { getCourses } from '@/lib/data';

const PopularCourses = async  () => {
    
    const courses = await  getCourses()
    const topCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 3)

    return (
        <div className='max-w-6xl mx-auto py-12'>

            <div className='flex justify-between '>
                <h2 className='font-bold text-gray-800 text-4xl'>Popular <span className='text-orange-500'>Courses</span>
             </h2>
              <Link href={"/courses"} className=' text-orange-400'>
              All-Courses
              </Link>
            </div>
             
             <div className='max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
                {topCourses.map(Course => <AllCourseCard key={Course.id} Course={Course} ></AllCourseCard>

                 )}
             </div>
        </div>
    );
};

export default PopularCourses;