import React from "react";

const ExtraResources = () => {
    return (
        <div className="bg-leaf wiggle py-36" id="extra-resources">
            <div className="max-w-6xl px-4 mx-auto">
                <div className="heading-learn flex justify-between items-center mb-8">
                    <h1 className="font-space-grotesk text-5xl font-bold text-white">
                        Extra Resources
                    </h1>
                    <h1 className="font-space-grotesk text-5xl font-bold text-white">
                        🌱
                    </h1>
                </div>
                <div className="subtitle">
                    <h1 className="font-space-grotesk text-xl text-white">
                        Here are a number of extra resources to deepen your
                        research :)
                    </h1>
                </div>
                <div className="resources topo p-4 text-white font-space-grotesk mt-2">
                    <div className="container bg-white p-4 font-bold flex flex-col leading-loose">
                        <a
                            className="text-teal-800 underline"
                            href="https://plasticoceans.org/infographic-ocean-pollution-affects-humans/"
                        >
                            (Website) Infographic on oceanic pollution
                        </a>
                        <a
                            className="text-teal-800 underline"
                            href="https://scied.ucar.edu/learning-zone/air-quality/air-pollution-solutions"
                        >
                            (Website) Solutions to air pollution by the
                            University Corporation for Atmospheric Research
                        </a>
                        <a
                            className="text-teal-800 underline"
                            href="https://solarimpulse.com/air-pollution-solutions"
                        >
                            (Website) Article on solutions to air pollution by
                            Solarimpulse Foundation
                        </a>
                        <a
                            className="text-teal-800 underline"
                            href="https://actionaidrecycling.org.uk/solutions-to-deforestation/"
                        >
                            (Website) Article on solutions to deforestation by
                            the Action and Recycling Organisation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraResources;
