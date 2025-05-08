import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: " What sets LuminexTV apart from other LED TV brands?",
    answer: "LuminexTV stands out due to its cutting-edge technology, delivering unparalleled picture quality and vibrant colors. Our TVs are designed to provide an immersive viewing experience with advanced features, sleek design, and user-friendly interfaces.",
  },
  {
    question: "Are LuminexTVs suitable for gaming?",
    answer: "Absolutely! LuminexTVs are perfect for gaming enthusiasts. With high refresh rates, low input lag, and superior graphics processing, our TVs provide a seamless and immersive gaming experience.    ",
  },
  {
    question: " How does LuminexTV handle connectivity options?",
    answer:
      "LuminexTVs come equipped with multiple connectivity options, including HDMI, USB, and Wi-Fi, allowing you to connect your favorite devices and enjoy seamless streaming, gaming, and more.",
  },
  {
    question: "What kind of warranty and support do you offer? ",
    answer:
      "We provide a comprehensive warranty for all our products, ensuring peace of mind for our customers. Additionally, our dedicated support team is always ready to assist with any queries or technical issues you may encounter.",
  },
];

export default Faq;