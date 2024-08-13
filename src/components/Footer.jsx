function Footer() {
  return (
    <div className="bg-[#18181A] py-10">
      <img src="./main-logo.png" className="pl-20" />
      <div className="text-center lg:flex justify-around text-white">
        <p className=" lg:w-[20%] text-sm">
          MyFastX is a leading platform that provides hyper-local on-demand
          delivery solution for individuals and businesses wherther you need a
          delivery boy for your shop or to ship items within city, MyFastX is
          your truted partner making delivery affortless and convenient with a
          mission to revolutionize logistics through innovation and technology,
          MyFastX is committed to providing seamless end-to-end delivery
          solution that exceed customer expections
        </p>
        <ul>
          <li className="font-semibold">Company</li>
          <li className="my-2">About us</li>
          <li className="my-2">What We Do?</li>
          <li className="my-2">investors</li>
          <li className="my-2">Press Release</li>
          <li className="my-2">Careers</li>
          <li className="my-2">Pricing Details</li>
        </ul>
        <ul>
          <li className="font-semibold">Policies</li>
          <li className="my-2">Terms And Condition </li>
          <li className="my-2">Privacy Policy</li>
          <li className="my-2">Cookie Policy</li>
          <li className="my-2">Froud Disclaimer</li>
        </ul>{" "}
        <ul>
          <li className="font-semibold">Help</li>
          <li className="my-2">Restricted Items </li>
          <li className="my-2">Parcel size and weight guide</li>
          <li className="my-2">Packaging guide</li>
        </ul>
        <ul>
          <li className="font-semibold gap-y-4">Support</li>
          <li className="font-normal">FAQ </li>
          <li className="font-normal">customer Care</li>
          <li className="font-normal">Driver Term and Condition</li>
          <li className="font-normal">Packaging Instruction</li>
        </ul>
      </div>
      <div className="gap-y-4 text-white max-w-[80%] ml-14 my-4 text-sm ">
        <h1 className="mb-4">Our Presence</h1>
        <h1>Delhi  {" "}  Noida  {" "} Greate Noida {" "} Ghaziabad {"  "} Gurugram {" "} Faridabad {" "} Bahadurgarh {" "} Kolkata</h1>
      </div>
      <div className="h-[2px] bg-white max-w-[90%] mx-auto"></div>
      <div>
        <h1 className="text-white flex justify-center mt-2 text-sm">
            &copy 2024 MYFASTS TECHNOLOGIES PVT LTD. ALL Rights Reserved {" "} CIN U52219UP2023PTCI92260;
        </h1>
      </div>
    </div>
  );
}

export default Footer;
