/* eslint-disable react/no-unescaped-entities */
import Title from "../../../components/Title/Title";
// import img from "https://i.ibb.co/xf6XsKD/OIP.jpg"

function About() {
  return (
    <div>
      <Title />
      <div className="flex flex-col md:flex-row py-10 gap-8 justify-between items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-semibold py-2">
            <span className="border-b-2">The Grand Plaza</span>
          </h1>
          <h2 className="text-2xl font-semibold py-2">Architectural Marvel</h2>
          <p className="text-base">
            The Grand Plaza stands as a beacon of modern architecture,
            showcasing a seamless blend of aesthetic brilliance and functional
            design. The building's sleek lines and innovative structure are a
            testament to cutting-edge engineering and artistic vision.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full"
            src="https://i.ibb.co/xf6XsKD/OIP.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row py-10 gap-8 justify-between items-center">
        <div className="w-full md:w-1/2">
          <img
            className="w-full"
            src="https://i.ibb.co/xf6XsKD/OIP.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-semibold py-2">
            <span className="border-b-2">The Grand Plaza</span>
          </h1>
          <h2 className="text-2xl font-semibold py-2">Architectural Marvel</h2>
          <p className="text-base">
            The Grand Plaza stands as a beacon of modern architecture,
            showcasing a seamless blend of aesthetic brilliance and functional
            design. The building's sleek lines and innovative structure are a
            testament to cutting-edge engineering and artistic vision.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
