/* eslint-disable react/no-unescaped-entities */
import Title from "../../../components/Title/Title";
// import img from "https://i.ibb.co/xf6XsKD/OIP.jpg"

function About() {
  return (
    <div className="p-8 rounded-lg mx-auto my-10">
      <Title title={"About The Building"} />

      <div className="flex flex-col lg:flex-row py-10 gap-8 justify-between items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-semibold py-2">
            <span className="border-b-2">The Heritage Tower</span>
          </h1>
          <h2 className="text-2xl font-semibold py-2">Historical Landmark</h2>
          <p className="text-base">
            The Heritage Tower, established in 1895, is a symbol of the city's
            rich history. Its Victorian architecture, complete with intricate
            details and towering spires, has stood the test of time, offering a
            glimpse into a bygone era. Originally built as a government
            building, it has served various purposes over the decades, including
            a library, museum, and community center.
          </p>
          <p className="text-base">
            The tower's clock, a centerpiece of the structure, is a marvel of
            19th-century engineering, still ticking with remarkable precision.
            Regular guided tours offer insights into the building's storied past
            and its significance to the local heritage.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="w-full rounded-lg shadow-md"
            src="https://i.ibb.co/xf6XsKD/OIP.jpg"
            alt="The Heritage Tower"
          />
        </div>
      </div>

      <div className="py-10">
        <div className="w-full text-center lg:text-left">
          <h1 className="text-4xl font-semibold py-2">
            <span className="border-b-2">The Heritage Tower</span>
          </h1>
          <h2 className="text-2xl font-semibold py-2">Modern Elegance</h2>
          <p className="text-base">
            Recently renovated, The Heritage Tower now boasts modern amenities
            while preserving its historical charm. The building features
            contemporary interiors, advanced technology, and sustainable
            practices, making it a perfect blend of old and new. The renovation
            project focused on maintaining the building's structural integrity
            while upgrading its facilities to meet current standards.
          </p>
          <p className="text-base">
            Today, it houses a variety of modern offices, conference rooms, and
            event spaces equipped with the latest technology. The rooftop garden
            offers a serene escape with stunning views of the cityscape,
            reflecting a commitment to sustainability and green building
            practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
