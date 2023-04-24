import React from 'react';
import Slider from 'react-slick';
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  position: relative;
  .slick-next,
  .slick-prev {
    position: absolute;
    bottom: 0;
    z-index: 1;
  }

  .slick-next {
    right: -10px;
  }

  .slick-prev {
    left: -10px;
  }
  
  @media (min-width: 768px) {
    .slick-next {
      right: -20px;
    }

    .slick-prev {
      left: -20px;
    }
  }
  
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
    ],
};

const ImageSlider = ({images}) => {
    return (
        <StyledSlider {...settings}>
            {images.map((image) => (
                <div key={image.id}>
                    <img src={image.image} alt={image.id}/>
                </div>
            ))}
        </StyledSlider>
    );
};

export default ImageSlider;