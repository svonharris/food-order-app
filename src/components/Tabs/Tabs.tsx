import { useState } from "react";
import { testingData } from "../../Data/Data.tsx";
import Tab from "../Tab/Tab.tsx";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-[100%]">
      {/* Tab Buttons Group */}
      <div className="flex gap-4">
        {testingData.map((data) => (
          <button
            key={data.id}
            className={`cursor-pointer outline-purple-600 py-[14px] px-[16px] border-[1px] border-solid border-white hover:bg-purple-600 ${
              activeTab === data.name ? "bg-purple-600" : ""
            }`}
            onClick={() => handleTabClick(data.name)}
          >
            {data.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {testingData.map((data) => (
        <div
          key={data.id}
          style={{ display: activeTab === data.name ? "flex" : "none" }}
        >
          <Tab title={data.title ?? ""} ingredients={data.ingredients} />
        </div>
      ))}
    </div>
  );
};

export default Tabs;
