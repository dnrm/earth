import React from "react";
import Card from "./Card";
import Image from "next/image";

const HowToHelp = () => {
    return (
        <div className="bg-dark pt-16 border-b-2 border-gray-600 pb-16 w-full" id="how-to-help">
            <div className="max-w-6xl px-4 mx-auto">
                <div className="flex items-center justify-between">
                    <h1 className="font-space-grotesk text-5xl font-bold text-white">
                        How to Help
                    </h1>
                    <h1 className="font-space-grotesk text-5xl font-bold text-white">
                        🌳
                    </h1>
                </div>

                <div className="learn-cards flex flex-col md:grid md:grid-cols-2 mt-16 gap-4">
                    <div className="youtube overflow-hidden p-4 bg-leaf wiggle flex flex-col gap-4 justify-start items-center">
                        <div className="relative overflow-hidden">
                            <iframe
                                width="520"
                                height="350"
                                src="https://www.youtube.com/embed/nLB8A--QdHc"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="bg-white p-2 w-full font-space-grotesk text-2xl font-bold">
                            3 Ways to save water
                        </p>
                    </div>
                    <div className="youtube overflow-hidden p-4 bg-leaf wiggle flex flex-col gap-4 justify-start items-center">
                        <div className="relative overflow-hidden">
                            <iframe
                                width="520"
                                height="320"
                                src="https://www.youtube.com/embed/mT4Qbp89nIQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="bg-white p-2 w-full font-space-grotesk text-2xl font-bold">
                            What YOU can do about climate change
                        </p>
                    </div>
                    <div className="youtube overflow-hidden p-4 bg-leaf wiggle flex flex-col gap-4 justify-start items-center">
                        <div className="relative overflow-hidden">
                            <iframe
                                width="520"
                                height="350"
                                src="https://www.youtube.com/embed/rcjzfgKYllE"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="bg-white p-2 w-full font-space-grotesk text-2xl font-bold">
                            50 things to save the planet.
                        </p>
                    </div>
                    <div className="youtube overflow-hidden p-4 bg-leaf wiggle flex flex-col gap-4 justify-start items-center">
                        <h1 className="bg-white p-2 w-full font-space-grotesk text-3xl font-bold">
                            Support organisations that&apos;ll do the hard work
                            for you.
                        </h1>
                        <p className="bg-white p-2 w-full font-space-grotesk">
                            Organisations in this list require donations that
                            will then do the hard work of planting trees,
                            cleaning trash, etc.
                        </p>
                        <div className="links md:grid grid-cols-1 md:grid-cols-2 h-full w-full max-h-96 hidden">
                            <div className="relative teamtrees bg-white w-full">
                                <Image
                                    src="/team-seas.png"
                                    alt="Team Trees"
                                    layout="responsive"
                                    objectFit="cover"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="relative teamseas bg-white w-full">
                                <Image
                                    src="/team-trees.jpeg"
                                    alt="Team Trees"
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="help-deforestation bg-leaf col-span-2 p-4 flex flex-col md:flex-row gap-4">
                        <div className="col1">
                            <h1 className="bg-white font-bold font-space-grotesk p-2 text-2xl">
                                What can you do against deforestation?
                            </h1>
                            <p className="bg-white font-space-grotesk p-2">
                                Some solutions to deforestation include:
                            </p>
                            <ul className="list-disc list-inside text-black font-raleway bg-white p-2">
                                <li>
                                    Making companies introduce zero
                                    deforestation policies
                                </li>
                                <li>
                                    Promoting sustainable alternatives to
                                    products
                                </li>
                                <li>Passing laws that protect forests</li>
                            </ul>
                        </div>
                        <div className="col2 w-full h-48 md:h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    objectFit="cover"
                                    src="/deforestation.jpeg"
                                    alt="deforestation"
                                    layout="fill"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="youtube overflow-hidden p-4 bg-leaf wiggle flex flex-col gap-4 justify-center items-center">
                        <p className="bg-white p-2 w-full font-space-grotesk text-2xl font-bold">
                            What actions can you take to reduce air pollution?
                        </p>
                        <p className="bg-white p-2 w-full font-space-grotesk">
                            Actions you can take to reduce air pollution include
                            turning off devices when you&apos;re not using them,
                            buying devices with low energy consumption, use
                            public transportation and/or bikes, scooters, use
                            environmentally friendly paints and cleaning
                            products, and make.
                        </p>
                        <p className="bg-white p-2 w-full font-space-grotesk grow">
                            You also have to be extra careful when there is a
                            lot of pollution in the air. When it&apos;s
                            forecasted to be really contaminated, take public
                            transportation, reduce the use of fireplaces and
                            stoves, reduce your car usage, walk instead of
                            driving. If we all do these steps we will have a
                            cleaner earth. :)
                        </p>
                    </div>
                    <div className="youtube overflow-hidden p-4 bg-leaf wiggle flex flex-col gap-4 justify-start items-center">
                        <div className="relative overflow-hidden">
                            <iframe
                                width="520"
                                height="350"
                                src="https://www.youtube.com/embed/RSgXcFdHxFI"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="bg-white p-2 w-full font-space-grotesk text-2xl font-bold">
                            What YOU can do about climate change
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToHelp;
