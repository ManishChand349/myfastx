import Btn, { DivOne } from "./components";

function Main() {
  return (
    <div className="max-w-[80%] lg:max-w-[90%] mx-auto mt-4">
      <div className=" gap-x-4 lg:flex">
        <div className=" bg-[#F8F8F8] w-[100%] rounded-lg">
          <div className="flex justify-center px-[2.5rem]">
            <img src="./img.gif" className="my-6 w-[90%] xl:w-[70%] 2xl:w-[45%]" />
          </div>
          <div className="text-center md:px-[2.5rem] lg:px-[2rem]">
            <h1 className="font-semibold my-[1rem] text-[16px] pt-2">
              Welcome to MyFast<span className="text-[#63B178]">X Partner</span>
            </h1>
            <h1 className="text-[#63B178] font-semibold">
              Quick & Reliable Delivery and Logistics Solution
            </h1>
            <p className="text-[#5D5D5D] text-[13px] font-medium py-2 my-4">
              At MyFastX, we are revolutionizing the delivery and logistics
              industry by providing swift, dependable services to our clients.
              Our mission is to ensure every package reaches its destination on
              time, every time.
            </p>
          </div>
        </div>
        <div className=" ">
        <div className="bg-[#F8F8F8] pb-4 mb-3 rounded-md">

          <div>
            <img src="./lines-img.png" className="w-full" />
          </div>
          <div className="px-4 my-2">
            <h1 className="text-[#63B178] font-semibold text-[12px]">
              Drive Your Success with MyFastX
            </h1>
            <h1 className="text-black font-semibold text-[20px] my-1">
              Join Us as a Partner Driver
            </h1>
            <p className="text-[#5D5D5D] text-[13px] font-medium my-2 pb-2 ">
              Are you a vehicle owner looking for new opportunities? Join
              MyFastX today and become part of a dynamic network of drivers.
              With us, you’ll enjoy flexible work hours, competitive earnings,
              and the satisfaction of delivering smiles across the city.
            </p>
            <Btn title={"Register now for just Rs, 999!"} />
          </div>
        </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {" "}
            <DivOne
              imgOne={"./Transaction.png"}
              title={"Fast Delivery"}
              desc={
                "Get your packages delivered quickly and safely to your customers."
              }
            />{" "}
            <DivOne
              imgOne={"./Transaction.png"}
              title={"Fast Delivery"}
              desc={
                "Get your packages delivered quickly and safely to your customers."
              }
            />{" "}
            <DivOne
              imgOne={"./Transaction.png"}
              title={"Fast Delivery"}
              desc={
                "Get your packages delivered quickly and safely to your customers."
              }
            />
            <DivOne
              imgOne={"./Transaction.png"}
              title={"Fast Delivery"}
              desc={
                "Get your packages delivered quickly and safely to your customers."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
