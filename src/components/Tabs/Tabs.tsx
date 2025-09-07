// import React from 'react'
import "./Tabs.css";

const Tabs = () => {
  type TabsProps = {
    tabName: string;
    event: React.MouseEvent<HTMLButtonElement>;
  };

  const openTab = ({ event, tabName }: TabsProps) => {
    // Get all elements with class="tab-content" and hide them
    const tabcontent = document.getElementsByClassName("tab-content");
    const tabcontentArray = Array.from(tabcontent);
    tabcontentArray.map((tab) => {
      (tab as HTMLElement).style.display = "none";
    });

    // Get all elements with class="tab-button" and remove the class "active"
    const tablinks = document.getElementsByClassName("tab-button");
    const tablinksArray = Array.from(tablinks);
    tablinksArray.map((tab) => {
      tab.className = tab.className.replace(" active", "");
    });

    // Show the current tab, and add an "active" class to the button that opened the tab
    const currentTabButton = document.getElementById(tabName);
    (currentTabButton as HTMLElement).style.display = "block";
    (event.target as HTMLElement).className += " active";
  };

  // Set the first tab as active by default when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    (document.querySelector(".tab-button") as HTMLElement).click();
  });

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        <button
          className="tab-button active"
          onClick={(event) => {
            openTab({ event, tabName: "tab1" });
          }}
        >
          Tab 1
        </button>
        <button
          className="tab-button"
          onClick={(event) => {
            openTab({ event, tabName: "tab2" });
          }}
        >
          Tab 2
        </button>
        <button
          className="tab-button"
          onClick={(event) => {
            openTab({ event, tabName: "tab3" });
          }}
        >
          Tab 3
        </button>
      </div>

      <div id="tab1" className="tab-content active">
        <h3>Content for Tab 1</h3>
        <p>This is the content displayed when Tab 1 is active.</p>
      </div>

      <div id="tab2" className="tab-content">
        <h3>Content for Tab 2</h3>
        <p>This is the content displayed when Tab 2 is active.</p>
      </div>

      <div id="tab3" className="tab-content">
        <h3>Content for Tab 3</h3>
        <p>This is the content displayed when Tab 3 is active.</p>
      </div>
    </div>
  );
};

export default Tabs;
