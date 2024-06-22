import React from "react";
import { Link } from "react-router-dom";

function HeaderItem({ pathName, header }) {
  return (
    <div className="flex items-center">
      <Link
        to={header.path}
        className={`${pathName === header.path ? "bg-violet-600 rounded-lg transition ease-linear delay-350" : ""}`}
      >
        {header.imageUrl ? (
          <img
            className="h-12 w-auto rounded-lg"
            src={header.imageUrl}
            alt="logo"
          />
        ) : (
          <p className="text-white rounded-md p-3.5 text-md font-medium">
            {header.title}
          </p>
        )}
      </Link>
    </div>
  );
}

export default HeaderItem;
