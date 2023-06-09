import { Inter } from "next/font/google";
import Head from "next/head";
import Banner from "../../components/Banner";
import { Product } from "../../type";
import Products from "../../components/Products";

// acá se obtiene la interface desde Products from '../../components/Products'
interface Props {
  productData: Product[];
}


export default function Home({ productData }: Props) {
  return (
    <>
      <Head>
        <title>Quantum Shop | Save Money </title>
        <meta
          name="Tienda para comprar tus mejores productos."
          content="Generated by create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className=" max-w-contentContainer mx-auto  bg-[#fff] ">
          <Banner />
          {/* acá se le pasa los datos de la api al majnejador de la data, para manejarla, Products se maneja desde otro archivo */}
          <Products productData={productData} />
        </div>
        
      </main>
    </>
  );
}

// ======================== SSR data fetching start here======================== //
export const getServerSideProps = async () => {
  // const response = await fetch("http://localhost:3000//api/productdata");
  const response = await fetch("https://primer-ecomerce.vercel.app/api/productdata");
  const productData = await response.json();
  return {
    props: {
      productData,
    },
  };
};
