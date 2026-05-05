
import Image from 'next/image';
import React from 'react';
import Imagetips from '@/assets/tips-and-tricks.png'
import setGoals from '@/assets/target.png'
import ImagePractice from '@/assets/practice.png'
import ImageTime from '@/assets/time.png'

const LearningTips = () => {
    return (
        <div className=' py-15 bg-slate-800'>

            <div  className=' container mx-auto '>

                <div className='flex items-center gap-2'>
                    <Image
                          src={Imagetips}
                          alt="Learning Tips"
                          
                          height={50}
                          width={50}
                          className="object-cover rounded-xl"
                        />
                        <h2 className='font-bold text-4xl text-white '>Learning  <span className="text-orange-400">Tips</span></h2>
                </div>
            <div className='flex items-center gap-2 '>
                 
                

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6  max-w-5xl mx-auto mt-10'>

                
                    <div className='bg-slate-700 hover:bg-slate-600 p-6 rounded-2xl space-y-4 hover:scale-105 transition-all duration-300'>
                         <Image
                          src={setGoals}
                          alt="Learning Tips"
                          
                          height={50}
                          width={50}
                          className="object-cover rounded-xl"
                        />
                        <h2 className='font-bold text-lg text-white ' >Set Clear Goals</h2>
                          <p className='text-slate-400 text-sm '>Define what you want to achieve before starting. Break big goals into small daily tasks to stay on track.</p>
                    </div>

                    <div className='bg-slate-700 p-6  hover:bg-slate-600 hover:scale-105 transition-all duration-300 rounded-2xl space-y-4'>
                         <Image
                          src={ImageTime}
                          alt="Learning Tips"
                          
                          height={50}
                          width={50}
                          className="object-cover rounded-xl"
                        />
                        <h2 className='font-bold text-lg text-white' >Set Clear Goals</h2>
                          <p className='text-slate-400 text-sm '>Define what you want to achieve before starting. Break big goals into small daily tasks to stay on track.</p>
                    </div>
                    <div className=' bg-slate-700 hover:scale-105 transition-all duration-300 p-6 hover:bg-slate-600  rounded-2xl space-y-4'>
                         <Image
                          src={ImagePractice}
                          alt="Learning Tips"
                          
                          height={50}
                          width={50}
                          className="object-cover rounded-xl"
                        />
                        <h2 className='font-bold text-lg text-white ' >Set Clear Goals</h2>
                          <p className='text-slate-400 text-sm'>Define what you want to achieve before starting. Break big goals into small daily tasks to stay on track.</p>
                    </div>

                </div>
            </div>
            </div>
        </div>
    );
};

export default LearningTips;