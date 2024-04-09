const tabLinks= Array.from (document.getElementsByClassName("tab-links"));
const tabcontent = Array.from(document.getElementsByClassName("tab-content"));

function openTab(event, tabname) {
    event.preventDefault(); 
  
    for (const tabLink of tabLinks) {
      tabLink.classList.remove("active-link");
    }
  
    for (const tabContent of tabContent) {
      tabContent.classList.remove("active-tab");
    }
  
    const currentTabLink = event.currentTarget;
    currentTabLink.classList.add("active-link");
  
    const targetTabContent = document.getElementById(tabname);
    targetTabContent.classList.add("active-tab");
  }