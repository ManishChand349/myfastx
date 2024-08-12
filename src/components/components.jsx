/* eslint-disable react/prop-types */

import { reviews } from "../lib/Data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Btn({ title }) {
  return (
    <div>
      <button className="bg-black text-white font-noraml text-[12px] px-[35px] py-[7px] rounded-md">
        {title}
      </button>
    </div>
  );
}

export function DivOne({ imgOne, title, desc }) {
  return (
    <div className="bg-[#F8F8F8] rounded-lg px-2 pt-2 ">
      <img src={imgOne} className="my-2 w-[44px]" />
      <h1 className="text-[12px] text-[#63B178] my-1 font-semibold">{title}</h1>
      <p className="text-[10px] font-medium pb-4">{desc}</p>
    </div>
  );
}

export function BtnTwo({ title, heading }) {
  return (
    <div>
      <button className="bg-[#F5F5F4] border-l-[#63B178] border-l-2  font-noraml text-[12px] px-[15px] py-[4px] text-black font-semibold">
        {title}
      </button>
      <h1 className="text-[32px] font-semibold my-2">{heading}</h1>
      <div className="bg-[#63B178] h-[3px] w-[33%]"></div>
    </div>
  );
}

export function DivThree({ ImgHow, heading, desc }) {
  return (
    <div className="flex items-center mt-10 xl:ml-14 ">
      <img src={ImgHow} className="" />
      <div className="flex items-center">
        <img src="./LineTwo.png" className="" />
      </div>
      <div className="bg-[#F8F8F8] md:w-[75%] lg:w-[75%] xl:w-[60%] ">
        <h1 className="px-4 pt-2 text-[12px] text-[#63B178] font-semibold">
          {heading}
        </h1>
        <p className="px-4 py-2 text-black text-[12px] font-medium">{desc}</p>
      </div>
    </div>
  );
}

export function Testimonial() {
  return (
    <section className=" bg-[#F2FAF5] p-4 rounded-lg w-[100%] md:w-[100%] lg:w-[100%] xl:w-[80%]">
      <div className="slider-container">
        {/* <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote" />
          <img className="bottom-quote quote" src={Quote} alt="quote" />
        </blockquote> */}

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <div className="flex p-2">
                <img
                  className="rounded-full"
                  src={review.image}
                  alt=""
                />
                <div>
                  <p className="user text-[16px] font-semibold px-4">{review.name}</p>
                  <p className="user px-4 text-[13px] font-normal">{review.location}</p>
                </div>
              </div>
              <div className="content p-4 w-[90%]">
                <p className="text-[#535353] text-[16px] font-medium">{review.text}</p>
                <div className="info">
                  <div className="rating my-4 ">
                    <span className="star text-yellow-500 text-[25px]">&#9733;</span>
                    <span className="star text-yellow-500 text-[25px]">&#9733;</span>
                    <span className="star text-yellow-500 text-[25px]">&#9733;</span>
                    <span className="star text-yellow-500 text-[25px]">&#9733;</span>
                    <span className="star text-yellow-500 text-[25px]">&#9734;</span>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
