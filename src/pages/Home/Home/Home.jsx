import About from "../About/About";
import Banner from "../Banner/Banner";

function Home() {
  return (
    <div className="flex flex-col gap-12 py-10">
      <Banner />
      <About />
    </div>
  );
}

export default Home;
