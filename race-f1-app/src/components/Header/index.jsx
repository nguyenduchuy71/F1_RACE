import React from "react";
import { useLocation } from "react-router-dom";
import HeaderItem from "../HeaderItem";

const HEADERS = [
  {
    imageUrl: "https://logowik.com/content/uploads/images/f1-formula-18381.jpg",
    path: "/",
  },
  {
    title: "Bikers",
    path: "/bikers",
  },
  {
    title: "Teams",
    path: "/teams",
  },
];

export default function Header() {
  const location = useLocation();
  return (
    <div className="w-full bg-gray-800">
      <div className="flex space-x-6 p-4">
        {HEADERS.map((header, index) => (
          <HeaderItem
            key={index}
            pathName={location.pathname}
            header={header}
          />
        ))}
      </div>
    </div>
  );
}
