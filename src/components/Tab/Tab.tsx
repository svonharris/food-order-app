import { useState } from "react";

type TabProps = {
  title: string;
  ingredients?: {
    id: number;
    title: string;
    price: number;
    description: string;
    icon: React.ElementType;
  }[];
};

const Tab = (props: TabProps) => {
  // Array of selected ingredient IDs
  const [active, setActive] = useState<number[]>([]);

  const handleFoodSelect = (id: number) => {
    setActive(
      // prev is an array representing the currently selected IDs before the click.
      (prev) =>
        prev.includes(id)
          ? prev.filter((itemId) => itemId !== id) // false removes ID from array (unselect)
          : [...prev, id] // add ID to array (select)
    );
  };

  return (
    <div className="flex flex-row flex-wrap gap-1 py-[6px] px-[12px]">
      {props.ingredients !== undefined
        ? props.ingredients.map((ingredient) => (
            <button
              key={ingredient.id}
              type="button"
              className={`${
                active.includes(ingredient.id) ? "bg-purple-600" : ""
              } 
              cursor-pointer hover:bg-purple-600 py-[10px] px-[10px] grow-0 shrink-0 basis-[25%] text-center flex flex-col items-center`}
              onClick={() => handleFoodSelect(ingredient.id)}
            >
              <div className="bg-white p-[20px] rounded-full max-w-fit">
                <ingredient.icon size={30} className="fill-purple-600" />
              </div>
              <p className="my-1">{ingredient.title}</p>
              <p>{ingredient.description}</p>
              <p className="block text-xs">+ ${ingredient.price.toFixed(2)}</p>
            </button>
          ))
        : "No ingredients available."}
    </div>
  );
};

export default Tab;
