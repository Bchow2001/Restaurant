
const addHomeTabName = () => {
    const tabName = document.querySelector(".tab-name");
    tabName.InnerHTML ="";
    tabName.innerText = "About Us";
};

const addHomeContent = () => {
    const content = document.querySelector(".content");
};

export {addHomeTabName, addHomeContent};