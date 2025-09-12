import { useState } from "react";

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
  const [active, setActive] = useState<number[]>([]); // Selected ingredient IDs
  const [totalPrice, setTotalPrice] = useState<number>(0); // Total price of selected ingredients

  // Handle ingredient selection
  const handleFoodSelect = (id: number, category: string) => {
    let updatedSelectedIds: number[] = [];

    if (category === "Base") {
      // Only allow one base at a time
      if (active.includes(id)) {
        // Unselect if clicked again
        updatedSelectedIds = [];
      } else {
        updatedSelectedIds = [id];
      }
    } else {
      // Multi-select for other categories
      if (active.includes(id)) {
        updatedSelectedIds = active.filter((itemId) => itemId !== id);
      } else {
        updatedSelectedIds = [...active, id];
      }
    }

    setActive(updatedSelectedIds);

    // Calculate total price based on selected IDs
    if (props.ingredients) {
      const total = props.ingredients
        .filter((ingredient) => updatedSelectedIds.includes(ingredient.id))
        .reduce((sum, ingredient) => sum + ingredient.price, 0);

      setTotalPrice(total);
    }
  };

  return (
    <>
      <div className="flex flex-row flex-wrap gap-1">
        {/* Display running total */}
        <p className="w-full text-right font-bold mb-2">
          Total: ${totalPrice.toFixed(2)}
        </p>

        {/* Category Title */}
        <p
          className={`grow-0 shrink-0 basis-[100%] ${
            props.showCategory ? "" : "hidden"
          }`}
        >
          {props.category}
        </p>

        {/* Ingredient Buttons */}
        {props.ingredients && props.ingredients.length > 0 ? (
          props.ingredients.map((ingredient) => (
            <button
              key={ingredient.id}
              type="button"
              className={`${
                active.includes(ingredient.id) ? "bg-purple-600" : ""
              } cursor-pointer hover:bg-purple-600 py-[10px] px-[10px] grow-0 shrink-0 basis-[25%] text-center flex flex-col items-center`}
              onClick={() => handleFoodSelect(ingredient.id, props.category)}
            >
              <div className="bg-white p-[20px] rounded-full max-w-fit">
                <ingredient.icon size={30} className="fill-purple-600" />
              </div>
              <p className="my-1">{ingredient.name}</p>
              <p>{ingredient.description}</p>
              <p className="block text-xs">+ ${ingredient.price.toFixed(2)}</p>
            </button>
          ))
        ) : (
          <p>No ingredients available.</p>
        )}
      </div>
    </>
  );
};

export default Tab;
