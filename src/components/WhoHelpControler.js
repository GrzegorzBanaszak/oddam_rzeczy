import React from "react";

const WhoHelpControler = ({ children, type, isSelected, setType }) => {
  const handleClick = () => {
    setType(type);
  };
  return (
    <div
      onClick={handleClick}
      className={`who-help-controler ${isSelected ? "active" : ""}`}
    >
      {children}
    </div>
  );
};

export default WhoHelpControler;
