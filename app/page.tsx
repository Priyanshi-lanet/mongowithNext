import Image from "next/image";
import Herosection from "@/app/component/Herosection";
export default function Home() {
  return (
    <div>
      {" "}
      <Herosection
        title={"LET'S WATCH MOVIE TOGETHER"}
        imageUrl={"/home.svg"}
      />
    </div>
  );
}
