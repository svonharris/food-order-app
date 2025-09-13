import { PiArrowBendRightDownFill } from "react-icons/pi";
import { PiArrowBendDownRightFill } from "react-icons/pi";

type ButtonProps = {
  icon?: string;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  children: React.ReactNode;
};

const icons = [
  //icons[0].icon
  {
    name: "arrowBendDown",
    icon: <PiArrowBendRightDownFill />,
  },
  {
    name: "arrowBendRight",
    icon: <PiArrowBendDownRightFill />,
  },
];

const Button = ({ children, onClick, variant }: ButtonProps) => {
  // const foundIcon = icons.find((item) => item.name === props.icon);

  const baseClasses =
    "btn flex flex-row justify-center cursor-pointer p-2 rounded-sm font-semibold text-white";
  const variantClasses =
    variant === "primary"
      ? "bg-transparent border-2 border-purple-600"
      : variant === "secondary"
      ? "bg-purple-600  w-[300px] mt-7 my-0 mx-auto"
      : "";

  return (
    // Write code to display styles if icon prop is passed
    <div className="flex flex-row items-center gap-1">
      <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
        {children}
      </button>
      {/* {foundIcon ? (
        <span
          style={{
            marginTop: "10px",
            fontSize: "40px",
          }}
        >
          {foundIcon.icon}
        </span>
      ) : null} */}
    </div>
  );
};

export default Button;
