import WhackAMole from "~/components/WhackAMole";

export default function WAM() {
  return (
    <>
      <div className="whackAMole flex flex-wrap justify-center bg-[#a5d5b0]">
        <div className="flex flex-wrap items-center gap-7">
          <WhackAMole/>
        </div>
      </div>
    </>
  );
}