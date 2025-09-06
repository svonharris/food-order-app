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
      <button className="btn flex flex-row bg-transparent border-2 border-purple-600 p-2 rounded-sm font-semibold">
        {title}
      </button>
      {/* <div> */}
      {foundIcon ? (
        <span
          style={{
            marginTop: "10px",
            fontSize: "40px",
          }}
        >
          {foundIcon.icon}
        </span>
      ) : null}
      {/* </div> */}
    </div>
  );
};

export default Button;
