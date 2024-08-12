import Btn from "./components";

function JoinUsSection() {
  return (
    <div className=" mx-auto mt-14  bg-[#F2FAF5] text-center p-10">
      <div className=" sm:max-w-[60%] md:w-[50%] lg:w-[40%] mx-auto ">
      <h1 className="text-[#63B178] font-semibold text-[12px]">
        Drive Your Success with MyFastX
      </h1>
      <h1 className="text-black font-semibold text-[32px] my-1">
        Join Us as a Partner Driver
      </h1>
      <p className="text-[#5D5D5D] text-[12px] font-medium my-4 pb-2 ">
        Are you a vehicle owner looking for new opportunities? Join MyFastX
        today and become part of a dynamic network of drivers. With us, you’ll
        enjoy flexible work hours, competitive earnings, and the satisfaction of
        delivering smiles across the city.
      </p>
      <Btn title={"Register now for just Rs, 999!"} />
      </div>
    </div>
  );
}

export default JoinUsSection;
