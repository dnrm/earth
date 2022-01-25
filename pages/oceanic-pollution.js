import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";
import { useState } from "react";

import React from "react";

const Pollution = () => {
    const [navShowing, setNavShowing] = useState(false);

    const toggleNavbar = () => {
        setNavShowing(!navShowing);
    };

    return (
        <div className="bg-dark overflow-x-hidden">
            <Navbar toggleNavbar={toggleNavbar} withScroll={false} />
            {navShowing ? <Navigation toggleNavbar={toggleNavbar} /> : null}
            <div className="hero mt-20 p-8 py-16 bg-leaf wiggle">
                <h1 className="text-6xl font-space-grotesk text-white tracking-tighter font-bold w-full md:text-left text-center">
                    Oceanic Pollution
                </h1>
            </div>
            <div className="body max-w-6xl mx-auto py-16">
                <h1 className="text-white text-3xl font-space-grotesk font-bold py-2">
                    The Mass Amounts of Pollution in the Ocean and Its Causes
                </h1>
                <p className="text-white text-md font-space-grotesk">
                    It is no doubt that the amount of trash in the ocean is
                    growing at an alarming rate. It is estimated that there are
                    about 5.25 trillion pieces of plastic in the oceans as of
                    2021.
                </p>
                <p className="text-white text-md font-space-grotesk">
                    What is causing this much trash to be dumped in the ocean?
                    The most common ways plastic and trash end up in the ocean
                    are by people littering, not recycling, and products that go
                    down the drain.
                </p>
            </div>
        </div>
    );
};

export default Pollution;
