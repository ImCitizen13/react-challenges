import { useEffect, useState } from "react";
import styles from "./WhackAMole.module.css";
import Image from "next/image";

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
      width: 169,
      height: 52,
      alt: type,
    };
  }
  return {
    src: `/whackamole/wam_${Math.floor(Math.random() * 2)}.png`,
    width: 170,
    height: 163,
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
      <h1 className="text-4xl text-[#158e48]">Score: {score}</h1>
      <div className="grid min-h-[480px] min-w-[686px] grid-cols-3 gap-14 bg-[#a5d5b0] p-8">
        {holes.map((hole, index) => {
          return (
            <button key={`${index}`} onClick={() => whackamole(hole, index)}>
              <Image {...getImageProps(hole)} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
