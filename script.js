$(".section-bar").css({
    width: "80%",
    backgroundColor: "#EBDDD6",
    height: "3px",
    margin: "20px 0 20px 0"
})

let hobbies = [
    "Ler Livros",
    "Futebol",
    "Estudar",
    "Participar de Projetos",
    "Sair com os amigos"
]

let abilities = [
    "Linguagens (HTML, CSS, Python, Javascript e React).",
    "Comunicação.",
    "Trabalho em Equipe.",
    "Liderança.",
    "Proatividade.",
    "Pensamento Crítico.",
    "Escuta ativo.",
    "Criatividade para criação de Soluções Tecnológicas"
]

hobbies.forEach(item => {
    $("#hobbies-section ul")[0].innerHTML += `<li>${item}</li>`
})

abilities.forEach(item => {
    $("#abilities-section ul")[0].innerHTML += `<li>${item}</li>`
})