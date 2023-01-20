import { Manrope } from "@next/font/google";
import Divider from "./components/icons/DividerSVG";
import DiceIcon from "./components/icons/DiceSVG";
import { useEffect, useState } from "react";

const manrope = Manrope({ weight: "800", subsets: ["latin"] });

export default function Home() {
  const [advice, setAdvice] = useState("");

  const getData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className={
        manrope.className +
        " grid h-screen items-center justify-center px-6 sm:px-0"
      }
    >
      <div className="relative flex flex-col items-center gap-6 rounded-lg bg-grayish-blue px-10 pt-10 pb-14 text-center sm:max-h-max sm:max-w-[50vw] md:max-w-[50vw] lg:max-w-[33vw]">
        <p className="text-sm uppercase text-neon-green">advice #177</p>
        <h1 className="text-lg text-white">&ldquo; {advice} &rdquo;</h1>
        <Divider fill="white" />
        <button
          onClick={getData}
          className="hover: absolute -bottom-7 rounded-full bg-neon-green p-4"
        >
          <DiceIcon />
        </button>
      </div>
    </div>
  );
}
