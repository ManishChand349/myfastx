import { BtnTwo, DivThree } from "./components";

function HowtoWorkSection() {
  return (
    <div className="max-w-[80%] lg:max-w-[90%] mx-auto my-14  ">
      <BtnTwo title={"How it Works"} heading={"Simple Steps to Get Started"} />
      <div className="flex">

      
      <div>
        <DivThree
          ImgHow={"./profile.png"}
          heading={"Register Online"}
          desc={
            "Fill out our easy online application form and pay the registration fee of Rs. 999"
          }
        />{" "}
        <DivThree
          ImgHow={"./profile.png"}
          heading={"Get Verified"}
          desc={
            "Complete the verification process to ensure you meet our standards."
          }
        />{" "}
        <DivThree
          ImgHow={"./profile.png"}
          heading={"Start Driving"}
          desc={
            "Once approved, start accepting delivery requests and earn money"
          }
        />
      </div>
      <div className=" hidden lg:block">
        <img src="./vehicles.png" alt="" className="" />
      </div>
      </div>
    </div>
  );
}

export default HowtoWorkSection;
