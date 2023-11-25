"use client";
import Image from "next/image";
import backgrouund from "@/public/Group 35704.png";
import Clints from "@/components/Clints";

export default function TestimonialsPage() {
  return (
    <seaction className="text-center">
      <div className="relative ">
        <Image
          src={backgrouund}
          alt="backgrouund TestimonialsPage"
          width={1920}
          height={1197}
          className="hi w-full h-full  overflow-hidden opacity-100  object-center object-contain "
        />

        <div className="flex justify-center items-center flex-col  ">
          <div className="absolute  top-[300px] ">
            <p className=" font-p text-[#4D9DE0]  ">Client's Testimonials</p>
            <h2 className="font-h2 text-[30px]  md:text-[40px]  font-[900]  md:text-[#FFFFFF]   opacity-100 my-3">
              Unforgettable Travel Experiences
            </h2>
            <div className="flex   items-center justify-center">
              <div className="absolute">

              </div>
              <Clints />
            </div>
          </div>
        </div>
      </div>
    </seaction>
  );
}
