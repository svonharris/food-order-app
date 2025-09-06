// import React from 'react'
import "./Tabs.css";

const Tabs = () => {
  //   const i;
  //   const tabcontent;
  //   const tablinks;

  //   const tabcontent = () => {
  //     document.getElementsByClassName("tab-content");
  //   };

  //   const tabcontent = document.getElementsByClassName("tab-content");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }

  // tabcontent.map((tab) => {});

  function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    console.log(tabcontent);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-button" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Set the first tab as active by default when the page loads
  document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".tab-button").click();
  });

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        <button
          className="tab-button active"
          onClick={() => {
            openTab(event, "tab1");
          }}
        >
          Tab 1
        </button>
        <button
          className="tab-button"
          onClick={() => {
            openTab(event, "tab2");
          }}
        >
          Tab 2
        </button>
        <button
          className="tab-button"
          onClick={() => {
            openTab(event, "tab3");
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
