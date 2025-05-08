import React from 'react'
import Link from 'next/link'

const Navbars = ({name,price}) => {
  return (
    <div className='sticky top-0 z-50  '><div className='sm:flex w-full justify-between pt-2 p-5 lg:p-10 items-center  bg-white dark:bg-trueGray-900'>
    <p className='text-center sm:text-start text-lg lg:text-xl font-semibold'>
    {name}  | 
    {/* <span className='text-base md:text-lg font-normal  font-mono line-through mr-1'>&#8377;{Math.floor(price*1.3)}</span> */}
    <span className='text-lg font-normal md:text-xl '> &#8377;{price}</span>

    </p>
  <Link href="/contact"><button className='bg-[#1A73E8] w-full mt-3 sm:mt-0 sm:w-max text-white p-2 lg:p-3  px-3 lg:px-5 rounded-md  lg:text-lg  font-stock'>
      Find Retailer
    </button></Link>  
    </div></div>
  )
}

export default Navbars