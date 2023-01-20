import { Manrope } from "@next/font/google";
import Image from "next/image";

const manrope = Manrope({ weight: "800", subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={
        manrope.className + " grid h-screen items-center justify-center"
      }
    >
      <div className="flex flex-col items-center rounded-lg bg-grayish-blue p-12 text-white sm:max-h-[50vh] sm:max-w-[50vw] md:max-h-[50vh] md:max-w-[50vw] lg:max-h-[33vh] lg:max-w-[33vw]">
        <p className="text-sm uppercase text-neon-green">advice #177</p>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          iure exercitationem soluta sapiente molestias error amet nostrum
          temporibus assumenda.
        </h1>
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <button>teste</button>
      </div>
    </div>
  );
}
