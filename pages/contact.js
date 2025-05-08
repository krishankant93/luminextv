import Footer from "../components/footer";
import Navbar from "../components/navbar";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data, e) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />

      <section className="flex items-center lg:h-screen font-poppins  ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-11 md:px-6">
          <div className="mb-10 text-left px-8">
            <h2 className="pb-2 mb-2 text-xl font-bold text-gray-800 md:text-3xl dark:text-white">
              Let&apos;s Stay Connected
            </h2>
            <p className="text-sm md:text-lg xl:text-xl  leading-normal text-gray-500  dark:text-gray-300">
              We are always ready to help you. Feel free to contact us.
            </p>
          </div>
          <div className="flex flex-wrap-reverse md:flex-wrap  ">
            <div className="w-full px-4 lg:w-1/2 mt-11 lg:mb-0">
              <div className="flex flex-col">
                <div className="w-full px-4 mb-10 sm:w-1/2">
                  <div className="max-w-xs mx-auto">
                    <div className="flex items-center gap-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-black rounded-full  dark:text-black dark:bg-white ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </div>
                      <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-200">
                        Email
                      </h2>
                    </div>
                    <a
                      href="mailto:support@wrapy.shop"
                      className="text-base font-medium text-gray-500 md:text-lg dark:text-gray-200"
                    >
                      support@wrapy.shop
                    </a>
                  </div>
                </div>
                {/* <div className="w-full px-4 mb-10 sm:w-1/2">
                                    <div className="max-w-xs mx-auto">
                                        <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-black rounded-full ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-telephone"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                            </svg>
                                        </div>
                                        <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl ">
                                            Phone
                                        </h2>
                                        <a
                                            href="tel:+91 9069084506"
                                            className="text-base font-medium text-gray-500 md:text-lg "
                                        >
                                            +91 9069084506
                                        </a>
                                    </div>
                                </div> */}
                {/* <div className="w-full px-4 mb-10 sm:w-1/2">
                                    <div className="max-w-xs mx-auto">
                                        <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-black rounded-full ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-geo-alt"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                        </div>
                                        <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl ">
                                            Office
                                        </h2>
                                        <a
                                            href="#"
                                            className="text-base font-medium text-gray-500 md:text-lg "
                                        >
H-272, near Shaheed Nagar Police Chowki, Shaheed nagar, Sahibabad, ghaziabad, uttar Pradesh - 201006
                                        </a>
                                    </div>
                                </div> */}
                <div className="w-full px-4 sm:w-1/2">
                  <div className="max-w-xs mx-auto">
                    <div className="flex items-center gap-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-black rounded-full dark:text-black dark:bg-white ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-grid-3x3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z" />
                        </svg>
                      </div>
                      <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-200">
                        Social
                      </h2>
                    </div>
                    {/* <a
                                            href="#"
                                            className="inline-block mr-8 text-black "
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="w-6 h-6 bi bi-facebook"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-block mr-8 text-black "
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="w-6 h-6 bi bi-twitter"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-block mr-8 text-black hover:text-black "
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="w-6 h-6 bi bi-linkedin"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                            </svg>
                                        </a> */}{" "}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start items-center gap-3 ">
                      <Link href="https://www.facebook.com/wrapy.shop/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="36"
                          height="36"
                          className="fill-current text-black dark:text-white  "
                          viewBox="0 0 16 16"
                        >
                          <path d="M 3.5 1 C 2.1250151 1 1 2.1250151 1 3.5 L 1 11.5 C 1 12.874985 2.1250151 14 3.5 14 L 11.5 14 C 12.874985 14 14 12.874985 14 11.5 L 14 3.5 C 14 2.1250151 12.874985 1 11.5 1 L 3.5 1 z M 3.5 2 L 11.5 2 C 12.335015 2 13 2.6649849 13 3.5 L 13 11.5 C 13 12.335015 12.335015 13 11.5 13 L 9.9042969 13 L 9.9042969 8.9667969 L 11.300781 8.9667969 L 11.509766 7.3574219 L 9.9042969 7.3574219 L 9.9042969 6.3320312 C 9.9042969 5.8660312 10.034031 5.5488281 10.707031 5.5488281 L 11.566406 5.5488281 L 11.566406 4.109375 C 11.417406 4.089375 10.907453 4.046875 10.314453 4.046875 C 9.0764531 4.046875 8.2304688 4.795875 8.2304688 6.171875 L 8.2304688 7.3574219 L 7 7.3535156 L 7 8.9628906 L 8.2304688 8.9667969 L 8.2304688 13 L 3.5 13 C 2.6649849 13 2 12.335015 2 11.5 L 2 3.5 C 2 2.6649849 2.6649849 2 3.5 2 z"></path>
                        </svg>
                      </Link>
                      <Link href="https://twitter.com/WrapyShop">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="36"
                          height="36"
                          className="fill-current text-black dark:text-white "
                          viewBox="0 0 16 16"
                        >
                          <path d="M 15 3.296875 C 14.476563 3.523438 13.949219 3.691406 13.367188 3.746094 C 13.949219 3.410156 14.417969 2.84375 14.648438 2.226563 C 14.066406 2.5625 13.484375 2.789063 12.84375 2.902344 C 12.257813 2.339844 11.5 2 10.683594 2 C 9.109375 2 7.824219 3.242188 7.824219 4.765625 C 7.824219 4.988281 7.824219 5.214844 7.882813 5.386719 C 4.875 5.386719 2.8125 3.691406 1.414063 2 C 1.121094 2.394531 1.003906 2.902344 1.003906 3.410156 C 1.003906 4.367188 1.53125 5.214844 2.289063 5.722656 C 1.820313 5.667969 1.355469 5.554688 1.003906 5.386719 C 1.003906 5.386719 1.003906 5.386719 1.003906 5.441406 C 1.003906 6.796875 1.996094 7.921875 3.28125 8.148438 C 3.046875 8.203125 2.8125 8.261719 2.519531 8.261719 C 2.347656 8.261719 2.171875 8.261719 1.996094 8.207031 C 2.347656 9.335938 3.976563 10.632813 5.257813 10.632813 C 4.265625 11.363281 3.34375 12 1.5 12 C 1.265625 12 1.453125 12 1 12 C 2.28125 12.789063 3.800781 13 5.375 13 C 10.683594 13 13.542969 8.769531 13.542969 5.101563 C 13.542969 4.988281 13.542969 4.878906 13.542969 4.765625 C 14.125 4.367188 14.59375 3.863281 15 3.296875"></path>
                        </svg>
                      </Link>
                      <Link href="https://www.instagram.com/wrapy.shop/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="36"
                          height="36"
                          className="fill-current text-black dark:text-white "
                          viewBox="0 0 16 16"
                        >
                          <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"></path>
                        </svg>
                      </Link>
                      <Link href="https://www.youtube.com/@wrapyshop">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="36"
                          height="36"
                          className="fill-current text-black dark:text-white "
                          viewBox="0 0 16 16"
                        >
                          <path d="M 8 2 C 5.960938 2 4.15625 2.210938 3.058594 2.375 C 2.160156 2.507813 1.445313 3.210938 1.28125 4.113281 C 1.140625 4.902344 1 6.054688 1 7.5 C 1 8.945313 1.140625 10.097656 1.28125 10.886719 C 1.445313 11.789063 2.160156 12.488281 3.058594 12.625 C 4.160156 12.789063 5.972656 13 8 13 C 10.027344 13 11.835938 12.789063 12.9375 12.625 L 12.941406 12.625 C 13.839844 12.492188 14.554688 11.789063 14.71875 10.886719 C 14.859375 10.09375 15 8.941406 15 7.5 C 15 6.054688 14.859375 4.902344 14.714844 4.113281 C 14.554688 3.210938 13.839844 2.507813 12.941406 2.375 C 11.84375 2.210938 10.039063 2 8 2 Z M 8 3 C 9.96875 3 11.730469 3.203125 12.792969 3.363281 C 13.261719 3.433594 13.640625 3.800781 13.730469 4.289063 C 13.863281 5.027344 14 6.121094 14 7.5 C 14 8.878906 13.863281 9.972656 13.734375 10.707031 C 13.644531 11.199219 13.265625 11.566406 12.792969 11.636719 C 11.722656 11.792969 9.957031 12 8 12 C 6.042969 12 4.273438 11.792969 3.207031 11.636719 C 2.738281 11.566406 2.355469 11.199219 2.265625 10.707031 C 2.136719 9.96875 2 8.878906 2 7.5 C 2 6.117188 2.136719 5.027344 2.265625 4.289063 C 2.355469 3.800781 2.734375 3.433594 3.203125 3.367188 L 3.207031 3.367188 C 4.269531 3.207031 6.03125 3 8 3 Z M 6 5 L 6 10 L 11 7.5 Z"></path>
                        </svg>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
            {!isSubmitSuccessful && ( <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="p-6 bg-gray-50 dark:bg-gray-900"
              >
                <input
                  type="hidden"
                  value="92cf4be0-a49f-4f54-83dd-9e384bd4c005"
                  {...register("apikey")}
                />
                <input
                  type="hidden"
                  value={`${userName} sent a message from luminexTV`}
                  {...register("subject")}
                />
                <input
                  type="hidden"
                  value="luminexTV Template"
                  {...register("from_name")}
                />
                <input
                  type="checkbox"
                  className="hidden"
                  style={{ display: "none" }}
                  {...register("botcheck")}
                ></input>
                <div className="mb-6 ">
                  <label
                    htmlFor="email"
                    className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Enter your email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                    required
                    placeholder="you@company.com"
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded  "
                  />
                   {errors.email && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.email.message}
                          </div>
                        )}
                </div>
                <div className="mb-6 ">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-200 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    placeholder="John Doe"
                    {...register("name", {
                      required: "Full name is required",
                      maxLength: 80,
                    })}
                    required
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded   "
                  />
                   {errors.name && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.name.message}
                          </div>
                        )}
                </div>
                <div className="mb-6 ">
                  <label
                    htmlFor="message"
                    className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Enter your Message",
                    })}
                    placeholder="Your Message"
                    type="text"
                    required
                    className="block w-full px-4 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded  py-7   "
                  />
                    {errors.message && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.message.message}
                          </div>
                        )}
                </div>
                <button className="px-4 py-2 sm:px-6 sm:py-3 text-lg font-medium text-center text-white bg-indigo-600 rounded-md  ">
                {isSubmitting ? (
                            <svg
                              className="w-5 h-5 mx-auto text-white animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : (
                            "Send Message"
                          )}
                </button>
              </form>  )}
              {isSubmitSuccessful && isSuccess && (
                    <>
                      <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                        <svg
                          width="60"
                          height="60"
                          className="text-green-300"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                            stroke="currentColor"
                            strokeWidth="3"
                          />
                        </svg>
                        <h3 className="py-5 text-xl text-green-500">
                          Message sent successfully
                        </h3>
                        <p className="text-gray-700 md:px-3">{Message}</p>
                        <button
                          className="mt-6 text-indigo-600 focus:outline-none"
                          onClick={() => reset()}>
                          Go back
                        </button>
                      </div>
                    </>
                  )}

                  {isSubmitSuccessful && !isSuccess && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 97 97"
                        className="text-red-400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                          stroke="CurrentColor"
                          strokeWidth="3"
                        />
                      </svg>

                      <h3 className="text-xl text-red-400 py-7">
                        Oops, Something went wrong!
                      </h3>
                      <p className="text-gray-700 md:px-3">{Message}</p>
                      <button
                        className="mt-6 text-indigo-600 focus:outline-none"
                        onClick={() => reset()}>
                        Go back
                      </button>
                    </div>
                  )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
