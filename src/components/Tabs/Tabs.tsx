import { useState } from "react";
import { foodData } from "../../Data/Data.tsx";
import Tab from "../Tab/Tab.tsx";

// type TabsProps = {
//   data: {
//     id: number;
//     category: string;
//     ingredients: {}[];
//   };
// };

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Base");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="w-[100%]">
        {/* Tab Buttons Group */}
        <div className="flex gap-4">
          {foodData.map((data) => (
            <button
              key={data.id}
              className={`cursor-pointer outline-purple-600 py-[14px] px-[16px] border-[1px] border-solid border-white hover:bg-purple-600 ${
                activeTab === data.category ? "bg-purple-600" : ""
              }`}
              onClick={() => handleTabClick(data.category)}
            >
              {data.category}
            </button>
          ))}
          <button
            className={`cursor-pointer outline-purple-600 py-[14px] px-[16px] border-[1px] border-solid border-white hover:bg-purple-600 ${
              activeTab === "ViewAll" ? "bg-purple-600" : ""
            }`}
            onClick={() => {
              handleTabClick("ViewAll");
            }}
          >
            View All
          </button>
        </div>

        {/* Tab Content */}
        {foodData.map((data) => (
          <div
            key={data.id}
            className={`${
              activeTab === data.category || activeTab === "ViewAll"
                ? "flex"
                : "hidden"
            } ${
              activeTab === "ViewAll"
                ? "border-b border-solid border-b-white py-5"
                : ""
            }`}
          >
            <Tab
              title={data.category}
              ingredients={data.ingredients}
              showTitle={activeTab === "ViewAll" ? true : false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
