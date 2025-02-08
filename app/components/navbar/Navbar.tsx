import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="navbar fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-30 backdrop-blur-md shadow-lg border border-gray-200 rounded-lg mx-8 my-2 p-2">
            <ul className="navbar-menu flex justify-center space-x-8">
                <li><a href="#home" className="text-gray-700 hover:text-gray-900" style={{fontFamily: "Poppins, serif"}}>Home</a></li>
                <li><a href="#about" className="text-gray-700 hover:text-gray-900" style={{fontFamily: "Poppins, serif"}}>About</a></li>
                <li><a href="#x" className="text-gray-700 hover:text-gray-900" style={{fontFamily: "Poppins, serif"}}>X</a></li>
                <li><a href="https://github.com" className="text-gray-700 hover:text-gray-900" style={{fontFamily: "Poppins, serif"}}>Github</a></li>
            </ul>
        </div>
    );
}

export default Navbar;