type RadioInputProps = {
  id: string;
  name: string;
  type: string;
  label: string;
};

const RadioInput = (props: RadioInputProps) => {
  return (
    <div className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6">
      <input id={props.id} name={props.name} type={props.type} />
      <label htmlFor={props.name} className="pl-2">
        {props.label}
      </label>
    </div>
  );
};

export default RadioInput;
