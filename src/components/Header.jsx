import { BellDot, ImageIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between item-center p-6">
      <nav className="flex justify-center">
          <div className="mx-4">
            <Link to="/" className="text-red-500 font-extrabold text-2xl">Buletin</Link>
          </div>
          <div className="text-2xl">|</div>
          <div className="sm:block md:hidden"></div>
          <ul className="md:flex md:list-unstyled md:items-center sm:hidden">
            <li className="px-5">
              <Link to="/stories" className="text-decoration-none font-semibold">Stories</Link>
            </li>
            <li className="px-5">
              <Link to="/creator" className="text-decoration-none font-semibold">Creator</Link>
            </li>
            <li className="px-5">
              <Link to="/community" className="text-decoration-none font-semibold">Community</Link>
            </li>
            <li className="px-5">
              <Link to="/subscribe" className="text-decoration-none font-semibold">Subscribe</Link>
            </li>
          </ul>
      </nav>
      <nav>
          <ul className="md:flex md:justify-center md:items-center sm:hidden">
            <li className="px-5">
               <a href="">Write</a> 
            </li>
            <li className="px-5">
               <BellDot color="black"/>
            </li>
            <li className="px-5">
               <ImageIcon color="black" className="rounded"/>
            </li>
          </ul>
      </nav>
    </header>
  );
}

export default Header;
