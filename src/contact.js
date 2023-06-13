const contentDiv = document.querySelector(".content-div");

const generateDiv = (divName) => {
    const div = document.createElement("div");
    div.classList.add(divName);
    return div;
};

const generateContactUs = () => {
    contentDiv.innerHTML = "";

    // Generate content for header div
    const generateHeader = (() => {
        const header = generateDiv("content-main-header");
        header.innerText = "Find Your Freedom...";
        return header;
    })();

    contentDiv.appendChild(generateHeader);

    // Function to generate contact details
    const generateContactItems = (name, position, telephone, email, img) => {
        const contactItem = generateDiv("content-body");
        const contactName = generateDiv("signature");
        const contactPosition = generateDiv("content-text");
        const contactTelephone = generateDiv("content-text");
        const contactEmail= generateDiv("content-text");
        const contactImg = generateDiv(img);

        contactName.innerText = name;
        contactPosition.innerText = position;
        contactTelephone.innerText = telephone;
        contactEmail.innerText = email;

        contactItem.append(contactName);
        contactItem.append(contactPosition);
        contactItem.append(contactTelephone);
        contactItem.append(contactEmail);
        contactItem.append(contactImg);

        contentDiv.appendChild(contactItem);
    };

    const contactArray = [
        [
            "L. Tine",
            "Head Chef/Visiongogue",
            "+66-09123-917122",
            "LTine.Vision@LibertyInc.com",
            "chef",
        ],
        [
            "H. Morg",
            "Chief Information Supervisor",
            "+**-231a9-24l16",
            "HMorg.Info@LibertyInc.com",
            "chief",
        ],
        [
            "V. Ziek",
            "Master of Freedom",
            "-15-0.123-5.981",
            "VZiek.Freedom.LibertyInc.com",
            "freedom",
        ],
    ];

    contactArray.forEach((item) => {
        generateContactItems(...item);
    });
};

export {generateContactUs};