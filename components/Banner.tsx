import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import {
  bannerImg,
  sliderImgOne,
  sliderImgTwo,
  sliderImgThree,
  sliderImgFour,
} from "../public/assets/images";
import BannerText from "./BannerText";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import BottonPrimary from "./Bottonprimary";

// botones para el slider
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className=" absolute bottom-12 right-6  w-12 h-8 border-[1px] drop-shadow-md border-neutral-800 text-neutral-800 bg-neutral-100 text-xl flex items-center justify-center rounded-md hover:bg-blue hover:border-transparent hover:text-neutral-100 cursor-pointer duration-300 z-10 "
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
}
function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className=" absolute bottom-12  left-6 w-12 h-8 border-[1px] drop-shadow-md border-neutral-800 text-neutral-800 bg-neutral-100 text-xl flex items-center justify-center rounded-md hover:bg-blue hover:border-transparent hover:text-neutral-100 cursor-pointer duration-300 z-10 "
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}

function Banner() {
  // las props del slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  // el slider
  return (
    <div className=" w-full  px-4 py-6 font-titlFont flex gap-4 border-b-[1px] ">
      {/* slider del main page */}
      <div className=" mb-3 w-2/3 rounded-lg h-[410px] border-neutral-400  shadow-bannerShadow relative ">
        <Slider {...settings}>
          <div className=" w-full h-[410px] relative  ">
            <Image
              className=" w-full h-full object-cover rounded-lg "
              src={sliderImgOne}
              alt="image1"
            />
            <BannerText
              className=" absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-neutral-100 "
              title="Spring Fashion"
              description="nuevas tendencias de estilos simpre actualizadas"
              btnText="Shop now"
            />
          </div>
          <div className=" w-full h-[410px] relative  ">
            <Image
              className=" w-full h-full object-cover rounded-lg "
              src={bannerImg}
              alt="image1"
            />
            <BannerText
              className=" absolute w-60 h-full top-6 left-4 flex flex-col gap-3 border-text text-neutral-800 "
              title="Comodidad de Hogar"
              description="Toda clase de muebles del hogar para su confort"
              btnText="Shop now"
            />
          </div>
          <div className=" w-full h-[410px] relative  ">
            <Image
              className=" w-full h-full object-cover rounded-lg "
              src={sliderImgTwo}
              alt="image1"
            />
            <BannerText
              className=" absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-neutral-800 "
              title="Limpieza al instante"
              description="Productos de limpieza para un hogar reluciente"
              btnText="Shop now"
            />
          </div>
          <div className=" w-full h-[410px] relative  ">
            <Image
              className=" w-full h-full object-cover rounded-lg "
              src={sliderImgThree}
              alt="image1"
            />
            <BannerText
              className=" absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-neutral-800 "
              title="Walmart"
              description="Descuentos de todo tipo ahora en walmart, no te lo puedes perder. "
              btnText="Shop now"
            />
          </div>
          <div className=" w-full h-[410px] relative  ">
            <Image
              className=" w-full h-full object-cover rounded-lg "
              src={sliderImgFour}
              alt="image1"
            />
            <BannerText
              className=" absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-neutral-800 "
              title="Fábricas de sueños"
              description="La postura en su descanso es lo principal para tener un buen sueño, acá están los mejores muebles de descanso."
              btnText="Shop now"
            />
          </div>
        </Slider>
      </div>
      <div className=" mb-3 w-1/3 rounded-lg flex p-3 flex-col justify-between    border-neutral-400 shadow-bannerShadow  ">
        <div className=" flex items-center justify-between ">
          <h2 className=" text-xl font-semibold text-neutral-800 ">
            Pick fast of the day
          </h2>
          <p className=" text-base text-neutral-600 underline underline-offset-2  ">
            View all
          </p>
        </div>
        <Image  className=" h-60 object-cover " src={bannerImg} alt="Banner Image" />
        <BottonPrimary btnText="Options" />
        <p className=" text-lg text-neutral-900 font-semibold " >Desde $199.90</p>
        <p className=" text-base -mt-1 " >Muebles confortables para el hogar</p>
      </div>
    </div>
  );
}

export default Banner;
