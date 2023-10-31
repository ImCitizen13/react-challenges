import { ChangeEvent, useEffect, useState } from "react";
import { cursorTo } from "readline";
import styles from "./CheckoutChallenge.module.css";
import CheckoutQueue from "./CheckoutLane";
import { CheckoutLane, Customer, LaneWeights } from "./types";

export default function CheckoutChallenge() {
  const colors = {
    primary: "#ffffff",
    secondary: "#000000",
    accent: "#8c9e6e",
  };
  const [itemsToCheckout, setItemsToCheckout] = useState<number>(1);
  const [checkoutLanes, setCheckoutLanes] = useState<Customer[][]>([
    [],
    [],
    [],
    [],
    [],
  ]);

  const getQueueSum = (array: Customer[]) => {
    return array.reduce((a, c) => {
      return a + c.items;
    }, 0);
  };

  const getPoolWeights = (): LaneWeights[] => {
    return checkoutLanes
      .map((lane, index) => {
        return { idx: index, weight: getQueueSum(lane) };
      })
      .sort((a, b) => a.weight - b.weight);
  };

  const addToPool = (customer: Customer) => {
    const poolWeights = getPoolWeights();
    // [{idx: 5, weight: 0}]
    if (poolWeights.length > 0 && poolWeights[0]) {
      const tmp = [...checkoutLanes];
      // Add Customer to the lowest weighted queue

      tmp[poolWeights[0].idx]?.push(customer);
      setCheckoutLanes(tmp);
    }
  };

  const handleClick = () => {
    if (itemsToCheckout > 0) {
      addToPool({ id: Date.now().toString(), items: itemsToCheckout });
    }
  };

  // const hasCustomers()

  useEffect(() => {
    const interval = setInterval(() => {
      clearItems();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const clearItems = () => {
    const tmp = [...checkoutLanes];
    tmp.forEach((customers) => {
      if (customers[0]) {
        customers[0].items--;
        if (customers[0].items == 0) customers.shift();
      }
    });
    setCheckoutLanes(tmp);
  };

  return (
    <div className={`flex flex-col flex-wrap text-[${colors.primary}] gap-36`}>
      <div className="flexCenter gap-5">
        <label>
          <input
            className="text-center text-black"
            type="number"
            required
            value={itemsToCheckout}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (itemsToCheckout > 0) {
                setItemsToCheckout(+e.target.value);
              }
            }}
          />
        </label>
        <button
          className={`${styles.button} rounded-lg border p-2 text-center`}
          onClick={handleClick}
        >
          Checkout
        </button>
      </div>
      <CheckoutQueue checkoutLaneQueue={checkoutLanes} />
    </div>
  );
}
