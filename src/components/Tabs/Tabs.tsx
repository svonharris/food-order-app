import { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        <button
          className={`tab-button${activeTab === "tab1" ? " active" : ""}`}
          onClick={() => handleTabClick("tab1")}
        >
          Tab 1
        </button>
        <button
          className={`tab-button${activeTab === "tab2" ? " active" : ""}`}
          onClick={() => handleTabClick("tab2")}
        >
          Tab 2
        </button>
        <button
          className={`tab-button${activeTab === "tab3" ? " active" : ""}`}
          onClick={() => handleTabClick("tab3")}
        >
          Tab 3
        </button>
      </div>

      <div
        id="tab1"
        className={`tab-content${activeTab === "tab1" ? " active" : ""}`}
        style={{ display: activeTab === "tab1" ? "block" : "none" }}
      >
        <h3>Content for Tab 1</h3>
        <p>This is the content displayed when Tab 1 is active.</p>
      </div>

      <div
        id="tab2"
        className={`tab-content${activeTab === "tab2" ? " active" : ""}`}
        style={{ display: activeTab === "tab2" ? "block" : "none" }}
      >
        <h3>Content for Tab 2</h3>
        <p>This is the content displayed when Tab 2 is active.</p>
      </div>

      <div
        id="tab3"
        className={`tab-content${activeTab === "tab3" ? " active" : ""}`}
        style={{ display: activeTab === "tab3" ? "block" : "none" }}
      >
        <h3>Content for Tab 3</h3>
        <p>This is the content displayed when Tab 3 is active.</p>
      </div>
    </div>
  );
};

export default Tabs;
