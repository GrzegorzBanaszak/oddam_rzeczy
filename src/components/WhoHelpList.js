import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { helpList } from "../helpList";
import WhoHelpItem from "./WhoHelpItem";
export const WhoHelpList = ({ selected }) => {
  const [list, setList] = useState([]);
  const [length, setlength] = useState(0);
  const [pagination, setPagination] = useState([]);

  const initialPagination = (length) => {
    const numbers = new Array(0);
    for (let i = 0; i < length; i++) {
      numbers.push(i);
    }
    setPagination(numbers);
  };

  const changeDisplay = (number) => {
    if (number === 0) {
      setlength(0);
    } else {
      setlength(number * 3);
    }
  };
  const getSelected = () => {
    const filtred = helpList.find((item) => item.name === selected);
    initialPagination(Math.ceil(filtred.itams.length / 3));
    setList(filtred.itams);
  };
  useEffect(() => {
    getSelected();
  }, [selected]);

  return (
    <>
      <div className="who-help-list">
        {list &&
          list
            .slice(length, length + 3)
            .map((item, index) => <WhoHelpItem key={index} item={item} />)}
      </div>
      <div className="who-help-pagination">
        {list.length > 3 &&
          pagination.map((item, index) => (
            <div
              className={`pagination-item ${
                item === length / 3 ? "pagination-active" : ""
              }`}
              key={index}
              onClick={() => changeDisplay(item)}
            >
              {item + 1}
            </div>
          ))}
      </div>
    </>
  );
};
