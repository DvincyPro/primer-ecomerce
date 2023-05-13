import Link from "next/link";
import React from "react";
import Layaot from "../../components/Layaot";

const Custom404 = () => {
  return (
      <div className="text-center   w-full h-full align-middle justify-center  text-neutral-800 ">
        <div className="" >
            <h1 className=" text-9xl " >404</h1>
            <p>
              This page does not exist. Please return{" "}
              <Link className=" text-[#0099e5] text-decoration-underline " href="/">
                Home
              </Link>
            </p>
        </div>
      </div>
  );
};

export default Custom404;
