import React from "react";
import { phoneImg } from "../public/assets/images";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { FaPlaceOfWorship } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

function NavbarBottom() {
  return (
    <div className=" max-w-container mx-auto py-2 px-6 flex items-center justify-between ">
      <div className=" flex items-center gap-5 ">
        <div className=" flex items-center gap-2 ">
          <Image className="w-6" src={phoneImg} alt="phoneImg" />
          <p className=" text-sm  font-semibold ">
            {" "}
            How do you want your items?{" "}
          </p>
          <FiChevronDown />
          <span className="w-[1px] h-4 bg-lightBlue inline-flex ml-2 "></span>
        </div>
        <div className=" flex items-center gap-2 ">
          <MdOutlineLocationOn />
          <p className="text-sm text-lightBlue"> Madrid, 95829 </p>
          <FaPlaceOfWorship />
          <p className="text-sm text-lightBlue"> Madrid, supermercado </p>
        </div>
      </div>
      <ul className=" flex gap-6 text-sm font-semibold " >
        <li className="bottonNavLi">Hogar</li>
        <li className="bottonNavLi">Limpieza</li>
        <li className="bottonNavLi">Postres & Golosinas </li>
        <li className="bottonNavLi">Home</li>
        <li className="bottonNavLi">Tecnología</li>
        <li className="bottonNavLi"> Ropa </li>
        <li className="bottonNavLi"> Autos </li>
        <li className="bottonNavLi">Walmart</li>
      </ul>
    </div>
  );
}

export default NavbarBottom;
