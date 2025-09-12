import Input from "../Inputs/Input";
import RadioInput from "../Inputs/RadioInput";

const OrderForm = () => {
  return (
    <>
      <h2 className="font-bold text-lg">Pickup Information</h2>
      <div className="grid grid-cols-2 gap-x-3 gap-y-4">
        <div className="col-span-1">
          <Input
            id={"first-name"}
            name={"first-name"}
            type={"text"}
            label={"First name"}
            autoComplete={"given-name"}
          />
        </div>

        <div className="col-span-1">
          <Input
            id={"last-name"}
            name={"last-name"}
            type={"text"}
            label={"last name"}
            autoComplete={"family-name"}
          />
        </div>

        <div className="col-span-2">
          <Input
            id={"email"}
            name={"email"}
            type={"email"}
            label={"Email address"}
            autoComplete={"email"}
          />
        </div>

        <div className="col-span-2">
          <Input
            id={"phone"}
            name={"phone"}
            type={"phone"}
            label={"Phone number"}
            autoComplete={"phone"}
          />
        </div>

        <div>
          <h2 className="font-bold text-lg">Payment</h2>
          <RadioInput
            id={"cash"}
            name={"cash"}
            type={"radio"}
            label={"Cash in store"}
          />
        </div>
      </div>
    </>
  );
};

export default OrderForm;
