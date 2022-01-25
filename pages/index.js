import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
    const [navShowing, setNavShowing] = useState(false);

    const toggleNavbar = () => {
        setNavShowing(!navShowing);
    };

    return (
        <div className="bg-dark">
            {navShowing ? <Navigation toggleNavbar={toggleNavbar} /> : null}
            <Head>
                <title>Learning to Earth &lt;3</title>
            </Head>
            <AnimatePresence>
                <Navbar toggleNavbar={toggleNavbar} withScroll={true} />
            </AnimatePresence>
            <div className="top-information py-10 px-6 mx-auto text-white flex justify-between items-center">
                <p className="font-space-grotesk">
                    Developed by: Daniel Medina
                </p>
                <p className="font-space-grotesk">medina.dev</p>
            </div>
            <div className="bg-leaf hero mx-6 wiggle mb-0">
                <div className="top-layer flex justify-between items-start">
                    <div className="nav p-4 text-white font-bold underline tracking-tighter text-3xl flex flex-col font-raleway">
                        <Link href="/">
                            <a>HOME</a>
                        </Link>
                        <Link href="#learn">
                            <a>LEARN</a>
                        </Link>
                        <Link href="/">
                            <a>HOW TO HELP</a>
                        </Link>
                        <Link href="/">
                            <a>EXTRA RESOURCES</a>
                        </Link>
                    </div>
                </div>
                <div className="circle text-dark grid place-items-center max-w-96 md:-mt-36 md:-mb-28">
                    <div className="earth-photo absolute z-10 h-full w-1/2 md:w-1/4 animate-spin">
                        <Image
                            src="/earth.png"
                            layout="fill"
                            objectFit="contain"
                            alt="earth picture"
                        />
                    </div>
                    <div className="svg-blob h-full w-96 md:w-2/5">
                        <svg
                            viewBox="0 0 500 500"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100%"
                            id="blobSvg"
                        >
                            <path
                                id="blob"
                                d="M443,296.5Q395,343,371.5,403.5Q348,464,285,453.5Q222,443,190.5,399Q159,355,100,333Q41,311,33,247.5Q25,184,95.5,168.5Q166,153,194,105.5Q222,58,287,43Q352,28,365.5,97.5Q379,167,435,208.5Q491,250,443,296.5Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div className="bottom-text">
                    <div className="animate-pulse quote p-6 text-white tracking-tighter font-space-grotesk text-xl">
                        <p>“The Earth is what we all have in common.”</p>
                        <p>– Wendell Berry</p>
                    </div>
                </div>
            </div>
            <div
                id="learn"
                className="bg-dark flex justify-center items-center w-full py-8 text-white"
            >
                <a href="#learn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 animate-ping"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 17l-4 4m0 0l-4-4m4 4V3"
                        />
                    </svg>
                </a>
            </div>
            <div className="bg-leaf wiggle pt-36 pb-36">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="heading-learn flex justify-between items-center">
                        <h1 className="font-space-grotesk text-5xl font-bold text-white">
                            Learn
                        </h1>
                        <h1 className="font-space-grotesk text-5xl font-bold text-white">
                            🌱
                        </h1>
                    </div>
                    <div className="learn-content flex justify-between items-center font-space-grotesk text-2xl text-white pt-8">
                        <p>
                            Knowing to care about the environment is becoming
                            increasingly important since humans began to exploit
                            and make use of the Earth’s natural resources. Learn
                            about current environmental problems and their
                            causes by reading the information below!
                        </p>
                    </div>
                    <div className="learn-cards grid grid-cols-1 md:grid-cols-2 mt-16 gap-4">
                        <Card
                            img="/deforestation.jpeg"
                            href="/deforestation"
                            title={
                                "What is deforestation and why is it so severe?"
                            }
                        ></Card>
                        <Card
                            img="/pollution.jpeg"
                            href="/oceanic-pollution"
                            title={
                                "The mass amounts of pollution in the ocean and its causes"
                            }
                        ></Card>
                        <Card
                            img="/air-pollution.jpeg"
                            href="/air-pollution"
                            title={
                                "How air pollution is affecting both the beauty of cities and their health"
                            }
                        ></Card>
                        <Card
                            img="/global-warming.jpeg"
                            href="/global-warming"
                            title={
                                "Global warming is ending with our poles and polar bears, take action"
                            }
                        ></Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
