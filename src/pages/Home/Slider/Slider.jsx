/* eslint-disable react/prop-types */
function Slider({ slides }) {
  const { slide_Img } = slides;
  return (
    <div>
      <img className="h-[450px] w-full rounded-lg" src={slide_Img} alt="" />
    </div>
  );
}

export default Slider;
