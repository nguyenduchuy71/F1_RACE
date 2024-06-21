import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <div className="w-full bg-gray-800">
      <div className="flex flex-1 space-x-6 p-4 items-stretch">
        <Link
          to="/"
          className={`${location.pathname === "/" ? "bg-violet-600 rounded-lg" : ""}`}
        >
          <img
            className="hidden h-12 w-auto rounded-lg lg:block"
            src="https://logowik.com/content/uploads/images/f1-formula-18381.jpg"
            alt="f1-logo"
          />
        </Link>
        <Link
          to="/drivers"
          className={`${location.pathname === "/drivers" ? "bg-violet-600 rounded-lg" : ""}`}
        >
          <p className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-md font-medium">
            Drivers
          </p>
        </Link>
        <Link
          to="/teams"
          className={`${location.pathname === "/teams" ? "bg-violet-600 rounded-lg" : ""}`}
        >
          <p className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-md font-medium">
            Teams
          </p>
        </Link>
      </div>
    </div>
  );
}
