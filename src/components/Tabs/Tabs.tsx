import { useState } from "react";
import Tab from "../Tab/Tab.tsx";

type TabsProps = {
  data: {
    category: string;
    id: number;
    ingredients: [];
  }[];
};

const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = useState("Base");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const viewAllString = "ViewAll";

  return (
    <>
      <div className="w-[100%]">
        {/* Tab Buttons Group */}
        <div className="flex gap-4">
          {props.data.map((data) => (
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
              activeTab === viewAllString ? "bg-purple-600" : ""
            }`}
            onClick={() => handleTabClick(viewAllString)}
          >
            View All
          </button>
        </div>

        {/* Tab Content */}
        {props.data.map((data) => (
          <div
            key={data.id}
            className={`${
              activeTab === data.category || activeTab === viewAllString
                ? "flex"
                : "hidden"
            } ${
              activeTab === viewAllString
                ? "border-b border-solid border-b-white py-5"
                : ""
            }`}
          >
            <Tab
              category={data.category}
              ingredients={data.ingredients}
              showCategory={activeTab === viewAllString ? true : false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
