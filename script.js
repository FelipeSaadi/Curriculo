$(".section-bar").css({
    width: "80%",
    backgroundColor: "#EBDDD6",
    height: "3px",
    margin: "20px 0 20px 0"
})

function getPersonalData() {
    let url = "/personalData"

    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", url, false)
    xhttp.send()

    let data = JSON.parse(xhttp.responseText)[0]
    
    $("#photo-section")[0].innerHTML = `<img id="photo" src="${data.image_url}">`
    $("#profile-name-title")[0].innerText = data.name.toUpperCase()
    $("#profile-course")[0].innerText = data.course.toUpperCase()
    $("#personal-description")[0].innerText = data.description
    $("#contact-section ul")[0].innerHTML = `
        <li>${data.adress}</li>
        <li>${data.email}</li>
        <a target="blank" href="${data.linkedin_url}">
            <li>
                ${data.linkedin_name}
            </li>
        </a>
    `
}
getPersonalData()

function getAbilities() {
    let url = "/abilities"

    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", url, false)
    xhttp.send()

    let data = JSON.parse(xhttp.responseText)

    data.forEach(ability => {
        $("#abilities-section ul")[0].innerHTML += `<li>${ability.name}</li>`
    });
}
getAbilities()

function getProfessionalHistory() {
    let url = "professionalhistory"

    let xhttp = new XMLHttpRequest()
    xhttp.open("get", url, false)
    xhttp.send()

    let data = JSON.parse(xhttp.responseText)

    data.forEach(professional => {
        $("#professional-section")[0].innerHTML += `
            <div class="section">
                <h3 class="section-subtitle">
                    ${professional.title}
                </h3>
                <h4 class="section-subtitle-description">
                    ${professional.subtitle}
                </h4>
                ${professional.description ? `<p class="section-description">${professional.description}</p>` : ' '}
            </div>
        `
    })
}
getProfessionalHistory()

function getEducationalHistory() {
    let url = "educationalhistory"

    let xhttp = new XMLHttpRequest()
    xhttp.open("get", url, false)
    xhttp.send()

    let data = JSON.parse(xhttp.responseText)

    data.forEach(education => {
        $("#educacional-section")[0].innerHTML += `
            <div class="section">
                <h3 class="section-subtitle">
                    ${education.title}
                </h3>
                <h4 class="section-subtitle-description">
                    ${education.subtitle}
                </h4>
                ${education.description ? `<p class="section-description">${education.description}</p>` : ' '}
            </div>
        `
    })
}
getEducationalHistory()

function getHobbies() {
    let url = "/hobbies"

    let xhttp = new XMLHttpRequest()
    xhttp.open("get", url, false)
    xhttp.send()

    let data = JSON.parse(xhttp.responseText)

    data.forEach(hobbie => {
        $("#hobbies-section ul")[0].innerHTML += `<li>${hobbie.name}</li>`
    })
}
getHobbies()