import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Sofas and Couches",
    },
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Beds and side Tables",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Kitchen Cabinets",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Chairs and Seating",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Dining Tables",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Study Tables",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Dressing tables ",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Meeting tables",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Book stores",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "TV stands",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Others",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
