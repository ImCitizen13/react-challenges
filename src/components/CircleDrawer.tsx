import { MouseEvent, useEffect, useState } from "react";
import styles from "./CircleDrawer.module.css";

type CirclePositionProps = {
  left: number;
  top: number;
};

export default function CircleDrawer() {
  const [circles, setCircles] = useState<CirclePositionProps[]>([]);
  const [popped, setPopped] = useState<CirclePositionProps[]>([]);

  const mouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    // console.log(e)
    const tmp = [...circles, { top: e.clientY - 5, left: e.clientX - 5 }];
    setCircles(tmp);
  };

  function redoCircle() {
    const tmp = [...circles]
    const poppedPoint = popped.pop()
    if (poppedPoint) {
      setCircles([...tmp, poppedPoint]);
    }
  }

  function undoCircle() {
    const tmp = [...circles];
    const poppedPoint = tmp.pop();
    if (poppedPoint) {
      setPopped([...popped, poppedPoint]);
      setCircles(tmp);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className={circles.length === 0 ? styles.disabled : ""}
        disabled={circles.length === 0}
        onClick={undoCircle}
      >
        Undo
      </button>
      <button
        className={popped.length === 0 ? styles.disabled : ""}
        disabled={popped.length === 0}
        onClick={redoCircle}
      >
        Redo
      </button>
      <div
        onClick={mouseMoveHandler}
        className="min-h-[90vh] min-w-[100vw] bg-white"
      >
        {circles.map((circle) => (
          <div
            key={circle.top}
            className={`${styles.circle}`}
            style={{ top: `${circle.top}px`, left: `${circle.left}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
