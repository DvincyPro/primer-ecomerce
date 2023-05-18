import React from "react";
import Image from "next/image";
import { logo } from "../public/assets/images/index";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import NavbarBottom from "./NavbarBottom";
import Link from "next/link";
import { useSelector } from "react-redux";
import {useState, useEffect} from "react";
import { useSession, signIn,signOut  } from "next-auth/react";


const Navbar = () => {
  const { data: session } = useSession();
  // acá se empieza a manejar el carrito
  const productData = useSelector((state: any)=>state.shopper.productData);
  const [totalAmt, SetTotalAmt] = useState("")

  useEffect(() => {
   let price = 0;
   productData.map((item:any)=>{
    price += item.price * item.quantity
    return price
   })
   SetTotalAmt(price.toFixed(2))
  },[productData])
  


  return (
    <div className="w-full  bg-blue text-neutral-100 sticky top-0 z-50  ">
      <div className="w-full h-full border-b-[1px] border-b-lightBlue ">
        <div className=" max-w-container mx-auto h-20 px-4 flex items-center justify-between  gap-2 ">
          {/*--------Logo start here------------*/}
          <Link href="/" passHref >
            <div className="navBarHover">
              <Image src={logo} className="w-44" alt="logo" />
            </div>
          </Link>
          {/*--------Logo end here--------------*/}
          {/*--------Departments start here-----*/}
          <div className="navBarHover">
            <div className=" grid w-4 grid-cols-2 gap-[2px] ">
              <span className=" w-1.5 h-1.5 border-[1px] border-white inline-flex  "></span>
              <span className=" w-1.5 h-1.5 border-[1px] border-white inline-flex  "></span>
              <span className=" w-1.5 h-1.5 border-[1px] border-white inline-flex  "></span>
              <span className=" w-1.5 h-1.5 border-[1px] border-white inline-flex  "></span>
            </div>
            <p className=" text-base font-semibold ">Departments</p>
          </div>
          {/*--------Departments end here-------*/}
          {/*--------Services start here--------*/}
          <div className="navBarHover">
            <div className=" grid w-4 grid-cols-2 gap-[2px] ">
              <span className=" w-1.5 rounded-md h-1.5 border-[1px] border-white inline-flex  "></span>
              <span className=" w-1.5 rounded-md h-1.5 border-[1px] border-white inline-flex  "></span>
              <span className=" w-1.5 rounded-md h-1.5 border-[1px] border-white inline-flex  "></span>
              <span className=" w-1.5 rounded-md h-1.5 border-[1px] border-white inline-flex  "></span>
            </div>
            <p className=" text-base font-semibold ">Services</p>
          </div>
          {/*--------Services end here----------*/}
          {/*--------Serach Box start here------*/}
          <div className=" h-10 flex flex-1 relative ">
            <input
              type="text"
              className="h-full  bg-neutral-100 w-full rounded-full px-4 text-neutral-900 text-base outline-none border-[1px] border-transparent focus-visible:border-ligthText duration-200"
              placeholder="Busque lo que desee en Quantum Marker"
            />
            <span className=" absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-ligthText text-xl ">
              {" "}
              <BiSearchAlt />{" "}
            </span>
          </div>
          {/*--------Serach Box end here--------*/}
          {/*--------My Items start here--------*/}
          <div className=" navBarHover">
            <AiOutlineHeart />
            <div>
              <p className="text-xs">Recorder</p>
              <h2 className="text-base font-semibold -mt-1">My items</h2>
            </div>
          </div>
          {/*--------My Items end here----------*/}
          {/*--------Accounts start here--------*/}
          <div className=" navBarHover">
          <Image
              width={100}
              height={100}
              className="w-8 h-8 rounded-full"
              src={session && session.user && session.user.image ? session.user.image :"/img/usuario.jpeg"}
              alt="logo"
            />
            
            <div>
            {session ? (
            <button
              onClick={() => signOut()}
              className="uppercase text-sm border-[1px] border-primaryColor  px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-cyan-950 transition-all duration-300 active:bg-yellow-600"
            >Sign Out</button>
          ) : (
            <button
              onClick={() => signIn()}
              className="uppercase text-sm border-[1px] border-primaryColor  px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-cyan-950 transition-all duration-300 active:bg-yellow-600"
            >
              Sign In
            </button>
          )}
            </div>
          </div>
          {/*--------Accounts end here----------*/}
          {/*--------Cart start here------------*/}
          <Link passHref href="/Cart" className=" flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-hoverBg duration-300 cursor-pointer relative ">
            <BsCart2 className=" text-2xl " />
            <p className=" text-[10px] -mt-2 ">${totalAmt}</p>
            <span className=" absolute w-4 h-4 bg-yellow text-neutral-900 top-0 right-4 rounded-full flex items-center justify-center text-xs font-bodyFont ">
              {/* esto se obtiene de shopperSlice.tsx que es el que maneja el carrito */}
              {productData.length > 0 ? productData.length:0}
            </span>
          </Link>
          {/*--------Cart end here*-------------*/}
          {/*---------------------------------  */}
        </div>
      </div>
      {/* NavBarBotton start  here*/}
      <NavbarBottom />
      {/* NavBarBotton end  here*/}
    </div>
  );
};

export default Navbar;
