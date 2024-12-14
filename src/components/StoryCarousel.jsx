import Slider from "react-slick";

function LazyLoad() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={"/profile2.jpg"}/>
        </div>
        <div>
          <img src={"/profile3.jpg"} />
        </div>
        <div>
          <img src={"/profile1.jpg"} />
        </div>
        <div>
          <img src={"/profile4.jpg"} />
        </div>
      </Slider>
    </div>
  );
}

export default LazyLoad;