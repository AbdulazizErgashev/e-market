import HomeCarusel from "../components/HomeCarusel";
import TopProducts from "../components/TopProducts";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto pt-24 px-10">
      <HomeCarusel />
      <TopProducts title={"Top Products"} />
    </div>
  );
}
