"use strict"; 

function setUpTabMenu(tabSwitcherID, contentWrapperID) {

    const tabSwitcher = document.getElementById(tabSwitcherID);
    const tabItems = [...tabSwitcher.children];
    const tabContent = [...document.getElementById(contentWrapperID).children];

    if(tabContent.length !== tabItems.length) {
        console.error('amout of content items is not equal to amount of tabs in switcher');
    }
    
    // asigning IDs for tabs
    tabItems.forEach(tabItem => tabItem.id = `${tabItem.textContent.replace(/\s+/g, '').toLowerCase()}Tab`);
    tabContent.forEach(tab => tab.id = tab.previousSibling.previousSibling.textContent.replace(/\s+/g, '').toLowerCase());

    tabItems.forEach(tab => tab.className = `services-menu-tab`);
    tabItems[0].classList.add('active-tab');

    tabItems.forEach(tab => {
        const contentTab = document.getElementById(`${tab.id.replace('Tab','')}`);
        tab.className === 'services-menu-tab active-tab' ? contentTab.style.display = 'grid' : contentTab.style.display = 'none';
    });
    
    // setting up click activity
    tabSwitcher.addEventListener('click', ev => {
        const tabs = [...ev.currentTarget.children]
        const tabsContent = [...ev.currentTarget.nextElementSibling.children];
        const currentTabIndex = tabs.indexOf(ev.target);  
        
        tabs.forEach(tab => tab.className = 'services-menu-tab');
        
        if(tabs[currentTabIndex].id.replace('Tab','') === tabsContent[currentTabIndex].id) {
            tabs[currentTabIndex].classList.add('active-tab');
            tabsContent.forEach(tab => tab.style.display = 'none');
            tabsContent[currentTabIndex].style.display = 'grid';
        
        } else {
            const activeContent = document.getElementById(`${tabs[currentTabIndex].id.replace('Tab','')}`);
            tabs[currentTabIndex].classList.add('active-tab');
            tabsContent.forEach(tab => tab.style.display = 'none');
            activeContent.style.display = 'grid';
        }
    });
}

setUpTabMenu('seriveMenuSwitcher', 'servicesContent');
