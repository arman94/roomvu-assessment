import Image from "next/image";
import Link from "next/link";

import { useAppSelector, useAppDispatch } from "../hooks";
import { toggleDarkMode } from "../store/features/theme/theme-slice";

import ToggleSwitch from "./ToggleSwitch";

export default function Header() {
  const { darkMode } = useAppSelector((state) => state.themeToggler);
  const dispatch = useAppDispatch();

  return (
    <div className="container mx-auto pt-12 px-[21px]">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl font-sans font-extrabold">Overreacted</h1>
        <ToggleSwitch checked={darkMode} onClick={(event) => dispatch(toggleDarkMode(!darkMode))} />
      </div>
      <div className="max-w-1/2 flex items-center justify-start font-serif text-base">
        <Image
          className="rounded-full"
          alt="overreact.io copy"
          src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
          width={56}
          height={56}
        />

        <p className="ml-3 max-w[310px] dark:text-white dark:text-opacity-80 font-normal">
          Personal blog by{" "}
          <Link href="https://mobile.twitter.com/dan_abramov">
            <a
              className="dark:text-darkPink text-pink hover:no-underline underline underline-offset-4 leading-7"
              target="_blank"
              rel="no-referrer no-opener">
              Dan Abramov
            </a>
          </Link>
          . <br />I explain with words and code.
        </p>
      </div>
    </div>
  );
}
