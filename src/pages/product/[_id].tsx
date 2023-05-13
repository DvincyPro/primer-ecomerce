import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Item } from "../../../type";
import { AiOutlineHeart } from "react-icons/ai";
import { BsInfoCircle, BsStarFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { ship1Img, ship2Img, ship3Img } from "../../../public/assets/images";

const ProductDatails = () => {
  const router = useRouter();
  const [product, setProduct] = useState<any>({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProduct(router.query);
    setLoading(false);
  }, [router.query]);

  return (
    <div className=" w-full bg-[#fff] ">
      {/* empieza el contenedor de la info de cada producto */}
      <div className=" max-w-contentContainer mx-auto items-center md:flex-col py-4 flex ">
        {/* parte derecha de la imagenes  */}
        <div className=" w-2/3 h-full flex items-center justify-center overflow-hidden relative ">
          <div className=" w-[80%] transform-origin-top-left cursor-move duration-500 ">
            {" "}
            <Image
              width={1000}
              height={200}
              alt="Object Image"
              src={product.image}
            />{" "}
          </div>
        </div>
        {/* parte izquierda con la descripción propia de cada uno */}
        <div className=" w-2/3 h-full  flex flex-col gap-2">
          {/* título arriba */}
          <h1 className="colorBlue"> 500+ boutgu yesterdays</h1>
          {/* descripción detallada */}
          <div className=" individual-card ">
            <div className=" flex justify-between ">
              <div>
                <button className="boton-red">Best Seller</button>
                <button className=" ml-2 boton-blue">Rollback</button>
              </div>
              <div className=" text-2xl">
                <AiOutlineHeart />
              </div>
            </div>
            <div className=" mt-2 underline ">{product.brand}</div>
            <h1 className=" text-2xl ">{product.title}</h1>
            <p>{product.description}</p>
            <div className=" flex gap-2 items-center text-sm mt-2 ">
              <div className=" flex text-sm gap-1 ">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <p>25</p>
              </div>
            </div>
            <div className=" flex gap-2 items-end ">
              <p className=" text-2xl text-verde">Now {product.price}</p>
              <p className=" text-[#606c76] flex  line-through decoration-[1px]   ">
                ${product.oldPrice}{" "}
                <span>
                  <BsInfoCircle />
                </span>
              </p>
            </div>
            {/* online info */}
            <div>
              <p className="   flex items-center gap-1 ">
                <span>$18/mo</span>
                <span className=" font-bold ">withAffirm</span>
                <span className=" underline underline-offset-2 ">
                  Learn how
                </span>
              </p>
              <p className=" text-xs flex items-center gap-1 ">
                Price when purchased online
                <span>
                  <BsInfoCircle />
                </span>
              </p>
            </div>
            {/* add to cart */}
            <div className=" border-b-[1px] pb-2 border-neutral-700 ">
              <button className=" w-44 h-9  bg-blue text-neutral-100 rounded-full gap-1 items-center justify-center hover:bg-[#004f9a] duration-300 flex">
                <span>
                  <GoPlus />
                </span>
                Add to cart
              </button>
            </div>
            {/* delivery options */}
            <p className=" text-base font-semibold ">
              {" "}
              How do you want you Items{" "}
            </p>
            <div className="single-grid-card">
              <div className="description-single-card ">
                <div className=" w-10 ">
                  {" "}
                  <Image src={ship1Img} alt="Sipping Image" />
                  <p>Shipping</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>
              </div>
              <div className="description-single-card">
                <div className=" w-10 ">
                  {" "}
                  <Image src={ship2Img} alt="Sipping Image" />
                  <p>Shipping</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>
              </div>
              <div className="description-single-card">
                <div className=" w-10 ">
                  {" "}
                  <Image src={ship3Img} alt="Sipping Image" />
                  <p>Shipping</p>
                  <p>Tomorrow</p>
                  <p>Free</p>
                </div>
              </div>
            </div>
          <p className=" font-bold text-xs " >
            Sacramento, 95829
            <span className=" font-normal underline underline-offset-2 ml-2 " >Change</span>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDatails;
