const contentDiv = document.querySelector(".content-div");

const generateDiv = (divName) => {
    const div = document.createElement("div");
    div.classList.add(divName);
    return div;
};



const generateMenu = () => {
    contentDiv.innerHTML = "";

    // Generate content for header div
    const generateHeader = (() => {
        const header = generateDiv("content-main-header");
        header.innerText = "Freedom at a Glance...";
        return header;
    })();

    contentDiv.appendChild(generateHeader);

    // Function that creates menu items

    const generateMenuItems = (name, description, price, img) => {
        const menuItem = generateDiv("content-body")
        const menuName = generateDiv("content-subheader");
        const descriptionText = generateDiv("content-text");
        const priceText = generateDiv("price");
        const menuImg = generateDiv(img);

        menuName.innerText = name;
        descriptionText.innerText = description;
        priceText.innerHTML = price;

        menuItem.appendChild(menuName);
        menuItem.appendChild(descriptionText);
        menuItem.appendChild(priceText);
        menuItem.appendChild(menuImg);
        
        contentDiv.appendChild(menuItem);
    };

    // Drinks Section

    const generateDrinkHeader = (() => {
        const drinkHeader = generateDiv("menu-category");
        drinkHeader.innerText = "Beverages...";
        return drinkHeader;
    })();

    contentDiv.appendChild(generateDrinkHeader);

    const drinksArray = [
        [
            "Liberty Shake©", 
            `Taste the freedom, the desire, the potency of youth. You are invincible after all...`, 
            "Only a part of you...", 
            "milkshake",
        ],
        [
            "Alive Tea©",
            `Feel finally alive from our overseas sourced tea, product of our history, unforgettable but for those who don't try...`,
            "Only a peace of your mind...",
            "tea",
        ],
        [
            "Freshest Water©",
            `Perfectly fresh water, reclaimed from mother Earth herself. 100% compliant with our partner Helix Heavy Industries'™ stringent corporate standards...`,
            "Only your thirst...",
            "water",
        ],
    ];

    drinksArray.forEach((item)=> {
        generateMenuItems(...item);
    });

    // Mains Section

    const generateMainsHeader = (() => {
        const mainsHeader = generateDiv("menu-category");
        mainsHeader.innerText = "Mains...";
        return mainsHeader;
    })();

    contentDiv.appendChild(generateMainsHeader);

    const menuArray = [
        [
            "THE EXCESS BURGER©",
            `Why live life in moderation when you can try THE EXCESS BURGER©, break free of saying no and say yes instead to this jumbo-extravaganza of flavour and self-satisfaction. You will be coming back for more...`,
            "Leave behind your inhibitions...",
            "burger",
        ],
        [
            "Too Rare Steak©",
            `Rare and bloody in every sense of the word, the TOO RARE STEAK© comes from our finest Amazonian plantations. Don't think about it, just sit back and enjoy...`,
            "Leave behind your righteousness...",
            "steak",
        ],
        [
            "Truth in Slices©",
            `A culinary masterpiece, dreamt up by our head chef, TRUTH IN SLICES© allows you to experience the harsh truth, one slice at a time, so that even you don't have to worry. It's not your fault...`,
            "Leave behind your empathy...",
            "pizza"
        ],
    ]

    menuArray.forEach((item)=> {
        generateMenuItems(...item);
    });

    // Sides Section

    const generateSidesHeader = (() => {
        const sidesHeader = generateDiv("menu-category");
        sidesHeader.innerText = "Sides...";
        return sidesHeader;
    })();

    contentDiv.appendChild(generateSidesHeader);

    const sidesArray = [
        [
            "The Only Side©",
            `This is The Only Side© you need, the only distraction you need when you are away from listless reality. You have already found Liberty™ what more do you need...`,
            "Relax...",
            "fries",
        ],
    ];

    sidesArray.forEach((item)=> {
        generateMenuItems(...item);
    });


}

export {generateMenu};