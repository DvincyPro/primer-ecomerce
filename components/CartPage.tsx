import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  emptyCart,
  phoneImg,
  ship1Img,
  ship2Img,
  ship3Img,
  warningImg,
} from "../public/assets/images";
import { TbReload } from "react-icons/tb";
import { HiMinusSmall } from "react-icons/hi2";
import { MdOutlineAdd } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { StoreProduct } from "../type";
import FormatPrice from "./FormatPrice";
import {
  deleteItem,
  minusQuantity,
  resetCart,
  plusQuantity,
} from "../redux/shopperSlice";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";


const stripePromise = loadStripe(String(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY));

const CartPage = () => {
  ////////////////////////////////////////////////////////
  // acá es el para el usuario y contraseña
  const { data: session } = useSession();
  // acá es para empezar a hacer el stripe
  
  const handleCheckout = async() => {
    const stripe = await stripePromise;

    // create cheackout sesion 
    const cheackoutSession = await axios.post("api/create-cheackout-session",{
      items:productData,
      email: session?.user?.email
    })
    // redireccionar al usuario para el chechout con stripe
    const result:any = await stripe?.redirectToCheckout({
      sessionId: cheackoutSession.data.id,
    })
    if(result?.error) alert(result?.error.message)
  }
  
  ////////////////////////////////////////////////////
  const userInfo = useSelector((state: any) => state.shopper.userInfo);
  // este es el dispatch
  const dispatch = useDispatch();

  // esto es todo la funcion del carrito
  const productData = useSelector((state: any) => state.shopper.productData);
/////////////////////////////////////////////////////////////
  // price
  const [totalOldPrice, setTotalOldPrice] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);
