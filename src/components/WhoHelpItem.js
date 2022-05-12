import React from "react";

const WhoHelpItem = ({ item }) => {
  const { title, description, stuff } = item;
  return (
    <div className="who-help-item">
      <div className="item-left">
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
      </div>
      <div className="item-right">
        <h4 className="item-stuff">{stuff}</h4>
      </div>
    </div>
  );
};

export default WhoHelpItem;
