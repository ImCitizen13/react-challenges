import WhackAMole from "~/components/WhackAMole";

export default function WAM() {
  return (
    <>
      <div className="mapView flex flex-wrap justify-center">
        <div className="flex flex-wrap items-center gap-7">
          <WhackAMole/>
        </div>
      </div>
    </>
  );
}