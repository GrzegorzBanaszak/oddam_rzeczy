import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { helpList } from "../helpList";
import WhoHelpItem from "./WhoHelpItem";
export const WhoHelpList = ({ selected }) => {
  const [list, setList] = useState([]);
  const [length, setlength] = useState(0);

  const getSelected = () => {
    const filtred = helpList.find((item) => item.name === selected);
    setList(filtred.itams);
  };
  useEffect(() => {
    getSelected();
  }, [selected]);

  return (
    <div className="who-help-list">
      {list &&
        list
          .slice(length, length + 3)
          .map((item, index) => <WhoHelpItem key={index} item={item} />)}
    </div>
  );
};
