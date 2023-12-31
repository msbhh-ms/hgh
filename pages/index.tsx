import Head from "next/head";
import { Inter } from "next/font/google";
import HomePage from "@/components/Home/Home";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Afrilangues</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${inter.className} w-100 h-100`}
        style={{ minHeight: "100vh" }}
      >
        <HomePage />
      </main>
    </>
  );
}
