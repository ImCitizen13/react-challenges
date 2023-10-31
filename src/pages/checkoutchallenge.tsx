import CheckoutChallenge from "~/components/CheckoutChallenge";

export default function CCGame() {
  return (
    <>
      <div className=" challengesView flex flex-wrap justify-center">
        <div className="flex flex-wrap items-center gap-7">
          <CheckoutChallenge />
        </div>
      </div>
    </>
  );
}