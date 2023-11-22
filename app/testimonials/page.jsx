import Image from "next/image";
import backgrouund from "@/public/Group 35704.png";
import Clints from "@/components/Clints";

export default function TestimonialsPage() {
  return (
    <seaction className="text-center ">
      <div className="relative text-center">
        <Image
          src={backgrouund}
          alt="backgrouund TestimonialsPage"
          width={1920}
          height={1197}
          className=" top-[3232px] left-0 overflow-hidden opacity-100 object-cover object-center "
        />

        <div className="flex justify-center items-center flex-col ">
          <div className="absolute  top-[300px] ">
            <p className=" font-p text-[#4D9DE0]  ">Client's Testimonials</p>
            <h2 className="font-h2  text-[40px] font-[900]  text-[#FFFFFF] opacity-100 my-3">
              Unforgettable Travel Experiences
            </h2>
            <Clints />
          </div>
        </div>
      </div>
    </seaction>
  );
}
