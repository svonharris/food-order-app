// import React from 'react'
import { PiArrowBendRightDownFill } from "react-icons/pi";
import { PiArrowBendDownRightFill } from "react-icons/pi";
import "./Button.css";

type ButtonProps = {
  title: string;
  icon: string;
};

const icons = [
  {
    name: "arrowBendDown",
    icon: <PiArrowBendRightDownFill />,
  },
  {
    name: "arrowBendRight",
    icon: <PiArrowBendDownRightFill />,
  },
];

const Button = ({ title, icon }: ButtonProps) => {
  const foundIcon = icons.find((item) => item.name === icon);

  return (
    <div className="flex flex-row items-center gap-1">
      <button className="btn flex flex-row bg-amber-500 p-2 rounded-sm">
        {title}
      </button>
      {/* <div> */}
      {foundIcon ? (
        <span style={{ marginTop: "10px", fontSize: "text-5xl" }}>
          {foundIcon.icon}
        </span>
      ) : null}
      {/* </div> */}
    </div>
  );
};

export default Button;
