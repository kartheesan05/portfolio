import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const host =
  "https://raw.githubusercontent.com/kartheesan05/assets/main/portfolio/";

const Image = () => (
  <div className="limitwidth">
    <Carousel
      showThumbs={false}
      autoPlay={true}
      dynamicHeight={false}
      stopOnHover
      infiniteLoop
    >
      <div>
        <img src={host + "yc1.png"} />
      </div>
      <div>
        <img src={host + "yc2.png"} />
      </div>
      <div>
        <img src={host + "yc3.png"} />
      </div>
      <div>
        <img src={host + "yc4.png"} />
      </div>
      <div>
        <img src={host + "yc5.png"} />
      </div>
    </Carousel>
  </div>
);
export default Image;
