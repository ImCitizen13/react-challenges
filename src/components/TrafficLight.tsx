import { useEffect, useState } from "react";

type StopLightState = "stop" | "slow" | "go";
const STOP_DELAY = 3000;
const SLOW_DELAY = 2000;
const GO_DELAY = 5000;
export type TrafficLightProps = {
    initialState?: StopLightState
}

export default function TrafficLight({initialState}: TrafficLightProps) {
  const [trafficState, sertTrafficState] = useState<StopLightState>(initialState ?? "stop");
  function getStopLightClass(light: StopLightState){
    return light + " light " + (trafficState === light ? "on" : "")
  }

  useEffect(()=> {
    if(trafficState === 'stop'){
        setTimeout(() => sertTrafficState("go"), STOP_DELAY)
    } else if(trafficState === 'slow'){
        setTimeout(() => sertTrafficState("stop"), SLOW_DELAY)
    } else {
        setTimeout(() => sertTrafficState("slow"), GO_DELAY)
    }
  }, [trafficState])
  return (
    <div className="stopLight justify-center">
      <div
        className={getStopLightClass("stop")}
      ></div>
      <div
        className={getStopLightClass("slow")}
      ></div>
      <div className={getStopLightClass("go")}></div>
    </div>
  );
}
