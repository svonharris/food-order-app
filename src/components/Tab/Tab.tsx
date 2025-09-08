// import React from 'react'
import { useState } from "react";
import { FaLeaf } from "react-icons/fa6";

const Tab = () => {
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
          <FaLeaf size={30} className="fill-purple-600" />
        </div>
        <p className="my-1">Kale</p>
        <p className="block text-xs">(+$2.00)</p>
      </div>
    </>
  );
};

export default Tab;
