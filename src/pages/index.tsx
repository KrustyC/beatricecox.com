import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { BeatriceCoxLogoIconOrange } from "@/components/icons/BeatriceCoxLogo";

const Home: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head>
        <title>Beatrice Duguid Cox</title>
        <meta name="description" content="Product & Graphic Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar
        config={{
          burgerColor: "bg-primary",
          textColor: "fill-white",
          logoColor: "fill-primary",
        }}
      /> */}

      <div className="bg-[#FFB649] text-[#DF8D13] w-screen h-screen bg-white flex flex-col items-center justify-center">
        <BeatriceCoxLogoIconOrange />
        <h6 className="mt-8">Website under construction.</h6>
        <b>STAY TUNED!</b>
        {/* <GetInTouch /> */}
      </div>

      <div className="bg-[#FFB649] text-[#DF8D13] w-screen h-screen bg-white flex flex-col items-center justify-center">
        <BeatriceCoxLogoIconOrange />
        <h6 className="mt-8">Website under construction.</h6>
        <b>STAY TUNED!</b>
      </div>
    </div>
  );
};

export default Home;
