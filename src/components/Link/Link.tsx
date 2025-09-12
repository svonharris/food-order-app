// Using role="button" instead of the semantic <button> or <input type="button"> elements, you will need to make the element focusable and define event handlers for click and keydown events. This includes handling the Enter and Space key presses in order to process all forms of user input.

type LinkProps = {
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  children: React.ReactNode;
};

const Link = ({ children, onClick, variant }: LinkProps) => {
  const baseClasses =
    "flex flex-row cursor-pointer p-2 font-normal focus:outline-1 focus:outline-purple-600 text-slate-300 hover:border-b-white";
  const variantClasses =
    variant === "primary"
      ? "border-b border-b-purple-600 border-solid hover:font-semibold"
      : "";

  return (
    <div className="flex flex-row items-center gap-1">
      <div
        tabIndex={0}
        role="button"
        className={`${baseClasses} ${variantClasses}`}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};

export default Link;
