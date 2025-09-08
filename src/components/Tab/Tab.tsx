// import React from 'react'
import { useState } from "react";

type TabProps = {
  title: string;
  content: string;
  price?: number;
  icon?: React.ReactNode;
};

const Tab = (props: TabProps) => {
  const [active, setActive] = useState(false);

  const handleItemClick = (n: boolean) => {
    n === active ? setActive(false) : setActive(true);
  };

  return (
    <>
      <div
        className={`${
          active ? "bg-purple-600" : ""
        } flex flex-col items-center cursor-pointer hover:bg-purple-600 py-[10px] px-[20px]`}
        onClick={() => handleItemClick(true)}
      >
        <div className="bg-white p-[20px] rounded-full">
          {/* <FaLeaf size={30} className="fill-purple-600" /> */}
          {props.icon}
        </div>
        <p className="my-1">{props.title}</p>
        <p>{props.content}</p>
        <p className="block text-xs">
          + ${props.price !== undefined ? props.price.toFixed(2) : "0.00"}
        </p>
      </div>
    </>
  );
};

export default Tab;
