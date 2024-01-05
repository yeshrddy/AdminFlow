import React, { useState } from "react";
import useScroll from "../utils/useScroll";
import { Link } from "react-router-dom";
import useSelectedLayoutSegment from "./../utils/useSelectedLayoutSegment";
import { cn } from "../utils/utils";
import HeaderMobile from "./HeaderMobile";
import Logo from "../assets/logo.png";
import CategoryPills from "./CategoryPills";
import Cart from "../assets/cart.png";
import { ChevronDown, Mic, ShoppingBag } from "lucide-react";
import Search from "./Search";
import { Button } from "./Button";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div
      className={cn(
        `fixed inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 py-5 px-2 md:px-8`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex items-center px-4 lg:gap-10 gap-2 justify-between ">
        <div className="flex items-center mr-8">
          <Link
            to="/"
            className="flex flex-row space-x-3 items-center justify-center" //removed this md:hidden
          >
            <img src={Logo} alt="logo" className="h-7" />
            <span className="font-extrabold text-sm flex ">{`${"MO MARKET"}`}</span>
          </Link>
        </div>

        <Search />

        <div
          className={`flex-shrink-0 gap-2 lg:mx-0 mx-5 ${
            showFullWidthSearch ? "hidden" : "flex"
          }`}
        >
          {/* <Button
            size="icon"
            variant="ghost"
            className="md:hidden text-gray-500 -mr-2 "
            onClick={() => setShowFullWidthSearch(true)}
          >
            <Mic />
          </Button> */}
          <div className="flex items-center justify-center text-center">
            <div className="h-10 w-10 flex justify-center items-center flex-shrink-0">
              <img
                className="h-7 rounded-full object-cover "
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                alt=""
              />
            </div>
            <button className="items-center justify-center text-sm font-semibold text-gray-500 hidden md:flex">
              Jagannath
              <ChevronDown className="mt-1 h-4 w-4 font-bold text-customBlue" />
            </button>
            <div className="flex items-center justify-center text-center">
              <div className="h-10 w-10 flex justify-center items-center flex-shrink-0">
                <img className="h-6  object-cover " src={Cart} alt="Cart" />
              </div>
              <button className="items-center justify-center text-sm font-semibold text-gray-500 hidden md:flex">
                Cart
              </button>
            </div>
          </div>
        </div>
        <HeaderMobile />
      </div>
    </div>
  );
};

export default Header;
