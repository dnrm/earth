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
      <div className="hero mx-6 bg-leaf wiggle">
        <div className="top-layer flex justify-between items-start">
          <div className="nav p-4 text-white font-bold underline tracking-tighter text-xl flex flex-col font-raleway">
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
          <div className="quote p-6 text-white font-space-grotesk text-lg">
            <p>“The Earth is what we all have in common.”</p>
            <p>– Wendell Berry</p>
          </div>
        </div>
        <div className="circle absolute left-1/2 -ml-8 -mb-8">

        </div>
      </div>
    </div>
  );
}
