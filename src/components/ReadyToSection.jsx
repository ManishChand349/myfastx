import AccordionMenu from "./AccordionMenu";
import Btn, { BtnTwo } from "./components";

function ReadyToSection() {
  return (
    <div className="max-w-[80%] lg:max-w-[90%] mx-auto my-24 flex  ">
      <div className="w-[50%] border-r">
        <BtnTwo
          heading={"React to Get Started?"}
          title={"Join the MyFastX Community Today!"}
        />
        <p className="mt-12 text-[16px] font-normal">
          Don&apos;t miss out on this incredible opportunity to be part of a
          leading delivery and logistics platform. Sign up now for just{" "}
          <span className="text-[#63B178]"> Rs.999 </span> and start driving your way to success with
          MyFastX!
        </p>
        <div className="my-8">
          <Btn title={"Registar Now"} />
        </div>

        <p className="text-[#535353] font-normal">
          For more information <br />
          Contact us at:
        </p>

        <div className="my-8">
          <div className="flex items-center my-2">
            <img src="./whatsappImg.png" alt="" className="mr-4" />
            <p className="text-[16px] font-normal">+91-987654543</p>
          </div>
          <div className="flex items-center my-2">
            <img src="./gmailImg.png" alt="" className="mr-4" />
            <p className="text-[16px] font-normal"> xyz@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-[50%] mt-20">
      <div className="ml-4">

      <BtnTwo
          heading={"Frequently Asked Questions"}
          title={"Got Questions? We’ve Got Answers!"}
        />
      </div>
        <AccordionMenu />
      </div>
    </div>
  );
}

export default ReadyToSection;
