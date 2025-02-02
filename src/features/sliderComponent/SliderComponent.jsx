import Boz from "../../shared/images/adminPage/imageSlide.png";
import Car from "../../shared/images/adminPage/imageCar.png";
import "./sliderComponent.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow({onClick, className}) {
    return (
      <div
        className={className}
        style={{
          display: "block",
          backgroundColor: "rgba(34, 125, 165, 1)",
          color: "white",
          borderRadius: "50%",
          width: "67px",
          height: "67px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
      <span>&#8594;</span>
      </div>
    );
  }
  
  function PrevArrow({onClick, className}) {
    return (
      <div 
        className={className}
        style={{
          display: "block",
          backgroundColor: "rgba(34, 125, 165, 1)",
          color: "white",
          borderRadius: "50%",
          width: "67px",
          height: "67px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex:'10'
        }}
        onClick={onClick}
        >
      
      </div>
    );
  }
  

export function SliderComponent() {
  const settings = {
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fakeData = [
    { image: Boz },
    { image: Car },
  ];

  return (
    <div className="slider_container">
      <Slider {...settings}>
        {fakeData.map((item, index) => (
          <div className="slide" key={index}>
            <img
              src={item.image}
              className="slide-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
