import { useState } from "react";
import { useAppContext } from "../../AppContext";

type TabProps = {
  category: string;
  showCategory: boolean;
  ingredients?: {
    id: number;
    name: string;
    price: number;
    description: string;
    icon: React.ElementType;
  }[];
};

const Tab = (props: TabProps) => {
  // Selected ingredient IDs
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const { updateSelections } = useAppContext(); // Shared update State function

  const handleFoodSelect = (id: number) => {
    let updatedSelectedIds: number[] = [];

    if (props.category === "Base") {
      // Only one selection allowed
      updatedSelectedIds = selectedIds.includes(id) ? [] : [id];
    } else {
      // Multi-select for other categories
      updatedSelectedIds = selectedIds.includes(id)
        ? selectedIds.filter((itemId) => itemId !== id)
        : [...selectedIds, id];
    }

    setSelectedIds(updatedSelectedIds);

    if (props.ingredients) {
      const selectedIngredients = props.ingredients.filter((ingredient) =>
        updatedSelectedIds.includes(ingredient.id)
      );

      updateSelections(props.category, selectedIngredients);
    }
  };

  return (
    <>
      <div className="flex flex-row flex-wrap gap-1">
        {/* Category Title */}
        <p
          className={`grow-0 shrink-0 basis-[100%] ${
            props.showCategory ? "" : "hidden"
          }`}
        >
          {props.category}
        </p>
        {/* Ingredient Buttons */}
        {props.ingredients?.map((ingredient) => (
          <button
            key={ingredient.id}
            className={`${
              selectedIds.includes(ingredient.id) ? "bg-purple-600" : ""
            } cursor-pointer hover:bg-purple-600 py-[10px] px-[10px] grow-0 shrink-0 basis-[25%] text-center flex flex-col items-center`}
            onClick={() => handleFoodSelect(ingredient.id)}
          >
            <div className="bg-white p-[20px] rounded-full max-w-fit">
              <ingredient.icon size={30} className="fill-purple-600" />
            </div>
            <p className="my-1">{ingredient.name}</p>
            <p>{ingredient.description}</p>
            <p className="text-xs">+ ${ingredient.price.toFixed(2)}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export default Tab;
