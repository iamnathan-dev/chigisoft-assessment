import React from "react";
import HeroImge from "../assets/images/hero.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ApplSVGIcon from "@/shared/assets/svg/apple.svg";
import GooglePlaySVGIcon from "@/shared/assets/svg/google-play.svg";

const Hero = () => {
  return (
    <section className="md:h-96 h-fit rounded-lg bg-[rgb(26,111,176)]">
      <div className="flex md:flex-row flex-col itmes-center justify-between h-full md:px-0 px-8 md:pt-0 pt-15">
        <div className="basis-full md:basis-1/2 flex flex-col items-start justify-center md:pl-15 text-white">
          <h1 className="md:text-4xl text-2xl font-bold">
            24/7 Dilivery Service
          </h1>
          <p className="text-base mt-4">
            Experience premium ordering with fast delivery of quality food at
            unbeatable prices to your door.{" "}
          </p>

          <h4 className="mt-8 text-lg">On the go? Try our mobile app!</h4>

          <div className="mt-3 flex md:flex-row flex-col gap-3 w-full">
            <Button
              variant={"default"}
              size={"lg"}
              className="!p-6 md:w-fit cursor-pointer w-full bg-gray-800 hover:bg-gray-700 duration-300 ease-in flex items-center flex-row gap-2"
            >
              <Image src={ApplSVGIcon} alt="apple svg" width={25} height={25} />
              <div className="text-start">
                <small className="!text-gray-100 font-light">
                  Download on the
                </small>
                <h4 className="!text-gray-100 font-semibold">App Store</h4>
              </div>
            </Button>

            <Button
              variant={"default"}
              size={"lg"}
              className="!p-6 md:w-fit w-full cursor-pointer bg-gray-800 hover:bg-gray-700 duration-300 ease-in flex items-center flex-row gap-2"
            >
              <Image
                src={GooglePlaySVGIcon}
                alt="apple svg"
                width={25}
                height={25}
              />
              <div className="text-start">
                <small className="!text-gray-100 font-light">
                  Download on the
                </small>
                <h4 className="!text-gray-100 font-semibold">Google Play</h4>
              </div>
            </Button>
          </div>
        </div>

        <div className="basis-1/2 md:mt-0 mt-10">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={HeroImge}
              alt="Hero Image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
