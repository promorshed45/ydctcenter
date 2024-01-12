'use client'
import Link from 'next/link';
import { BiLogInCircle, BiMoon, BiSun } from 'react-icons/bi';
import { IoIosSearch } from "react-icons/io";
import logo from '@/assets/logo.png'
import Image from 'next/image';


const Navbar = () => {

  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/allapartment">Apartment</Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-10 w-full bg-slate-950 text-gray-300">
      <div className="w-full shadow-lg">
        <div className="navbar mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className=" btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-0 p-2 shadow bg-base-100 w-52"
              >
                {navLinks}
              </ul>
            </div>
            {/* <NameLogo /> */}
          </div>

          <div className="text-right navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">{navLinks}</ul>
          </div>

          {/* menu for large device */}
          <div className="navbar-end">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  title="Search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <IoIosSearch className="text-2xl focus:text-white text-slate-400" />
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-32 py-2 pl-10 pr-2 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900"
              />
            </div>

            <label className="swap swap-rotate hover:bg-slate-200 p-2 rounded-full">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* moon icon */}
              <BiMoon className="swap-on fill-current text-2xl text-sky-600" />

              {/* sun icon */}
              <BiSun className="swap-off fill-current text-2xl text-sky-600" />
            </label>

            <div className="flex items-center">
              <Link href="/">
                <button className="p-2 text-sky-600 hover:rounded-full hover:bg-slate-200 ">
                  <BiLogInCircle className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
