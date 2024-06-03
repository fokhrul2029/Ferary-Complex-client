import About from "../About/About";
import Banner from "../Banner/Banner";
import Coupon from "../Coupon/Coupon";

function Home() {
  return (
    <div className="flex flex-col gap-12 py-10">
      <Banner />
      <About />
      <Coupon />
    </div>
  );
}

export default Home;
