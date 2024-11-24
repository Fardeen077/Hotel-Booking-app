import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../Toggle/ThemeToggle";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-xl font-bold text-yellow-500 hover:text-yellow-300 cursor-pointer">
          Hotel.com
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Icon for mobile menu */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Nav Links for Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/benefit" className={({ isActive }) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"}>
              Benefit
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" className={({ isActive }) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"}>
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" className={({ isActive }) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"}>
              Profile
            </NavLink>
          </li>
        </ul>

        {/* Buttons and ModeToggle for Desktop */}
        <div className="hidden md:flex space-x-4">
          <Button className="bg-yellow-500 hover:bg-yellow-300">Login</Button>
          <Button className="bg-yellow-500 hover:bg-yellow-300">Signup</Button>
          <span className="text-yellow-400"> <ModeToggle /></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black p-4">
          <ul className="space-y-4">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/benefit" className={({ isActive }) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"}>
              Benefit
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" className={({ isActive }) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"}>
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" className={({ isActive }) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "text-yellow-400 underline" : "hover:text-yellow-300"}>
              Profile
            </NavLink>
          </li>
          </ul>

          {/* Mobile Buttons and ModeToggle */}
          <div className="flex flex-col space-y-4 mt-4">
            <Button className="bg-yellow-500 hover:bg-yellow-300">Login</Button>
            <Button className="bg-yellow-500 hover:bg-yellow-300">Signup</Button>
            <ModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
