import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Image = () => (
  <div className="limitwidth">
    <Carousel autoPlay={true} dynamicHeight={false} stopOnHover infiniteLoop>
      <div>
        <img src="/yc1.png" />
      </div>
      <div>
        <img src="/yc2.png" />
      </div>
      <div>
        <img src="/yc3.png" />
      </div>
      <div>
        <img src="/yc4.png" />
      </div>
      <div>
        <img src="/yc5.png" />
      </div>
    </Carousel>
  </div>
);
export default Image;
