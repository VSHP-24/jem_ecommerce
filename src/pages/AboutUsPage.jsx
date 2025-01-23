import { FaLock, FaTruck } from "react-icons/fa";
import { FaCircleCheck, FaHeadset } from "react-icons/fa6";

import Heading from "../ui/Heading";

function AboutUsPage() {
  return (
    <div className="flex flex-col gap-6 text-lg tracking-widest tablet:text-xl">
      <Heading as="h2">JEM Indiaa</Heading>

      <p className="text-primary-100">
        Our goal is to design and create premium quality products that fit the
        bike beautifully and to make our biking community adventure-ready and
        elevate{" "}
        <span className="text-3xl font-bold text-primary-400 tablet:text-4xl laptopL:text-5xl">
          J
        </span>
        <span className="uppercase">oy in </span>
        <span className="text-3xl font-bold text-primary-400 tablet:text-4xl laptopL:text-5xl">
          E
        </span>
        <span className="uppercase">very </span>
        <span className="text-3xl font-bold text-primary-400 tablet:text-4xl laptopL:text-5xl">
          M
        </span>
        <span className="uppercase">ile </span>
      </p>

      <ul className="grid grid-cols-2 grid-rows-2 place-items-center gap-6 text-wrap border-y-2 border-dashed border-primary-100/30 py-4 text-lg text-primary-100 tablet:grid-cols-4 tablet:grid-rows-1">
        <li className="flex flex-col items-center gap-2">
          <span className="text-3xl tablet:text-4xl">
            <FaTruck />
          </span>
          <span className="px-5">Worldwide Shipping</span>
        </li>

        <li className="flex flex-col items-center gap-2">
          <span className="text-3xl tablet:text-4xl">
            <FaLock />
          </span>
          <span className="px-5">100% Secure</span>
        </li>

        <li className="flex flex-col items-center gap-2">
          <span className="text-3xl tablet:text-4xl">
            <FaCircleCheck />
          </span>
          <span className="px-5">Premium Quality </span>
        </li>

        <li className="flex flex-col items-center gap-2">
          <span className="text-3xl tablet:text-4xl">
            <FaHeadset />
          </span>
          <span className="px-5">Support 24 x 7</span>
        </li>
      </ul>

      <p className="text-primary-100">
        We have a wide range of motorcycle accessories for Safety, Ergonomics
        and Luggage system - Designed and Developed by the avid motorcycle
        enthusiasts to make their ride easy on any adventure quest.
      </p>
    </div>
  );
}

export default AboutUsPage;
