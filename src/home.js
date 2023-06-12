const contentDiv = document.querySelector(".content-div")

const generateDiv = (divName) => {
    const div = document.createElement("div");
    div.classList.add(divName);
    return div;
}

const generateAboutUs = () => {
    
    contentDiv.innerHTML = ""

    // Generate content for header Div
    const generateHeader = (() => {
        const header = generateDiv("content-subheader");
        header.innerText = "Our Story So Far...";
        return header;
    })();

    // Generate content for about us blurb
    const generateDivOne = (()=> {
        const divOne = generateDiv("content-body");
        const signature = generateDiv("signature");
        const storyDiv = generateDiv("content-text")
        storyDiv.innerText = "Our story began in the mind of Bryan in 2023, where he dreamed of a restaurant that can offer you Liberty, Freedom, Happiness and so much more. So welcome to Liberty Inc. Restaurant, where culinary innovation confronts the crushing monotony of reality. Under the guidance of our visionary head chef, Bryan, we strive to break free from the monotonous chains of your daily lives and serve up a truly revolutionary dining experience. True happiness comes from consuming our exquisite dishes, so why wait when you can have it all now ...";
        signature.innerText = "Bryan L. Chow";
        divOne.appendChild(storyDiv);
        divOne.appendChild(signature);
        return divOne;
    })();

    //  Generate content for opening hours
    const generateDivTwo = (() => {
        const divTwo = generateDiv("content-body");
        const hoursHeader = generateDiv("content-subheader");
        hoursHeader.innerText = "When Liberty is open..."
        const hours = [
            "Sunday: 5pm - 1am", 
            "Monday: 1am - 3pm",
            "Tuesday: 12:04am - 12:06am",
            "Wednesday: 1pm - 1pm",
            "Thursday: 12pm - 12am",
            "Friday: 12pm - 12am",
            "Saturday: 9am",
        ]
        const hoursList = document.createElement("ul");
        hours.forEach(item => {
            const li = document.createElement("li");
            li.classList.add("hours-item");
            li.innerText= item;
            hoursList.appendChild(li);
        });
        divTwo.appendChild(hoursHeader);
        divTwo.appendChild(hoursList)
        return divTwo;
    })();

    // Generate content for location
    const generateDivThree = (() => {
        const divThree = generateDiv("content-body");
        const locationDiv = generateDiv("content-text");
        const locationHeader = generateDiv("content-subheader");
        locationHeader.innerText = "Where you can find Liberty..."
        locationDiv.innerText = `Liberty Restaurant Inc.,
            74 Fantusion Avenue,
            Follow the bright lights,
            And you will find us and everything you dream of...`;
        divThree.appendChild(locationHeader);
        divThree.appendChild(locationDiv);
        return divThree;
    })();

    // Appends all generated divs to content body
    contentDiv.appendChild(generateHeader);
    contentDiv.appendChild(generateDivOne);
    contentDiv.appendChild(generateDivTwo);
    contentDiv.appendChild(generateDivThree);
};



export {generateAboutUs};