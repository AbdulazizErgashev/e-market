import HomeCarusel from "../components/HomeCarusel";
import Newsletter from "../components/Newsletter";
import TopProducts from "../components/TopProducts";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-10">
      <HomeCarusel />
      <TopProducts title={"Top Products"} />
      <Newsletter />
    </div>
  );
}
