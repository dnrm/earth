import React from "react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="bg-dark max-w-6xl px-4 mx-auto p-16 flex justify-between items-center">
            <div className="texts">
                <h1 className="font-bold font-space-grotesk text-white tracking-tighter text-6xl">
                    Learning to Earth
                </h1>
                <p className="text-gray-500 font-space-grotesk tracking-tighter text-xl">
                    © Daniel Medina 2022
                </p>
            </div>
            <div className="button">
                <div
                    className="to-top text-white bg-dark-accent cursor-pointer p-4 rounded-2xl animate-bounce flex justify-center items-center"
                    onClick={scrollToTop}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </div>
                <p className="text-white font-space-grotesk tracking-tighter text-xl">
                    Scroll to top
                </p>
            </div>
        </div>
    );
};

export default Footer;
