import { useEffect, useState } from "react";
import styles from "./WhackAMole.module.css";
import Image from "next/image";
import Link from "next/link";

type ImageType = "Hole" | "Mole";
type ImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
};
const WAMTIMEOUT = 1000;
function getImageProps(type: ImageType): ImageProps {
  if (type === "Hole") {
    return {
      src: "/whackamole/wam_hole.png",
      width: 112, //169
      height: 34, //52
      alt: type,
    };
  }
  return {
    src: `/whackamole/wam_${Math.floor(Math.random() * 2)}.png`,
    width: 112, //170,
    height: 34, //163,
    alt: type,
  };
}

export default function WhackAMole() {
  const [score, setScore] = useState<number>(0);
  const [holes, setHoles] = useState<ImageType[]>(new Array(9).fill("Hole"));

  function setMoleVisibility(index: number, show: boolean) {
    setHoles((currHoles) => {
      const newMoles = [...currHoles];
      newMoles[index] = show ? "Mole" : "Hole";
      return newMoles;
    });
  }

  const whackamole = (hole: string, index: number) => {
    if (hole === "Mole") {
      setScore(score + 1);
      setMoleVisibility(index, false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random() * 9);
      setMoleVisibility(rand, true);
      setTimeout(() => {
        setMoleVisibility(rand, false);
      }, 700);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [holes]);

  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-8">
      <h1 className="text-5xl text-[#158e48]">Score: {score}</h1>
      <div className="grid max-h-[380px] max-w-[586px] grid-cols-3 gap-6 bg-[#a5d5b0]">
        {holes.map((hole, index) => {
          return (
            <Image
              key={`${index}`}
              onClick={() => whackamole(hole, index)}
              {...getImageProps(hole)}
            />
          );
        })}
      </div>
      <footer className=" align-bottom pt-16 text-xl">
       Especial thanks to <Link href="https://dribbble.com/Jung_Hanna" className="text-[#158e48]">Hanna Jung</Link>
        where I got <Link href="https://dribbble.com/shots/1985081-Whack-a-mole-D" className="text-[#158e48]">these</Link> illustrations from 
      </footer>
    </div>
  );
}
