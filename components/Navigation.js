import React from "react";
import Link from "next/link";

const Navigation = ({ toggleNavbar }) => {
    return (
        <div className="w-screen h-screen bg-dark fixed block p-0 m-0 z-50">
            <div
            className={`opacity-100 fixed top-0 left-0 z-50 w-full bg-dark p-6 text-white font-bold shadow-2xl flex items-center justify-start gap-4 transition-all duration-200 ease-in-out`}
        >
            <div className="hamburger" onClick={toggleNavbar}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
            <h1 className="text-white font-space-grotesk text-xl">
                Learning to Earth &lt;3
            </h1>
        </div>
            <div className="links flex h-full justify-start items-center p-8">
                <ul>
                    <li className="font-bold underline text-3xl md:text-8xl text-white font-raleway tracking-tighter">
                        <h1>
                            <Link href="#">
                                <a>HOME</a>
                            </Link>
                        </h1>
                    </li>
                    <li className="font-bold underline text-3xl md:text-8xl text-white font-raleway tracking-tighter">
                        <h1>
                            <Link href="#learn">
                                <a>LEARN</a>
                            </Link>
                        </h1>
                    </li>
                    <li className="font-bold underline text-3xl md:text-8xl text-white font-raleway tracking-tighter">
                        <Link href="#learn">
                            <a>HOW TO HELP</a>
                        </Link>
                    </li>
                    <li className="font-bold underline text-3xl md:text-8xl text-white font-raleway tracking-tighter">
                        <Link href="#learn">
                            <a>EXTRA RESOURCES</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
