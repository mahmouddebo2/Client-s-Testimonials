import Image from "next/image";
import image1 from "@/public/pexels-italo-melo-2379004.png";
import image2 from "@/public/pexels-vlad-chețan-2923156.png";
import image3 from "@/public/pexels-andrea-piacquadio-846741.png";
export default function Clints() {
  return (
    <div>
      <div className="mt-28 grid grid-cols-1 md:grid-cols-3  gap-x-3">
        <div className="bg-white via-transparent px-10   rounded-[30px] w-[436px] flex justify-center items-center flex-col">
          <div className="">
            <Image
              src={image1}
              alt="John Smith"
              width={144}
              height={144}
              className="  -translate-y-16"
            />
          </div>
          <p className="text-[#1F2B5F] -mt-14">
            " I was looking for a unique travel experience, and I found it on
            Ithaka. I booked a private tour of the Pyramids with a local guide,
            and it was amazing! The guide was knowledgeable and passionate about
            Egypt. "
          </p>
          <h3 className="text-[#1F2B5F] text-lg font-bold tracking-wider">
            John Smith
          </h3>
          <p className="text-[#1F2B5F] text-[12px]">Travel Blogger</p>
          <div className=" flex justify-center items-center gap-1 my-6">
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className=""
            />
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className="text-[#ffc107]"
            />
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className="text-[#ffc107]"
            />
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className="text-[#ffc107]"
            />
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className="text-[#ffc107]"
            />
          </div>
        </div>
        <div className="bg-[#FF785A] text-white via-transparent px-10   rounded-[30px] w-[436px] flex justify-center items-center flex-col">
          <div className="">
            <Image
              src={image2}
              alt="John Smith"
              width={144}
              height={144}
              className="  -translate-y-16"
            />
          </div>
          <p className=" -mt-14">
            " I was looking for a unique travel experience, and I found it on
            Ithaka. I booked a private tour of the Pyramids with a local guide,
            and it was amazing! The guide was knowledgeable and passionate about
            Egypt. "
          </p>
          <h3 className="text-lg font-bold tracking-wider">John Smith</h3>
          <p className=" text-[12px]">Travel Blogger</p>
          <div className=" flex justify-center items-center gap-1 my-6">
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className=""
            />
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className="text-[#ffc107]"
            />
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className="text-[#ffc107]"
            />
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className="text-[#ffc107]"
            />
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className="text-[#ffc107]"
            />
          </div>
        </div>
        <div className="bg-white via-transparent px-10   rounded-[30px] w-[436px] flex justify-center items-center flex-col">
          <div className="">
            <Image
              src={image3}
              alt="John Smith"
              width={144}
              height={144}
              className="  -translate-y-16"
            />
          </div>
          <p className="text-[#1F2B5F] -mt-14">
            " I was looking for a unique travel experience, and I found it on
            Ithaka. I booked a private tour of the Pyramids with a local guide,
            and it was amazing! The guide was knowledgeable and passionate about
            Egypt. "
          </p>
          <h3 className="text-[#1F2B5F] text-lg font-bold tracking-wider">
            John Smith
          </h3>
          <p className="text-[#1F2B5F] text-[12px]">Travel Blogger</p>
          <div className=" flex justify-center items-center gap-1 my-6">
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className=""
            />
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className="text-[#ffc107]"
            />
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className="text-[#ffc107]"
            />
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className="text-[#ffc107]"
            />
            <Image
              src="./star-svgrepo-com.svg"
              alt="star"
              width={30}
              height={30}
              className="text-[#ffc107]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
