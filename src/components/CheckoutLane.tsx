import { CheckoutLaneProps, CheckoutQueueProps, Customer } from "./types";
import styles from "./CheckoutChallenge.module.css";
import CheckoutQueue from "./CheckoutQueue";

export default function CheckoutLane({ checkoutLaneQueue }: CheckoutLaneProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {checkoutLaneQueue.map((customerQueue, idx) => (
        <div key={Date.now()+idx} className="flex flex-col flex-wrap gap-6">
          <>
            <div className={`${styles.checkoutCounter}`}>{idx}</div>
            {customerQueue.length > 0 && (
              <CheckoutQueue customerQueue={customerQueue} />
            )}
          </>
        </div>
      ))}
    </div>
  );
}
