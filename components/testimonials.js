import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/user/amitaa.webp";
import userTwoImg from "../public/user/rohita.jpeg";
import userThreeImg from "../public/user/ananya.webp";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-5 py-5  md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
            <p className="text-xl md:text-2xl leading-normal ">
            
              My living room turned into a  <Mark>private cinema</Mark>  with LuminexTV's mesmerizing visuals. It's pure magic!
            </p>

            <Avatar
              image={userOneImg}
              name="Amit Sharma"
              title="Kolkata"
            />
          </div>
        </div>
        <div className="">
        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-5 py-5  md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
            <p className="text-xl md:text-2xl leading-normal ">

              LuminexTV  <Mark>redefined</Mark> my TV-watching experience. Now, I see the world in brighter hues!
            </p>

            <Avatar
              image={userTwoImg}
              name="Rohit Gupta"
              title="Ghaziabad"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-5 py-5  md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
            <p className="text-xl md:text-2xl leading-normal ">
           
              LuminexTV - the secret behind my family&apos;s cozy <Mark> movie nights</Mark> . Binge-watching never felt better!
            </p>

            <Avatar
              image={userThreeImg}
              name="Ananya Rajput"
              title="Delhi"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-5 md:mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-[50px] h-[50px]">
        <Image
          src={props.image}
          width="70"
          height="70"
          alt="Avatar"
          className="object-fit "
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;