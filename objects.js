const elizSangerCampaign = {
    congressionalDistrict: "5th",
    platformStatements: 
        {
            taxes: "decrease taxes",
            jobs: "create more jobs",
            infrastructure: "stronger",
            healthCare: "free for all",
            crimeAndEnforcement: "more law enforecement"
        },
    donationURL: "http://www.cool.com",
    calendar: "",
    volunteerInfo: 
    {
        name: "Jenn",
        address: "1516 Yomamma Dr",
        email: "gospamyourself@gmail.com",
        phoneNumber: "555-555-5555",
        availability: "no",
        acvivity: "clean toilets"
    },
    biography: "She's a really cool girl.",
    imageGallery: ["headshot", "familyPic", "constituentsPic"],
    missionStatement: "Let do this",
    registeringURL: "http://www.coolgirl.com"
}


const changeCampaignState = (key, nestedKey, value) => {
    elizSangerCampaign[key][nestedKey] = value;
}

const changeCampaignState2 = (key, value) => {
    elizSangerCampaign[key] = value;
}
changeCampaignState("platformStatements", "taxes", "6")
console.log(elizSangerCampaign.platformStatements)
changeCampaignState2("calendar", "january 5th")
console.log(elizSangerCampaign.calendar)

const article = document.createElement('article');
article.setAttribute("id", "fifth");

const district = document.createTextNode(elizSangerCampaign.congressionalDistrict);
article.appendChild(district)

for (key in elizSangerCampaign) {
    if (key === "platformStatements") {
        let divStatements= document.createElement('div')
        
        for (platformStatement in elizSangerCampaign[key]) {
            let pStatements = document.createElement('p')
            pStatements.textContent = `${platformStatement}: ${elizSangerCampaign[key][platformStatement]}`
            divStatements.appendChild(pStatements)
        }
        article.appendChild(divStatements)
    }
}

for (key in elizSangerCampaign) {
    if (key === "volunteerInfo") {
        let divVolunteer= document.createElement('div')
        
        for (volunteerInfo in elizSangerCampaign[key]) {
            let vInfo = document.createElement('p')
            vInfo.textContent = `${volunteerInfo}: ${elizSangerCampaign[key][volunteerInfo]}`
            divVolunteer.appendChild(vInfo)
        }
        article.appendChild(divVolunteer)
    }
}

document.querySelector("#section").append(article);