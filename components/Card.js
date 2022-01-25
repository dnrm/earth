import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Card = ({ img, title, body, href }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="bg-white w-full overflow-hidden flex flex-col justify-center items-start"
        >
            <div className="image h-64 w-full max-h-64 block">
                <div className="image relative w-full h-full">
                    <Image
                        layout="fill"
                        src={img}
                        objectFit="cover"
                        alt="Learn!"
                    />
                </div>
            </div>
            <div className="texts text-left">
                <h1 className="p-4 font-space-grotesk text-2xl font-bold underline">
                    <Link href={href}>
                        <a>{title}</a>
                    </Link>
                </h1>
                <p>{body}</p>
            </div>
        </motion.div>
    );
};

export default Card;
