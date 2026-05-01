import { getCourses } from '@/lib/data';
import React from 'react';
import InstructorCard from './InstructorCard';

const TopInstructors = async () => {
    const instructor = await getCourses()
    const topInstructors = instructor.sort((a, b) => b.rating - a.rating).slice(0, 4)

   
    return (
        <div>
              <div className='max-w-6xl mx-auto py-12'>

            <div className='flex justify-between '>
                <h2 className='font-bold text-4xl'>Top <span className='text-orange-500'>Instructors</span>
             </h2>
              
            </div>
             
             <div className='max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
                {topInstructors.map(topInstructor => <InstructorCard key={topInstructor.id} topInstructor={topInstructor} ></InstructorCard>

                 )}
             </div>
        </div>
        </div>
    );
};

export default TopInstructors;