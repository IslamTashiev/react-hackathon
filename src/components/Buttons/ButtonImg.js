import React from "react";

export const ButtonImg = ({ image, defaultClassName }) => {
  return (
    <div className={`btn  image ${defaultClassName ? defaultClassName : ""}`}>
      <img src={image} />
    </div>
  );
};
