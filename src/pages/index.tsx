import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mapView flex flex-wrap justify-center bg-[#9DF3C4]">
        <div className="flex flex-wrap items-center gap-7">
          {/* <Link className="challenge" href={"/trafficlight"}><Image></Image><Traffic Light Challenge</Link>
          <Link className="challenge" href={"/challenge"}><Image></Image><City Capital Challenge</Link>*/}
          <Link
            className="challenge"
            href={"/whackamole"}
          >
            <Image
              src={"/whackamole.png"}
              height={350}
              width={400}
              alt="Whack A Mole"
            />
            <h1>Whack A Mole</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
