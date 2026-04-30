import Image from 'next/image';
import React from 'react';

const AllCourseCard = ({Course}) => {
    return (
        <div>

            <Image
                src={Course.image}
                

                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={Course.title}
                 width={300}
            height={300}
                className="object-cover rounded-xl"
                />
            


            <div className='border border-amber-900'>


                        {Course.title}
            </div>
        </div>
    );
};

export default AllCourseCard;