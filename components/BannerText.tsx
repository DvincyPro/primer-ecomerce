import React from "react";


interface Props {
    title:string
    description:string
    btnText:string
    className:string
}


const BannerText = ({title, description,className, btnText}:Props) => {
  return (
    <div className={className}>
      <h1 className=" font-bold text-2xl "> {title}</h1>
      <p className=" text-sm leading-5 ">
        {" "}
        {description}
      </p>
      <button className=" bg-[#fff] text-sm text-[#000] font-semibold rounded-full w-24 h-8 border-[1px] border-[#000] ">
        {btnText}
      </button>
    </div>
  );
};

export default BannerText;
