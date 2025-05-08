import React from 'react'
import { data } from '../../data/constant'
import Heads from '../../components/products/Head'
import Navbars from '../../components/products/Navbar'
import Caraousel from '../../components/products/Caraousel'
import Image from 'next/image'
import Navbar from "../../components/navbar";
import Footer from '../../components/footer'

const ThirtyTwo = () => {
  console.log(data.thirtyTwoInchTv)
  const tv = data.thirtyTwoInchTv
  return (
    <div className=''>
      <Heads title={tv.title} />
      <Navbar/>
      <Navbars name={tv.name} price={tv.price}/>
      <Caraousel images={tv.caraouselImages} />
      <div className='flex flex-col lg:flex-row-reverse px-5 justify-center lg:px-10'>
        <Image src={tv.secondaryImage} alt="Picture of the author" className=' mx-auto  ml-2 py-5' width={1500} height={1500} />
        <div className='flex items-center'>
          <div className='block'>
            {
              tv.secondaryInfo.map((info, index) => {
                return (
                  <div className='lg:px-10 py-3 lg:w-[80%] lg:mx-auto ' key={index}>
                    <h1 className='text-lg lg:text-2xl font-semibold text-gray-800 dark:text-white'>{info.title}</h1>
                    <p className='py-2 text-md text-gray-600 dark:text-gray-100'>{info.description}</p>
                  </div>
                )
              }
              )
            }
          </div>
        </div>

      </div>
      <div className=' px-5 lg:px-10  py-5 lg:flex '>
        <h1 className='text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white lg:px-10 pb-3 lg:w-[40%]'>Tech Specs</h1>
        <div className='grid lg:gap-10 lg:w-[60%]]'>
          {
            tv.techStack.map((tech, index) => {
              return (
                <div className='' key={index}>
                  <h1 className='text-xl mt-2 lg:pb-3 font-semibold text-gray-800 dark:text-gray-50'>{tech.title}</h1>
                  <ul className='lg:py-2 text-sm lg:text-md text-gray-600 dark:text-gray-100 grid lg:grid-cols-2 lg:gap-5'>
                    {
                      tech.description.map((desc, index) => {
                        return (
                          <li className='py-1' key={index}>{desc}</li>
                        )
                      })
                    }
                  </ul>
                  </div>
              )
            })
          }
          </div>
          </div>
          <div className='px-5 lg:px-10  py-5 lg:flex '>
        <h1 className='text-2xl lg:px-10 lg:text-3xl font-semibold text-gray-800 dark:text-white  lg:w-[40%]'>What's in the box</h1>
        <div className='grid lg:w-[60%]'>
          {
            tv.whatsInTheBox.map((box, index) => {
              return (
                <div className='' key={index}>
                  <h1 className='py-1 lg:py-2 text-sm lg:text-md text-gray-600 dark:text-gray-100'>{box}</h1>
                  </div>
              )
            })
          }
          </div>
          </div>
<Footer/>
    </div>
  )
}

export default ThirtyTwo