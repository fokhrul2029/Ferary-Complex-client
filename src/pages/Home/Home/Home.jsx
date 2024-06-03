import About from "../About/About";
import Banner from "../Banner/Banner";
import Coupon from "../Coupon/Coupon";
import OurApartment from "../OurApartment/OurApartment";

function Home() {
  return (
    <div className="flex flex-col gap-12 py-10">
      <Banner />
      <About />
      <Coupon />
      <OurApartment />
    </div>
  );
}

export default Home;
