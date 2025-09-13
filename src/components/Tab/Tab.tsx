import { useState, useEffect } from "react";
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

// const Tab = ({ category, ingredients, showCategory }: TabProps) => {
const Tab = (props: TabProps) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]); // Selected ingredient IDs
  const { setCategoryTotal } = useAppContext();

  const handleFoodSelect = (id: number) => {
    if (props.category === "Base") {
      // Only one selection allowed
      setSelectedIds((prev) => (prev.includes(id) ? [] : [id]));
    } else {
      // Multi-select for other categories
      setSelectedIds((prev) =>
        prev.includes(id)
          ? prev.filter((itemId) => itemId !== id)
          : [...prev, id]
      );
    }
  };

  // Update category total in whenever selection changes
  useEffect(() => {
    if (!props.ingredients) return;

    const total = props.ingredients
      .filter((ingredient) => selectedIds.includes(ingredient.id))
      .reduce((sum, ingredient) => sum + ingredient.price, 0);

    setCategoryTotal(props.category, total);
    // Only re-run if selectedIds change
    // }, [selectedIds, props.ingredients, props.category, setCategoryTotal]);
  }, [selectedIds]);

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
            <p className="block text-xs">+ ${ingredient.price.toFixed(2)}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export default Tab;
