"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.png";
import percent_arrow from "../assets/images/percent_arrow.png";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  const navBarList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
  ];
  return (
    <div className="w-full h-[72px] bg-white border-b-[0.5px] border-b-gray-300 sticky top-0 z-50">
      <nav className="h-full max-w-[980px] mx-auto px-4  flex items-center justify-between gap-2">
        <div className="flex ">
          <Link href={"/"}>
            <Image src={logo} alt="logo" height={40} className=" mr-1" />
          </Link>
          <CgDetailsMore className="mr-1 md:mt-[10px] text-green-500 hover:cursor-pointer" />
          <h6 className="md:mt-[10px] text-green-500  hover:cursor-pointer">
            카테고리
          </h6>
        </div>
        <div className="relative w-full hidden lg:inline-flex lg:w-[335px] h-10 text-base text-gray-300 border-[1px] border-gray-300 hover:border-green-500 items-center gap-2 justify-between px-6 rounded">
          {searchQuery ? (
            <IoCloseOutline
              onClick={() => setSearchQuery("")}
              className="w-5 h-5 hover:text-green-500 duration-200 hover:cursor-pointer"
            />
          ) : (
            <CiSearch className="w-5 h-5 hover:cursor-pointer text-black" />
          )}
          <input
            type="text"
            placeholder="살까말까 고민된다면 검색해보세요!"
            className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-400"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>
        <div className="hidden md:inline-flex items-center gap-2">
          <Image src={percent_arrow} alt="logo" height={40} className="" />
          <h6>|</h6>
          <Link className="text-sm" href={"/"}>
            로그인 / 회원가입
          </Link>
        </div>
        <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer w-8 h-6" />
      </nav>
    </div>
  );
};

export default Navbar;
