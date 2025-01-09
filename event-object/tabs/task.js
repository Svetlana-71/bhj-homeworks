let tabs = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.tab__content');

const switchTab = function(index) {
    tabs.forEach(tab => tab.classList.remove('tab_active'));
    tabContents.forEach(tabContent => tabContent.classList.remove('tab__content_active'));
    tabs[index].classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active');
}

tabs.forEach((tab, index) => tab.addEventListener('click', () => switchTab(index)));







 

