import Btn, { BtnTwo } from "./components";

function ReadyToSection() {
  return (
    <div className="max-w-[80%] lg:max-w-[90%] mx-auto my-14  ">
      <BtnTwo
        heading={"React to Get Started?"}
        title={"Join the MyFastX Community Today!"}
      />
      <p>
        Don&apos;t miss out on this incredible opportunity to be part of a leading
        delivery and logistics platform. Sign up now for just{" "}
        <span> Rs.999 </span> and start driving your way to success with
        MyFastX!
      </p>
      <Btn title={"Registar Now"} />
    </div>
  );
}

export default ReadyToSection;
