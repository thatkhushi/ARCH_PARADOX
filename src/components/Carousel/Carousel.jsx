import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import card from "../../images/card.png";

import React from "react";

const Carousel = ({images}) => {
  const settings = {
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="imgslider">
        <Slider {...settings}>
          <div className="slider__wrapper">
            <div className="sliderimage">
              <img src={card} alt="card" />
            </div>
            <div className="slider-content">
              <h1>Arch Design Studio</h1>
              <h2>A Very Personal Approach to Every Child</h2>
              <h3>Elegant solution to Complex Problems</h3>
              <button>Get Started</button>
            </div>
          </div>
          <div className="slider__wrapper">
            <div className="sliderimage">
              <img src={card} alt="card" />
            </div>
            <div className="slider-content">
              <h1>Arch Design Studio</h1>
              <h2>A Very Personal Approach to Every Child</h2>
              <h3>Elegant solution to Complex Problems</h3>
              <button>Get Started</button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};
export default Carousel;

{
  /* {images.map((item) => ( */
}

{
  /* ))} */
}
// import React from "react";
// import { CCarousel, CCarouselItem ,CImage,CCarouselCaption} from "@coreui/react";
// import logo from '../../images/logo.png'
// import './Carousel.css'

// const Carousel = () => {
//   return (
//     <div className="carousel-wrapper">
//     <div className="carousel-container">
//     <CCarousel controls indicators dark>
//     <CCarouselItem className="carouselitem">
//       <CImage className="d-block w-100" src={logo} alt="" />
//       <CCarouselCaption className="d-none d-md-block caption-content">
//         <h5>First slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </CCarouselCaption>
//     </CCarouselItem>
//     {/* <CCarouselItem>
//       <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
//       <CCarouselCaption className="d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </CCarouselCaption>
//     </CCarouselItem>
//     <CCarouselItem>
//       <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
//       <CCarouselCaption className="d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </CCarouselCaption>
//     </CCarouselItem> */}
//   </CCarousel>
//   </div>
//   </div>
//   );
// };

// export default Carousel;
