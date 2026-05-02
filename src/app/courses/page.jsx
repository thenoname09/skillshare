import AllCourseCard from '@/components/AllCourseCard';
import { getCourses } from '@/lib/data';
import React from 'react';

const CoursesPage  = async () => {
      const courses = await  getCourses()
       
    
    return (
      <div className='max-w-6xl mx-auto py-12'>

            <div className='flex justify-between '>
                <h2 className='font-bold text-4xl'> <span className='text-orange-500'>All Courses</span>
             </h2>
            
            </div>
             
             <div className='max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
                {courses.map(Course => <AllCourseCard key={Course.id} Course={Course} ></AllCourseCard>

                 )}
             </div>
        </div>
    );
};

export default CoursesPage;