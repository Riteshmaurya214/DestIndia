import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Bannerimage from "../assets/BannerCarousel.png"

export default function BannerCarousel() {
  const banners = [
    { id: 1, img: Bannerimage },
    { id: 2, img: Bannerimage },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {banners.map(banner => (
          <div key={banner.id}>
            <img src={banner.img} alt="Banner" className="w-full rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
