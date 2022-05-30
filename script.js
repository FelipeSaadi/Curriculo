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
        console.log(ability)
        $("#abilities-section ul")[0].innerHTML += `<li>${ability.name}</li>`
    });
}
getAbilities()

// hobbies.forEach(item => {
//     $("#hobbies-section ul")[0].innerHTML += `<li>${item}</li>`
// })