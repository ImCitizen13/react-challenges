export type Customer = {
  id: string;
  items: number;
};
export type CheckoutLane = {
  id: number;
  customers: Customer[];
};

export type CheckoutQueueProps = {
  customerQueue: Customer[]
};

export type CheckoutLaneProps = {
  checkoutLaneQueue: Customer[][]
};

export type LaneWeights = {
  idx: number;
  weight: number;
}
