import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
        <img src="https://raw.githubusercontent.com/kartheesan05/assets/main/portfolio/yc1.png" />
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/kartheesan05/assets/main/portfolio/yc2.png" />
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/kartheesan05/assets/main/portfolio/yc3.png" />
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/kartheesan05/assets/main/portfolio/yc4.png" />
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/kartheesan05/assets/main/portfolio/yc5.png" />
      </div>
    </Carousel>
  </div>
);
export default Image;
