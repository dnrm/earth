import React, { useState, useEffect } from "react";

const Navbar = ({ visibility }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    return (
        <div
            className={`${
                isVisible ? "opacity-100" : "opacity-0"
            } fixed top-0 left-0 z-50 w-full bg-dark p-6 text-white font-bold shadow-2xl flex items-center justify-start gap-4 transition-all duration-200 ease-in-out`}
        >
            <div className="hamburger">
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
    );
};

export default Navbar;
