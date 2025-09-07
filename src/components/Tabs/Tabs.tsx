import { useState } from "react";
import { testingData } from "../../Data/Data.tsx";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-[100%] border-[1px] border-solid border-white">
      {/* Tab Buttons Group */}
      <div className="flex">
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
          className={"hidden py-[6px] px-[12px]"}
          style={{ display: activeTab === data.name ? "block" : "none" }}
        >
          <h3>{data.title}</h3>
          <p>{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
