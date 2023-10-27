import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="challengesView">
      <div className="grid grid-cols-3 gap-5">
        <div >
          <Link className="challenge" href={"/whackamole"}>
            <Image
              src={"/whackamole.png"}
              height={350}
              width={400}
              alt="Whack A Mole"
            />
            <h1>Whack A Mole</h1>
          </Link>
        </div>
        <div>
        <Link className="challenge" href={"/treefolders"}>
          <Image
            src={"/treefolders.png"}
            height={350}
            width={400}
            alt="Tree Folders"
          />
          <h1>Folders Tree</h1>
        </Link>
        </div>
      </div>
    </div>
  );
}
