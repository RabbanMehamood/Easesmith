import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    imageUrl: "images/Nursery_img_1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    imageUrl: "images/Nursery_img_2.png",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus.",
  },
  {
    id: 3,
    imageUrl: "images/Nursery_img_3.png",
    description: "Curabitur quis risus eget urna mollis ornare vel eu leo.",
  },
  {
    id: 4,
    imageUrl: "images/Nursery_img_4.png",
    description:
      "Mauris placerat eleifend leo. Quisque sit amet est et sapien.",
  },
  {
    id: 5,
    imageUrl: "images/Nursery_img_5.png",
    description:
      "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue.",
  },
  {
    id: 6,
    imageUrl: "images/Nursery_img_6.png",
    description: "Etiam sit amet orci eget eros faucibus tincidunt.",
  },
];

function PlantCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    arrows: true,
  };

  return (
    <div className="mt-10">
      <Slider {...settings}>
        {data.map((item) => (
          <div
            key={item.id}
            className="!flex justify-center items-center flex-col text-center"
          >
            <img
              src={item.imageUrl}
              alt={`Plant ${item.id}`}
              className="w-24 h-24 rounded-full"
            />
            <span className="h-32 w-32">
              <p className="text-[#838383] text-sm font-medium pt-3">
                {item.description}
              </p>
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PlantCarousel;
