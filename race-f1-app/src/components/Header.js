import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <img className="block h-12 w-auto rounded-lg lg:hidden" src="https://logowik.com/content/uploads/images/f1-formula-18381.jpg" alt="f1-logo" />
                    <img className="hidden h-12 w-auto rounded-lg lg:block" src="https://logowik.com/content/uploads/images/f1-formula-18381.jpg" alt="f1-logo" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Races</Link>
                        <Link to="/drivers" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Drivers</Link>
                        <Link to="/teams" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Teams</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Races</Link>
                <Link to="/drivers" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Drivers</Link>
                <Link to="/teams" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Teams</Link>
                </div>
            </div>
    </nav>
  )
}

export default Header