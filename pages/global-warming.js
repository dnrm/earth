import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Tweet from "../components/Tweet";

import React from "react";
import { motion } from "framer-motion";

const Deforestation = () => {
    const [navShowing, setNavShowing] = useState(false);

    const toggleNavbar = () => {
        setNavShowing(!navShowing);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, type: "tween" }}
            className="bg-dark"
        >
            <div className="bg-dark overflow-x-hidden border-b-2 border-gray-700">
                <Navbar toggleNavbar={toggleNavbar} withScroll={false} />
                {navShowing ? <Navigation toggleNavbar={toggleNavbar} /> : null}
                <div className="hero mt-20 p-8 py-16 bg-leaf wiggle">
                    <h1 className="text-6xl font-space-grotesk text-white tracking-tighter font-bold w-full md:text-left text-center">
                        Global Warming
                    </h1>
                </div>
                <div className="body max-w-5xl mx-auto py-16">
                    <div className="relative h-64">
                        <Image
                            objectFit="cover"
                            src="/global-warming.jpeg"
                            alt="Bottle in ocean"
                            layout="fill"
                        />
                    </div>
                    <h1 className="text-white text-4xl font-space-grotesk font-bold pb-2 pt-8">
                        Global warming is ending with our poles and polar bears,
                        take action
                    </h1>
                    <p className="text-white text-md font-space-grotesk">
                        As consequence of human activity, the earth&apos;s
                        climate has been on the rise. Hotter temperatures mean
                        the arctic is getting warmer and melting. This affects
                        polar bears since they live in glaciers.
                    </p>
                    <br />
                    <h2 className="text-white text-2xl font-space-grotesk font-bold">
                        What is causing global warming?
                    </h2>
                    <p className="text-white text-md font-space-grotesk">
                        Global warming is caused by these factors:
                    </p>
                    <ul className="text-white text-md font-space-grotesk list-disc list-inside">
                        <li>
                            Carbon dioxide released into the atmosphere absorbs
                            sunlight.
                        </li>
                        <li>Fossil fuel burning.</li>
                        <li>Deforestation</li>
                        <li>Industrial activity</li>
                    </ul>
                    <br />
                    <Tweet
                        quote={
                            '“Climate change is the greatest threat to our existence in our short history on this planet. Nobody’s going to buy their way out of its effects."'
                        }
                        author={"Mark Ruffalo 🌱"}
                    />
                    <br />
                    <h2 className="text-white text-2xl font-space-grotesk font-bold">
                        Why is climate change bad for polar bears and the
                        arctic?
                    </h2>
                    <p className="text-white text-md font-space-grotesk">
                        Global warming is bad to polar bears and the poles
                        because in causes glaciers to melt and polar bears to
                        lose their habitats. Polar bears need cold climates to
                        survive, and global warming is taking this from them.
                    </p>
                    <br />
                    <div className="relative h-96">
                        <Image
                            objectFit="cover"
                            objectPosition={"top"}
                            src="/polar-bear.jpeg"
                            alt="Bottle in ocean"
                            layout="fill"
                            title="hi hasdjfajhsdfjh"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default Deforestation;
