import React from 'react'
import Link from 'next/link';
const Hero = () => {
  return (
      <div className="flex flex-col items-center content w-full">
          <h1 className="text-center lg:text-7xl text-3xl font-medium w-4/5 text-[#0c0114]">First Ever Tech Personality Award For Africans in Europe</h1>
          <div className="lg:w-1/2 w-4/5 flex items-center mx-auto mt-8 gap-6">
            <label className="w-full relative block mx-auto">
                <span className="absolute inset-y-0 left-2 flex items-center pl-2"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2337 21.8602L17.5217 15.9194C18.9903 14.1735 19.795 11.9768 19.795 9.68999C19.795 4.34701 15.448 0 10.105 0C4.76205 0 0.415039 4.34701 0.415039 9.68999C0.415039 15.033 4.76205 19.38 10.105 19.38C12.1109 19.38 14.0223 18.775 15.6565 17.6265L21.412 23.6124C21.6525 23.8622 21.9761 24 22.3228 24C22.651 24 22.9624 23.8749 23.1987 23.6474C23.7009 23.1641 23.7169 22.3628 23.2337 21.8602ZM10.105 2.52782C14.0543 2.52782 17.2672 5.74069 17.2672 9.68999C17.2672 13.6393 14.0543 16.8522 10.105 16.8522C6.15573 16.8522 2.94286 13.6393 2.94286 9.68999C2.94286 5.74069 6.15573 2.52782 10.105 2.52782Z" fill="#BABABA"/>
                </svg></span>
                  <input type="text" className="block bg-white w-full py-2 pl-12 pr-3 shadow-sm outline-none border h-[auto] align-middle my-auto rounded-md" placeholder="Nominee's Name, Nominee's Category"/>
                </label>

                <span className="p-4 text-[#EEE8F2] hover:bg-[#EEE8F2] bg-[#3E0563] hover:text-[#3E0563] transition-all duration-500 ease-in font-semibold rounded cursor-pointer">Search</span>
          </div>
          <Link href="/voting" ><span className="font-semibold flex gap-4 mt-8 cursor-pointer text-[#0c0114] group group-hover:ml-4"><span  className="my-auto group-hover:ml-6 transition-all duration-500"> View all categories</span> <span className="my-auto group-hover:ml-4 transition-all duration-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L21 12L15 6" stroke="#0C0114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H20" stroke="#0C0114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12H20" stroke="#0C0114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span></span></Link>
    </div>
  )
}

export default Hero;
