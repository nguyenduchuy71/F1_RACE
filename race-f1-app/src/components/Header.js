import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="block h-12 w-auto rounded-lg lg:hidden" src="https://logowik.com/content/uploads/images/f1-formula-18381.jpg" alt="f1-logo" />
                            <img className="hidden h-12 w-auto rounded-lg lg:block" src="https://logowik.com/content/uploads/images/f1-formula-18381.jpg" alt="f1-logo" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link to="/" className={`${location.pathname === '/' ? 'bg-violet-600 rounded-lg' : ''}`}>
                                    <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Races</p>
                                </Link>
                                <Link to="/drivers" className={`${location.pathname === '/drivers' ? 'bg-violet-600 rounded-lg' : ''}`}>
                                    <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Drivers</p>
                                </Link>                                
                                <Link to="/teams" className={`${location.pathname === '/teams' ? 'bg-violet-600 rounded-lg' : ''}`}>
                                    <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Teams</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link to="/" className={`${location.pathname === '/' ? 'bg-violet-600 rounded-lg' : ''}`}>
                            <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Races</p>
                        </Link>
                        <Link to="/drivers" className={`${location.pathname === '/drivers' ? 'bg-violet-600 rounded-lg' : ''}`}>
                            <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Drivers</p>
                        </Link>                                
                        <Link to="/teams" className={`${location.pathname === '/teams' ? 'bg-violet-600 rounded-lg' : ''}`}>
                            <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Teams</p>
                        </Link>
                    </div>
                </div>
        </nav>
    )
}

export default Header