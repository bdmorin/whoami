const randomTitleData = require("../data/randomTitle.json")

function randomTitle() {
    const randomInt = Math.floor(Math.random() * randomTitleData.length);
    return `${randomTitleData[randomInt].hello}!`;
};

export default randomTitle