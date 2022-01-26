import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Tweet from "../components/Tweet";
import { motion } from "framer-motion";

import React from "react";

const Pollution = () => {
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
                        Oceanic Pollution
                    </h1>
                </div>
                <div className="body max-w-5xl mx-auto py-16">
                    <div className="relative h-64">
                        <Image
                            objectFit="cover"
                            src="/pollution.jpeg"
                            alt="Bottle in ocean"
                            layout="fill"
                        />
                    </div>
                    <h1 className="text-white text-4xl font-space-grotesk font-bold pb-2 pt-8">
                        The Mass Amounts of Pollution in the Ocean and Its
                        Causes
                    </h1>
                    <p className="text-white text-md font-space-grotesk">
                        It is no doubt that the amount of trash in the ocean is
                        growing at an alarming rate. It is estimated that there
                        are about 5.25 trillion pieces of plastic in the oceans
                        as of 2021.
                    </p>
                    <br />
                    <h2 className="text-white text-2xl font-space-grotesk font-bold">
                        Why is there so much plastic?
                    </h2>
                    <p className="text-white text-md font-space-grotesk">
                        What is causing this much trash to be dumped in the
                        ocean? The most common ways plastic and trash end up in
                        the ocean are by people littering, not recycling, and
                        products that go down the drain.
                    </p>
                    <br />
                    <Tweet
                        quote={'"No water, no life. No blue, no green."'}
                        author={"Sylvia Earle 🌱"}
                    />
                    <br />
                    <h2 className="text-white text-2xl font-space-grotesk font-bold">
                        Why is this bad?
                    </h2>
                    <p className="text-white text-md font-space-grotesk">
                        Trash in the ocean is a very severe issue because it is
                        toxic to wildlife and even humans. In the case of
                        plastics, they can make their way up the food chain in
                        the form of microplastics. The consumption of these
                        microplastics can result in cancer or birth defects.
                    </p>
                    <br />
                    <div className="relative h-80">
                        <Image
                            objectFit="cover"
                            src="/ocean-wildlife.jpeg"
                            alt="Bottle in ocean"
                            layout="fill"
                        />
                    </div>
                    <br />
                    <h2 className="text-white text-2xl font-space-grotesk font-bold">
                        Other Consequences
                    </h2>
                    <p className="text-white text-md font-space-grotesk">
                        Another consequence that comes from oceanic pollution is
                        that beaches are now being filled by trash and their
                        beauty being destroyed. Many people have taken action to
                        clean up the beaches and reduce the amount of trash in
                        the ocean such as{" "}
                        <a
                            href="https://teamseas.org/"
                            className="text-teal-500"
                        >
                            TeamSeas
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://www.greenpeace.org/international/campaign/ocean-declaration/"
                            className="text-teal-500"
                        >
                            . Greenpeace
                        </a>
                    </p>
                    <br />
                    <div className="relative h-96">
                        <Image
                            objectFit="cover"
                            src="/beach-trash.jpeg"
                            alt="Bottle in ocean"
                            layout="fill"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default Pollution;
