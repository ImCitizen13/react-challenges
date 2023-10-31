import styles from "./CheckoutChallenge.module.css";
import { CheckoutQueueProps, Customer } from "./types";

export default function CheckoutQueue({
  customerQueue
}: CheckoutQueueProps) {
  return (
    <>
      {customerQueue.map((customer: Customer) =>
        (
          <div key={Date.now()+customer.id+customer.items} className={`${styles.checkout}`}>
            {customer.items}
          </div>
        )
      )}
    </>
  );
}
