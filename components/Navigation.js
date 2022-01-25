import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = ({ toggleNavbar }) => {
    return (
        <motion.div
            key="nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-screen h-screen bg-dark fixed block p-0 m-0 z-50"
        >
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
            <div className="links flex h-full justify-between items-start pt-20 md:pt-0 md:items-center p-8 topo mt-8">
                <ul onClick={toggleNavbar}>
                    <li className="font-bold underline text-5xl md:text-8xl text-white font-raleway w-full tracking-tighter">
                        <Link href="#">
                            <a>HOME</a>
                        </Link>
                    </li>
                    <li className="font-bold underline text-5xl md:text-8xl text-white font-raleway w-full tracking-tighter">
                        <Link href="/#learn">
                            <a>LEARN</a>
                        </Link>
                    </li>
                    <li className="font-bold underline text-5xl md:text-8xl text-white font-raleway w-full tracking-tighter">
                        <Link href="#learn">
                            <a>HOW TO HELP</a>
                        </Link>
                    </li>
                    <li className="font-bold underline text-5xl md:text-8xl text-white font-raleway w-full tracking-tighter">
                        <Link href="#learn">
                            <a>EXTRA RESOURCES</a>
                        </Link>
                    </li>
                </ul>
                <p className="text-gray-400 font-raleway absolute bottom-0 pb-8">
                    Developed by Daniel Medina
                </p>
                <div className="image w-80 h-5/6 relative md:block hidden">
                    <Image
                        src="/forest.jpeg"
                        alt="forest"
                        layout="fill"
                        objectFit="cover"
                        className="relative"
                        placeholder="blur"
                        blurDataURL="/forest-small.jpeg"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Navigation;