/////////////////////////////////////////////////////////
  // warnig message
  const [warnigMsg, setwarnigMsg] = useState(false);
  // acá se maneja el total de los productos y el warning message
  useEffect(() => {
    setwarnigMsg(true);
    let oldPrice = 0;
    let savings = 0;
    let amt = 0;
    productData.map((item: StoreProduct) => {
      oldPrice += item.oldPrice * item.quantity;
      savings += item.oldPrice - item.price;
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
    setTotalOldPrice(oldPrice);
    setTotalSavings(savings);
  }, [productData]);

  return (
    <div className=" w-full py-10 bg-[#fff] ">
      <div className=" w-full flex gap-10 ">
        {/* acá hacemos 2 boxs derecha e izquierda, este es el de la izquierda */}
        <div className=" w-2/3 flex flex-col gap-5">
          {/* acá le damos inicio al box de la izquierda con la cantidad de cosas que hay en el carrito */}
          <h1>
            Cart{" "}
            <span className=" text-ligthText font-normal ">
              ({productData.length} items )
            </span>{" "}
          </h1>
          {/* detalles e la entrega acá se da inicio al de la izquierda */}
          <div>
            <div>
              <Image className="w-10" src={phoneImg} alt="Phone Image" />
              <p>Recogida y opciones de entrega</p>
            </div>
            {/* acá son las 3 cards con opciones que tenemos para dar las entregas */}
            <div className=" w-full grid grid-cols-3 gap-4 text-xs ">
              <div className=" w-full border border-neutral-500 rounded-md flex flex-col items-center justify-center gap-1 p-2 ">
                <Image src={ship1Img} alt="ship1Img" className="w-10" />
                <p className="font-bold">Recogida</p>
                <p>Todos los objetos disponibles</p>
              </div>
              <div className=" w-full border border-neutral-500 rounded-md flex flex-col items-center justify-center gap-1 p-2 ">
                <Image src={ship2Img} alt="ship2Img" className="w-10" />
                <p className="font-bold">Recogida</p>
                <p>Todos los objetos disponibles</p>
              </div>
              <div className=" w-full border border-neutral-500 rounded-md flex flex-col items-center justify-center gap-1 p-2 ">
                <Image src={ship3Img} alt="ship3Img" className="w-10" />
                <p className="font-bold">Recogida</p>
                <p>Todos los objetos disponibles</p>
              </div>
            </div>
            {/* Productos del carro */}
            <div className=" w-full p-5 border-[1px] border-neutral-600 rounded-md flex flex-col gap-4 ">
              <p className=" font-semibold text-sm text-neutral-600 ">
                Vendido y entregado por{" "}
                <span className=" text-[green] ">Quantum Sales</span>.
              </p>
              <div className="flex gap-2">
                <button className="boton-red">Best Seller</button>
                <button className=" ml-2 boton-blue">Rollback</button>
              </div>
              {/* items de la compra */}
              <div>
                {productData.map((item: StoreProduct) => (
                  <div
                    key={item._id}
                    className=" flex items-center justify-between gap-4 border-b-[1px] border-b-ligthText pb-4 "
                  >
                    {/* acá empieza la parte de arriba de la card */}
                    <div className="w-3/4 flex items-center gap-2">
                      <Image
                        src={item.image}
                        width={500}
                        height={500}
                        alt="productImage"
                        className="w-32"
                      />
                      <div>
                        <h2 className=" text-base  underline text-neutral-600 ">
                          {item.title}
                        </h2>
                        <p className=" text-sm text-neutral-600  ">
                          {item.description}
                        </p>
                        <p className=" text-sm text-neutral-600  flex items-center gap-1">
                          <span className=" bg-blue rounded-full text-[#fff] text-xs w-4 h-4 flex items-center justify-center ">
                            {" "}
                            <TbReload className="rotate-180" />{" "}
                          </span>{" "}
                          Free 30 days returns
                        </p>
                        {/* botones para agregar o quitar objetos */}
                        <div className=" flex gap-6 items center mt-2 ">
                          <div onClick={() => dispatch(deleteItem(item._id))}>
                            <button className=" text-sm underline underline-offset-2 decoration-[1px] text-neutral-600 hover:no-underline hover:text-[blue] duration-300 ">
                              Remove
                            </button>
                          </div>
                          <div className=" w-28 h-9 border border-neutral-600 rounded-full text-base font-semibold text-[#000] flex items-center justify-between px-3 ">
                            <button
                              onClick={() =>
                                dispatch(
                                  minusQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    description: item.description,
                                    image: item.image,
                                    price: item.price,
                                    oldPrice: item.oldPrice,
                                    quantity: 1,
                                    brand: item.brand,
                                    category: item.category,
                                  })
                                )
                              }
                              className=" text-base w-5 h-5 text-neutral-600 hover:bg-[#74767c] hover:text-[#fff] rounded-full flex items-center "
                            >
                              <HiMinusSmall />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                dispatch(
                                  plusQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    description: item.description,
                                    image: item.image,
                                    price: item.price,
                                    oldPrice: item.oldPrice,
                                    quantity: 1,
                                    brand: item.brand,
                                    category: item.category,
                                  })
                                )
                              }
                              className=" text-base w-5 h-5 text-neutral-600 hover:bg-[#74767c] hover:text-[#fff] rounded-full flex items-center "
                            >
                              <MdOutlineAdd />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* acá es la configuracion de los botonos y demás de la card */}
                    <div className=" w-1/4 text-right flex flex-col items-end gap-1  ">
                      <p className=" font-semibold text-xl text-[#2a8703]">
                        <FormatPrice amount={item.price * item.quantity} />
                      </p>
                      <p className=" text-sm line-through ">
                        <FormatPrice amount={item.oldPrice * item.quantity} />
                      </p>
                      <div className=" flex items-center text-xs gap-2 ">
                        <p className=" bg-[#00FF80] text-[#000] font-bold text-[8px] uppercase px-2 py-[1px] ">
                          AHORRAS
                        </p>
                        <p className=" text-[#2a8703] font-semibold ">
                          <FormatPrice
                            amount={
                              item.oldPrice * item.quantity -
                              item.price * item.quantity
                            }
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* acá esta el boton de resetear el carro */}
              <button
                onClick={() => dispatch(resetCart())}
                className=" w-44 bg-[#FE2E2E] text-[#fff] h-10 rounded-full text-base font-semibold hover:bg-[#f57373] duration-300 "
              >
                Reset Cart
              </button>
            </div>
          </div>
        </div>
        {/* acá empieza el box de la derecha */}
        <div className=" w-1/3 p-4 mt-24 h-[500px] border-[1px] border-neutral-600 rounded-md flex flex-col justify-center gap-4 ">
          {/* esta es la parte de arriba del box de la derecha */}
          <div className=" w-full flex flex-col gap-4 border-b-[1px] border-b-neutral-600 pb-4 ">
            {/* boton para empezar el checking */}
            {session ? (
              <button onClick={handleCheckout} className=" bg-blue hover:bg-hoverBg w-full text-[#fff] h-10 rounded-full font-semibold duration-300 ">
                Continuar al Checkout
              </button>
            ) : (
              <button className=" bg-blue bg-opacity-50 cursor-not-allowed w-full text-[#fff] h-10 rounded-full font-semibold duration-300 ">
                Continuar al Checkout
              </button>
            )}
            {/* este mensaje solo estará disponible si no se han logueado */}
            {!session && (
              <p className=" text-sm text-center text-[#FE2E2E] -mt-4 font-semibold ">
                Please sing in for Checkout{" "}
              </p>
            )}
            {/* mensaje de alerta */}
            {warnigMsg && (
              <div className=" bg-[#002d58] text-[#fff] p-2 rounded-lg flex items-center justify-between gap-4 ">
                <Image className="w-8" src={warningImg} alt="warningImage" />
                <p className=" text-sm ">
                  {" "}
                  The items in your cart have reducted prices. Check out now for
                  extra savings!!{" "}
                </p>
                <IoMdClose
                  onClick={() => setwarnigMsg(false)}
                  className=" text-3xl hover:text-[#FE2E2E] cursor-pointer duration-200 "
                />
              </div>
            )}
            <p className=" text-sm text-center ">
              For the best shopping experience,{" "}
              <span className=" underline underline-offset-2 decoration-[1px] ">
                Sing in
              </span>
            </p>
          </div>
          {/* chekout price */}
          <div className=" w-full flex flex-col gap-4 border-b-[1px] border-b-neutral-600 ">
            <div className=" flex flex-col gap-1 ">
              <div className=" text-sm flex justify-between ">
                <p className=" font-semibold ">
                  Subtotal <span>({productData.length} items)</span>
                </p>
                <p className=" line-through text-base ">
                  {" "}
                  <FormatPrice amount={totalOldPrice} />{" "}
                </p>
              </div>
              <div className=" text-sm flex justify-between ">
                <p className=" font-semibold "> AHORRAS</p>
                <p className=" text-[#2a8703] font-bold bg-[#b8f89df4] py-1 px-[2px] rounded-lg flex ">
                  <FormatPrice amount={totalSavings} />
                </p>
              </div>
              <div className=" text-sm flex justify-between ">
                <p className=" font-semibold "> Total a pagar</p>
                <p className=" font-normal text-base">
                  <FormatPrice amount={totalAmt} />
                </p>
              </div>
            </div>
          </div>
          {/* impuestos y cosas de la entrega */}
          <div className=" w-full flex flex-col gap-4 border-b-[1px] border-b-neutral-600 pb-4 ">
            <div className=" flex flex-col gap-1 ">
              <div className=" text-sm flex justify-between ">
                <p>Shipping</p>
                <p className=" text-[#2a8703] ">Free</p>
              </div>
              <div className=" text-sm flex justify-between ">
                <p className=" font-semibold ">Taxes</p>
                <p>Calculate at Checkout</p>
              </div>
            </div>
          </div>
          <div className=" items-center flex justify-between">
            <p>Total estimado</p>
            <p className=" text-[#000] font-bold text-lg ">
              <FormatPrice amount={totalAmt} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
