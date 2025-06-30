import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Dancing_Script, Lato, Roboto } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
       <div className={`${dancingScript.variable} ${lato.variable} ${roboto.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

