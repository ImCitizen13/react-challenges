import Head from "next/head";
import TrafficLight from "~/components/TrafficLight";
import CountryCityGame from "~/components/CountryCityGame";

export default function CCGame() {
  return (
    <>
      <div className="mapView flex flex-wrap justify-center">
        <div className="flex flex-wrap items-center gap-7">
          <CountryCityGame data={{ Germany: "Berlin", Azerbaijan: "Baku" }} />
        </div>
      </div>
    </>
  );
}
