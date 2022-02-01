import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Tweet from "../components/Tweet";

import React from "react";
import Head from "next/head";

const Deforestation = () => {
    const [navShowing, setNavShowing] = useState(false);

    const toggleNavbar = () => {
        setNavShowing(!navShowing);
    };

    return (
        <div className="bg-dark">
            <Head>
                <title>Deforestation</title>
            </Head>
            <div className="bg-dark overflow-x-hidden border-b-2 border-gray-700">
                <Navbar toggleNavbar={toggleNavbar} withScroll={false} />
                {navShowing ? <Navigation toggleNavbar={toggleNavbar} /> : null}
                <div className="hero mt-20 p-8 py-16 bg-leaf wiggle">
                    <h1 className="text-4xl md:text-6xl font-space-grotesk text-white tracking-tighter font-bold w-full md:text-left text-center">
                        Deforestation
                    </h1>
                </div>
                <div className="body max-w-5xl mx-auto py-16 px-2">
                    <div className="relative h-64">
                        <Image
                            objectFit="cover"
                            src="/deforestation.jpg"
                            alt="Bottle in ocean"
                            layout="fill"
                        />
                    </div>
                    <h1 className="text-white text-4xl font-space-grotesk font-bold pb-2 pt-8">
                        What is deforestation and why is it so severe?
                    </h1>
                    <p className="text-white text-md font-space-grotesk">
                        As human development rises, deforestation does too.
                        Deforestation is the act of cutting down trees and
                        shrubs to make room for new growth. It can also be
                        explained as the purposeful clearing of forest land.
                    </p>
                    <br />
                    <h2 className="text-white text-2xl font-space-grotesk font-bold">
                        What is causing deforestation?
                    </h2>
                    <p className="text-white text-md font-space-grotesk">
                        Deforestation is fueled by agriculture and wood
                        extraction. Mining is another cause of deforestation,
                        since trees need to be removed in order to break the
                        soil. Climate change is also a big factor in
                        deforestation. Since the climate is hotter, wildfires
                        are more likely to occur and therefore burning more
                        trees.
                    </p>
                    <br />
                    <Tweet
                        quote={
                            '"Sadly, it\'s much easier to create a desert than to create a forest."'
                        }
                        author={"James Lovelock 🌱"}
                    />
                    <br />
                    <h2 className="text-white text-2xl font-space-grotesk font-bold">
                        Why is deforestation bad?
                    </h2>
                    <p className="text-white text-md font-space-grotesk">
                        Deforestation contributes to the loss of animal and
                        plant habitats. When a forest is cut down, animals are
                        displaced and if they don&apos; find another habitat,
                        they die. Another effect of deforestation is the
                        increase of greenhouse gases. Since trees produce
                        oxygen, cutting them down reduces the amount of oxygen
                        and increases the amount of carbon dioxide.
                    </p>
                    <br />
                    <div className="relative h-96">
                        <Image
                            objectFit="cover"
                            src="/deforestation-aerial.jpeg"
                            alt="Bottle in ocean"
                            layout="fill"
                        />
                    </div>
                    <br />
                    <h2 className="text-white text-2xl font-space-grotesk font-bold">
                        Who is taking action?
                    </h2>
                    <p className="text-white text-md font-space-grotesk">
                        Common solutions to deforestation include passing of
                        laws that state how much and which trees you can cut
                        down, reforestation, which is plating more trees, and
                        sustainable alternatives for tree based products.
                        Organisations such as{" "}
                        <a
                            href="https://teamtrees.org/"
                            className="text-teal-500"
                        >
                            TeamTrees
                        </a>{" "}
                        have taken action to plant millions of trees.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Deforestation;
