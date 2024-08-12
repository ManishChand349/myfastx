import { BtnTwo, Testimonial } from "./components";

function Testimonials() {
  return (
    <div className="max-w-[80%] lg:max-w-[90%] mx-auto my-14 ">
          <BtnTwo title={"What our partner says"} heading={"Testimonials"} />
      <div className="lg:flex justify-center lg:gap-x-3">
        <div className="w-[50%] hidden lg:block">
          <div className="">
            <p className="text-[16px] font-normal font-Rubik text-[#535353] mt-6 w-[90%] xl:w-[70%]">
              At MyFastX, our commitment to excellence is reflected in the
              feedback from our valued customers. Here is what they have to say
              about their experiences with our quick and reliable delivery and
              logistics services
            </p>
          </div>
          <div className="flex w-[40%] mt-8">
            <img src="./first.png" alt="" />
            <img src="./2nd.png" alt="" />
          </div>
        </div>

        <div className="lg:w-[50%] mt-10 lg:mt-0">
         <Testimonial/>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
