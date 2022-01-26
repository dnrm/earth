import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = ({ toggleNavbar, withScroll }) => {
    const [isVisible, setIsVisible] = useState(
        withScroll === true ? false : true
    );

    useEffect(() => {
        if (withScroll === true) {
            document.addEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        }
    }, [withScroll]);

    return (
        <div
            className={`${
                isVisible ? "visible" : "invisible"
            } fixed top-0 left-0 z-50 w-full bg-dark p-6 text-white font-bold shadow-2xl flex items-center justify-start gap-4 transition-all duration-200 ease-in-out`}
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
                <Link href="/">
                    <a>Learning to Earth &lt;3</a>
                </Link>
            </h1>
        </div>
    );
};

export default Navbar;
