import Slider from "react-slick";

function LazyLoad() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img 
            
            height={"100%"}
            width={"100%"}
            style={{borderRadius:'10%', transform: 'scaleX(-1)'}}
            src="/profile4.jpg"/>
          </div>
        <div>
          <img 
          height={"100%"}
          width={"100%"}
          style={{borderRadius:'10%', transform: 'scaleX(-1)'}}
          src={"/profile2.jpg"}/>
        </div>
        <div>
          <img 
          height={"100%"}
          width={"100%"}
          style={{borderRadius:'10%', transform: 'scaleX(-1)'}}
          src={"/profile3.jpg"} />
        </div>
        <div>
          <img 
          height={"100%"}
          width={"100%"}
          style={{borderRadius:'10%', transform: 'scaleX(-1)'}}
          src={"/profile1.jpg"} />
        </div>
        <div>
          <img 
          height={"100%"}
          width={"100%"}
          style={{borderRadius:'10%', transform: 'scaleX(-1)'}}
          src={"/profile5.jpg"} />
        </div>
      </Slider>
    </div>
  );
}

export default LazyLoad;