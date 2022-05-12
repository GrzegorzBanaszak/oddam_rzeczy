import React from "react";

const SimpleStepsItem = ({ icon, title, description }) => {
  return (
    <div className="simple-item">
      <img src={require(`../assets/${icon}`)} alt="simple-item-icon" />
      <h5 className="simple-item-title">{title}</h5>
      <p className="simple-item-description">{description}</p>
    </div>
  );
};

export default SimpleStepsItem;
