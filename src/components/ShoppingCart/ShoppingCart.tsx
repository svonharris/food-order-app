import OrderForm from "../Forms/OrderForm";
import { BsQuestionCircleFill } from "react-icons/bs";
import Button from "../Button/Button";
import Link from "../Link/Link";
import { useAppContext } from "../../AppContext";

const ShoppingCart = () => {
  const { selections } = useAppContext(); // Shared State variable
  const allIngredients = Object.values(selections).flat();
  const grandTotal = allIngredients.reduce(
    (sum, ingred) => sum + ingred.price,
    0
  );
  const tax = grandTotal * 0.07;

  return (
    <div>
      <h2 className="border-b border-b-white border-solid max-w-[50%] pb-10 font-bold text-2xl">
        Shopping Cart
      </h2>
      <div className="grid grid-cols-2 gap-15">
        {/* Ordered Items List */}
        <div className="grid grid-cols-2 mt-5">
          <div>
            <p className="text-sm">1. Bowl</p>
            <ul className="text-xs pl-4">
              {allIngredients.map((ingredient) => (
                <li key={`${ingredient.name}-${ingredient.id}`}>
                  {ingredient.name}: {ingredient.price.toFixed(2)} {""}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Price: ${grandTotal.toFixed(2)}</p>
            {/* <p>Qty: 1 (- 1 +)</p> */}
            <div>
              <label htmlFor="quanity">Qty:</label>
              <select name="quanity" id="quanity" className="pl-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <Link variant="primary">Remove</Link>
          </div>
          <div className="col-span-2 mt-5">
            <OrderForm />
          </div>
        </div>
        {/* Order Summary */}
        <div>
          <div className="p-5 bg-gray-500/75 rounded-md">
            <h3 className="font-bold mb-3">Order Summary</h3>
            <p className="mb-1 py-2 border-b border-b-white border-solid grid grid-cols-2">
              <span className="flex flex-row items-center gap-1">
                Subtotal
                <BsQuestionCircleFill size={15} className="cursor-pointer" />
              </span>
              <span className="text-right">${grandTotal.toFixed(2)}</span>
            </p>
            <p className="mb-1 py-2 border-b border-b-white border-solid grid grid-cols-2">
              <span className="flex flex-row items-center gap-1">
                Tax
                <BsQuestionCircleFill size={15} className="cursor-pointer" />
              </span>
              <span className="text-right">${tax.toFixed(2)}</span>
            </p>
            <p className="font-bold mb-1 py-2 grid grid-cols-2">
              Order total
              <span className="text-right">
                ${(tax + grandTotal).toFixed(2)}
              </span>
            </p>
            <Button variant="secondary">Place Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
