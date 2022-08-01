import React from 'react'
import './Sidebar.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Sidebar() {
    return (
        <div className="h-full shadow-md flex flex-col justify-around">
            <h1 className="logo flex justify-center text-white text-sm py-4 overflow-hidden ">PS</h1>
            <ul className="flex flex-col justify-center">
                <li className="">
                    <a className="flex justify-center py-4 h-12 overflow-hidden text-gray-400 text-ellipsis whitespace-nowrap rounded hover:text-white transition duration-300 ease-in-out" href="#!">Home</a>
                </li>
                <li className="">
                    <a className="flex justify-center py-4 h-12 overflow-hidden text-gray-400 text-ellipsis whitespace-nowrap rounded hover:text-white transition duration-300 ease-in-out" href="#!">About Me</a>
                </li>
                <li className="">
                    <a className="flex justify-center py-4 h-12 overflow-hidden text-gray-400 text-ellipsis whitespace-nowrap rounded hover:text-white transition duration-300 ease-in-out" href="#!">Skills</a>
                </li>
                <li className="">
                    <a className="flex justify-center py-4 h-12 overflow-hidden text-gray-400 text-ellipsis whitespace-nowrap rounded hover:text-white transition duration-300 ease-in-out" href="#!">Work Experience</a>
                </li>
                <li className="">
                    <a className="flex justify-center py-4 h-12 overflow-hidden text-gray-400 text-ellipsis whitespace-nowrap rounded hover:text-white transition duration-300 ease-in-out" href="#!">Education</a>
                </li>
                <li className="">
                    <a className="flex justify-center py-4 h-12 overflow-hidden text-gray-400 text-ellipsis whitespace-nowrap rounded hover:text-white transition duration-300 ease-in-out" href="#!">Projects</a>
                </li>
                <li className="">
                    <a className="flex justify-center py-4 h-12 overflow-hidden text-gray-400 text-ellipsis whitespace-nowrap rounded hover:text-white transition duration-300 ease-in-out" href="#!">Certifications</a>
                </li>
                <li className="">
                    <a className="flex justify-center py-4 h-12 overflow-hidden text-gray-400 text-ellipsis whitespace-nowrap rounded hover:text-white transition duration-300 ease-in-out" href="#!">Contact Me</a>
                </li>
            </ul>
            <div className="flex justify-evenly my-10">
                <FaLinkedin className="text-white text-xl" />
                <FaGithub className="text-white text-xl" />
                {/* <FaLinkedin className="text-white text-xl" /> */}
            </div>
        </div>
    )
}

export default Sidebar