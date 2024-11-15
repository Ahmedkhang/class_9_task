import React from 'react';
export default function Navbar(){
   return(
      <nav className="w-[100%] h-[12vh] bg-blue-900 flex text-blue-500">
         <div className="w-[15vw] h-[10vh] ">
            <img src='/logo.png' className="w-[15vw] h-[12vh] md:w-[12vw] ml-5 lg:w-[7vw] "></img>
         </div>
         <div className="w-[60vw] md:w-[55vw] font-bold h-[12vh] ml-5 text-center">
            <h1 className="text-md mt-7 ml-3 text-blue-200 font-bold lg:hidden">Tuition Free Program</h1>
            <h2 className="hidden text-blue-200 text-xl mt-7 lg:block">Tuition Free Education Program On Latest Technologies</h2>
         </div>
         <div className='w-[50vw] hidden  md:block'>
             <ul className=" md:w-[45vw] lg:w-[30vw] md:flex gap-5 mt-7 font-bold ml-5 text-white ">
               <li>Home</li>
               <li>Apply</li>
               <li>Jobs</li>
               <li>Results</li>
               <li>Courses</li>
             </ul>
         </div>
      </nav>
   )
}