import Head from "next/head";
import TrafficLight from "~/components/TrafficLight";
import CountryCityGame from "~/components/CountryCityGame";

export default function Home() {
  return (
    <>
      <Head>
        <title>Palestine illustrated</title>
        <meta
          name="description"
          content="This is a website that diplays historical information about palestine"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="mapView flex flex-wrap justify-center">
        <div className="flex flex-wrap items-center gap-7">
          <CountryCityGame data={{ Germany: "Berlin", Azerbaijan: "Baku" }} />
        </div>
      </div>
    </>
  );
}
