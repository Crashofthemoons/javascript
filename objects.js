const elizSangerCampaign = {
    congressionalDistrict: "5",
    platformStatements: [
        {
            taxes: "decrease taxes",
            jobs: "create more jobs",
            infrastructure: "stronger",
            healthCare: "free for all",
            crimeAndEnforcement: "more law enforecement"
        }
    ],
    donationURL: "http://www.cool.com",
    calendar: "",
    volunteerInfo: [
    {
        name: "Jenn",
        address: "1516 Yomamma Dr",
        email: "gospamyourself@gmail.com",
        phoneNumber: "555-555-5555",
        availability: "no",
        acvivity: "clean toilets"
    }
    ],
    biography: "She's a really cool girl.",
    imageGallery: ["headshot", "familyPic", "constituentsPic"],
    missionStatement: "Let do this",
    registeringURL: "http://www.coolgirl.com"
}

const changeCampaignState = (key, value) => {
    elizSangerCampaign[key] = String(value);
    return changeCampaignState;
}
console.log(changeCampaignState(elizSangerCampaign[0], "6"));