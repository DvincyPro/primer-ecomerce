import React from "react";
import { Item } from "../type";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { BsStarFill } from "react-icons/bs";

const Products = ({ productData }: any) => {
  return (
    <div className=" py-6 px-4 grid grid-cols-4 gap-4 ">
      {productData.map((item: Item) => (
        <div  key={item._id}>
          <div className=" border-[1px] border-neutral-600 mg-6 group ">
            <Image
              className=" w-full mb-2 h-[300px] object-contain opacity-80 scale-100 group-hover:scale-90 group-hover:opacity-100 duration-300 "
              src={item.image}
              width={300}
              height={250}
              alt="imagen"
            />
            <div className="px-2 py-4 flex flex-col justify-between " >
              <div className="flex justify-between py-2 ">
                <button className=" w-20 h-9 bg-blue text-neutral-100 rounded-full gap-1 items-center justify-center hover:bg-[#004f9a] duration-300 flex">
                  <span>
                    <GoPlus />
                  </span>
                  Add
                </button>
                <button className=" w-20 h-9 bg-neutral-100 border-[1px] border-neutral-800 rounded-full gap-1 items-center justify-center hover:bg-[#000] duration-300 flex">
                  <span  >
                    <GoPlus/>
                  </span>
                  Details
                </button>
              </div>
              <div className=" flex items-center gap-3 " >
                <p className=" text-lg text-[#0abf53] " >Now ${item.price}</p>
                <p className=" text-[#606c76] line-through decoration-[1px] " >${item.oldPrice}</p>
              </div>
              <h2 className=" text-lg font-semibold py-2 text-[#000] " >${item.title.substring(0,25)}</h2>
              <p>${item.description.substring(0,60)}...</p>
              <div className=" flex gap-2 items-center text-sm mt-2 " >
                  <div className=" flex text-sm gap-1 " >
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <p>25</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;