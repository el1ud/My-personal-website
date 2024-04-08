let links= document.getElementsByClassName("links");
let tabContent = document.getElementsByClassName("tab-content");
function openTab(tabname){
    for(links of links){
        links.classlist.remove("active-link");
    }
    for (tabContent of tabContent){
        tabContent.classlist.remove("active-tab")
    }
    event.currentTarget.classlist.add("active-link");
    document.getElementById(tabname).classlist.add("active-tab")

}