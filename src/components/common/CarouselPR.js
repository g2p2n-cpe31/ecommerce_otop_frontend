import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MockDataCarousel from '../../images/Navbar/MockImgPR.jpg'

const ImagePR = styled.img`
  width: 100%;
  height: 359px;
`

const SliderCustom = styled(Slider)`
  .slick-dots li button:before,
  .slick-dots li button:hover:before,
  .slick-dots li.slick-active button:before {
    color: #fff;
    font-size: 10px;
    margin: 5px 0;
  }

  & .slick-dots {
    position: absolute;
    bottom: 4rem;

    li {
      width: 20px;
      height: 30px;
      margin: 0;
      background: rgba(44, 44, 45, 0.25);
      color: rgba(255, 255, 255, 0.25);
      text-align: center;
    }
    li:nth-child(1) {
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      width: 30px;
      button:before {
        margin-left: 10px;
      }
    }
    li:last-child {
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      width: 30px;
      button:before {
        margin-right: 10px;
      }
    }
  }
`
const CarouselPR = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
  }
  return (
    <>
      <SliderCustom {...settings}>
        <ImagePR src={MockDataCarousel} />
        <ImagePR src={MockDataCarousel} />
        <ImagePR src={MockDataCarousel} />
        <ImagePR src={MockDataCarousel} />
        <ImagePR src={MockDataCarousel} />
        <ImagePR src={MockDataCarousel} />
        <ImagePR src={MockDataCarousel} />
        <ImagePR src={MockDataCarousel} />
      </SliderCustom>
    </>
  )
}

export default CarouselPR
