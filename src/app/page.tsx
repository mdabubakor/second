'use client'
import Rightbar from '@/Components/Rightbar'
import Sidebar from '@/Components/Sidebar'
import Image from 'next/image'
import SS from '../Assetse/Abubakar.png'
import { Typewriter } from 'react-simple-typewriter'
export default function Home() {
  return (
    <>
       
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20  md:px-32'>
    <div className='col-span-12  bg-slate-900 lg:col-span-3 p-4 text-center  rounded-2xl'>
      <Sidebar/> 
      
    </div>
    <div className='col-span-12 bg-slate-900 lg:col-span-9  rounded-2xl'>
   
    <Rightbar/>
     <div className='grid md:grid-cols-2 text-white items-center justify-center mt-32 px-4'>
      <div>
      
          <h2 className="text-2xl font-semibold ">Abu-Bakar</h2>

          <div className="text-lg font-semibold text-zinc-500">
              <p>I am a</p>
            <Typewriter
              words={["MERN Stack Developer", "Web desinger", "Grapic Desinger", ]}
              loop={Infinity}
              cursor
              cursorStyle=" |"
              cursorColor="green"
              typeSpeed={150}
              deleteSpeed={300}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </div>

          <p className="text-base tracking-wide">
            As a dedicated and proficient full-stack developer, I am seeking a
            challenging role in a dynamic organization where I can leverage my
            extensive experience in web technologies, contributing to innovative
            projects, and continually enhancing my skills to foster personal and
            professional growth while adding value to the company&lsquo;
            objectives and vision.
          </p>
        
        
      </div>
      <div>
       <Image src={SS} alt='ABu 'className='' />
      </div>
     </div>
    </div>
  </div>
   
  
    
    </>
  )
}
