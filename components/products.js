import Image from "next/image";
import React from "react";
import Container from "./container";
import Link from "next/link";

const Products = (props) => {
  const { data } = props;
  return (
    <div >
    <Link href={"/products/"+data.slug}><Container className="max-w-[350px]  mb-20 lg:gap-10 block bg-gray-100 dark:bg-gray-700 rounded-lg ">
        <div
          className={`flex items-center justify-center p-3  `}>
            <Image
              src={data.caraouselImages[0]}
              width="521"
              height="521"
              alt="Benefits"
              className={"object-cover rounded-md"}
            />
        </div>

        <div
          className={`flex flex-wrap items-center w-full px-7 `}>
          <div>
            <div className="flex flex-col w-full mt-4">
            <p className='text-center sm:text-start mx-auto text-lg lg:text-xl font-semibold'>
    {data.name}  
    {/* <span className='text-base md:text-lg font-normal  font-mono line-through mr-1'>&#8377;{Math.floor(price*1.3)}</span> */}

    </p>
    <span className=' font-semibold text-indigo-600 md:text-lg  text-center '>Price: &#8377;{data.price}</span>


              <p className=" text-sm md:text-base mt-3 leading-normal text-gray-500  dark:text-gray-300">
                {data.description}
              </p>
            </div>

            {/* <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div> */}
          </div>
        </div>
      </Container></Link>  
    </div>
  );
};


export default Products;
