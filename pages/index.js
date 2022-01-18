import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-dark">
      <Head>
        <title>Learning to Earth &lt;3</title>
      </Head>
      <div className="top-information py-10 px-6 mx-auto text-white flex justify-between items-center">
        <p className="font-space-grotesk">Developed by: Daniel Medina</p>
        <p className="font-space-grotesk">medina.dev</p>
      </div>
      <div className="hero mx-6 bg-leaf wiggle h-screen">
        <div className="top-layer flex justify-between items-start">
          <div className="nav p-4 text-white font-bold underline tracking-tighter text-3xl flex flex-col font-raleway">
            <Link href="/">
              <a>HOME</a>
            </Link>
            <Link href="/">
              <a>LEARN</a>
            </Link>
            <Link href="/">
              <a>HOW TO HELP</a>
            </Link>
            <Link href="/">
              <a>EXTRA RESOURCES</a>
            </Link>
          </div>
          <div className="quote p-6 text-white tracking-tighter font-space-grotesk text-xl">
            <p>“The Earth is what we all have in common.”</p>
            <p>– Wendell Berry</p>
          </div>
        </div>
        <div className="circle text-dark grid place-items-center max-w-96 -mt-64 -mb-64">
          <div className="earth-photo absolute z-10 h-full w-1/4">
            <Image
              src="/earth.png"
              layout="fill"
              objectFit="contain"
              alt="earth picture"
            />
          </div>
          <div className="svg-blob h-full w-full">
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
          <div className="quote p-6 text-white tracking-tighter font-space-grotesk text-xl">
            <p>“The Earth is what we all have in common.”</p>
            <p>– Wendell Berry</p>
          </div>
        </div>
      </div>
    </div>
  );
}
