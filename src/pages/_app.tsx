import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const open_Sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_Sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${open_Sans} font-sans `}>
      <Component {...pageProps} />
    </main>
  );
}
