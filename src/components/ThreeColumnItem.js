import React from "react";

const ThreeColumnItem = ({ title, subtitle, children }) => {
  return (
    <article className="three-columnes-item">
      <h3 className="three-columnes-title">{title}</h3>
      <h5 className="three-columnes-subtitle">{subtitle}</h5>
      <p className="three-columnes-description">{children}</p>
    </article>
  );
};

export default ThreeColumnItem;
