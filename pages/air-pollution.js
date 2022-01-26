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
                        Air Pollution
                    </h1>
                </div>
                <div className="body max-w-5xl mx-auto py-16">
                    <div className="relative h-64">
                        <Image
                            objectFit="cover"
                            src="/air-pollution.jpeg"
                            alt="Bottle in ocean"
                            layout="fill"
                        />
                    </div>
                    <h1 className="text-white text-4xl font-space-grotesk font-bold pb-2 pt-8">
                        How air pollution is affecting both the beauty of cities
                        and their health
                    </h1>
                    <p className="text-white text-md font-space-grotesk">
                        Air pollution is when particles of compounds are
                        released into the air. These particles are harmful to
                        any living organism, including humans. In the last
                        years, air pollution has become a major threat to the
                        human population. Cities such as Gurugram India, Mexico
                        City Mexico, Monterrey Mexico, etc. are already having
                        to implement preventive measures.
                    </p>
                    <br />
                    <h2 className="text-white text-2xl font-space-grotesk font-bold">
                        What is causing air pollution?
                    </h2>
                    <p className="text-white text-md font-space-grotesk">
                        Air pollution is caused by the release of harmful gases
                        in the air. These gases come from cars, factories,
                        trucks, and other emissions. Even aerosols release
                        harmful chemicals. Another really big cause for air
                        pollution is the burning of fossil fuels such as oil and
                        gasoline.
                    </p>
                    <br />
                    <Tweet
                        quote={
                            '"Sooner or later, we will have to recognise that the Earth has rights, too, to live without pollution. What mankind must know is that human beings cannot live without Mother Earth, but the planet can live without humans."'
                        }
                        author={"Evo Morales 🌱"}
                    />
                    <br />
                    <h2 className="text-white text-2xl font-space-grotesk font-bold">
                        Why is air pollution so bad?
                    </h2>
                    <p className="text-white text-md font-space-grotesk">
                        Air pollution is bad because of the harmful health
                        effects and environmental effects it produces. It can
                        prevent plants from performing photosynthesis. Air
                        pollution can lead to acid rain, which is covered in{" "}
                        <a href="/acid-rain" className="text-teal-500">
                            this article
                        </a>
                        . Humans can suffer from cardiovascular problems,
                        allergies, asthma attacks, conjunctivitis, bronchial
                        diseases, lung or skin cancers, vision problems, blood
                        problems and more health problems if exosed to
                        contaminated air.
                    </p>
                    <br />
                    <div className="relative h-96">
                        <Image
                            objectFit="cover"
                            src="/emissions.jpeg"
                            alt="Bottle in ocean"
                            layout="fill"
                        />
                    </div>
                    <br />
                    <h2 className="text-white text-2xl font-space-grotesk font-bold">
                        What is being done?
                    </h2>
                    <p className="text-white text-md font-space-grotesk">
                        Solutions to reduce emissions have been done such as
                        electic cars, wind powered turbines, solar panels, and
                        more. Electric cars have become more accessible to home
                        consumers. Tesla is the leading producer in electic cars
                        but manufacturers such as Porsche, BMW, Lucid Motors,
                        and more are starting to work on their own cars.
                    </p>
                    <p className="text-white text-md font-space-grotesk">
                        Regulations have also been put in place o regulate the
                        amount of emissions into the air.
                    </p>
                    <br />
                    <h2 className="text-white text-2xl font-space-grotesk font-bold">
                        Cities&apos; Appearances
                    </h2>
                    <p className="text-white text-md font-space-grotesk">
                        Cities&apos; appearances are suffering from air
                        pollution since the skies that used to be clear as glass
                        are now filled with smog. This makes cities look ugly
                        and unattractive to tourists.
                    </p>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default Deforestation;
