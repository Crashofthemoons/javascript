const LookEast = Object.create({}, {
    business: {
        value: "Look East",
        enumerable: true,
        writable: false
    },
    employmentStart: {
        value: "2017",
        enumerable: true,
        writable: false
    },
    employmentEnd: {
        value: "2018",
        enumerable: true,
        writable: false
    },
    jobTitle: {
        value: "Optician",
        enumerable: true,
        writable: false     
    },
    pros: {
        value: "Great team and good pay.",
        enumerable: true,
        writable: false
    },
    cons: {
        value: "No room to grow.",
        enumerable: true,
        writable: false
    }
})

const FamilyVisionCare = Object.create({}, {
    business: {
        value: "Family Vision Care",
        enumerable: true,
        writable: false
    },
    employmentStart: {
        value: "2016",
        enumerable: true,
        writable: false
    },
    employmentEnd: {
        value: "2017",
        enumerable: true,
        writable: false
    },
    jobTitle: {
        value: "Optician and Technician",
        enumerable: true,
        writable: false     
    },
    pros: {
    value: "Great team and good pay.",
    enumerable: true,
    writable: false
    },
    cons: {
        value: "No room to grow and long commute.",
        enumerable: true,
        writable: false
    }
})

const MusicCityOptical = Object.create({}, {
    business: {
        value: "Music City Optical",
        enumerable: true,
        writable: false
    },
    employmentStart: {
        value: "2015",
        enumerable: true,
        writable: false
    },
    employmentEnd: {
        value: "2016",
        enumerable: true,
        writable: false
    },
    jobTitle: {
        value: "Optician, Technician and Receptionist.",
        enumerable: true,
        writable: false     
    },
    pros: {
        value: "Great way to get back in the optical field.",
        enumerable: true,
        writable: false
    },
    cons: {
        value: "Crazy boss and high turnover rate",
        enumerable: true,
        writable: false
    }
})

const TheChefAndI = Object.create({}, {
    business: {
        value: "The Chef and I",
        enumerable: true,
        writable: false
    },
    employmentStart: {
        value: "2015",
        enumerable: true,
        writable: false
    },
    employmentEnd: {
        value: "2016",
        enumerable: true,
        writable: false
    },
    jobTitle: {
        value: "Personal Assistant",
        enumerable: true,
        writable: false     
    },
    pros: {
        value: "Good opportunity to try a new field of work.",
        enumerable: true,
        writable: false
    },
    cons: {
        value: "Not enough pay and needed more working hours.",
        enumerable: true,
        writable: false
    }
})

const Forever21 = Object.create({}, {
    business: {
        value: "Forever 21",
        enumerable: true,
        writable: false
    },
    employmentStart: {
        value: "2014",
        enumerable: true,
        writable: false
    },
    employmentEnd: {
        value: "2016",
        enumerable: true,
        writable: false
    },
    jobTitle: {
        value: "Head Cashier",
        enumerable: true,
        writable: false     
    },
    pros: {
        value: "Fairly easy job, relaxing environment.",
        enumerable: true,
        writable: false
    },
    cons: {
        value: "Not the field of work I wanted to continue in.",
        enumerable: true,
        writable: false
    }
})

// const business = {
//     value: "Lens Crafters",
//     enumerable: true,
//     writable: false
// }

// const employmentStart = {
//     value: "2010",
//     enumerable: true,
//     writable: false
// }
let newJob = {};

const JobMaker = (businessName, employmentStartDate, employmentEndDate, jobTitleName, prosList, consList) => {

    newJob = Object.create({}, {
        business: {
            value: businessName,
            numerable: true,
            writable: false
        },
        employmentStart: {
            value: employmentStartDate,
            enumerable: true,
            writable: false
        },
        employmentEnd: {
            value: employmentEndDate,
            enumerable: true,
            writable: false
        },
        jobTitle: {
            value: jobTitleName,
            enumerable: true,
            writable: false     
        },
        pros: {
            value: prosList,
            enumerable: true,
            writable: false
        },
        cons: {
            value: consList,
            enumerable: true,
            writable: false
        } 
        
    })
    
    return newJob
}



JobMaker("Lens Crafters", "2012", "2014", "Receptionist", "cool beans", "not cool beans")

console.log(newJob)

// Put each of your jobs into an array.
// Iterate over the array, and use document.createElement() to build an <article> element representing each job. The id property of the element should be the name of the business.

const jobArray = [];

jobArray.push(LookEast, FamilyVisionCare, MusicCityOptical, TheChefAndI, Forever21, newJob)

console.log(jobArray)

for (let i = 0; i < jobArray.length; i++) {
    let ar = document.createElement("article")
    ar.setAttribute("id", jobArray[i].business)
    let p = document.createTextNode(jobArray[i].jobTitle)
    ar.appendChild(p)
    let sect = document.querySelector('#coolio')
    sect.appendChild(ar)
}

