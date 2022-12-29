import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  marginTop: "10px",
                }}
                key={index}
              >
                {/* <div style={{ width: "100%" }}> */}
                <img
                  src={value.cover}
                  alt=""
                  style={{ maxHeight: "500px", width: "100%" }}
                />
                {/* </div> */}
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    height: "100%",
                    width: "100%",
                    paddingTop: "80px",
                    paddingBottom: "auto",
                    paddingLeft: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  {/* <button className="btn-primary">Visit Collections</button> */}
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
