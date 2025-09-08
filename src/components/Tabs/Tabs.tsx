import { useState } from "react";
import { testingData } from "../../Data/Data.tsx";
import Tab from "../Tab/Tab.tsx";

// type TabsProps = {
//   title: string;
//   content: string;
//   price?: number;
//   icon?: React.ReactNode;
// };

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
          <Tab
            title={data.title}
            content={data.content}
            price={data.price}
            icon={data.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default Tabs;
