type InputProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  autoComplete?: string;
};

const Input = (props: InputProps) => {
  return (
    <>
      <label
        htmlFor="first-name"
        className="block text-sm/6 font-medium text-white"
      >
        {props.label}
      </label>
      <div className="mt-2">
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          autoComplete={props.autoComplete}
          className={
            "block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
          }
        />
      </div>
    </>
  );
};

export default Input;
