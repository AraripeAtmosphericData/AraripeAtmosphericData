const divHome = document.getElementById("div-home")
const divImg = document.getElementById("div-img")
const divAbout = document.getElementById("div-about")
const paragrafoInicio = document.getElementById("p1")
const paragrafoSobre = document.getElementById("p2")
const paragrafoImagens = document.getElementById("p3")

if (screen.width <= 320) {
    //celular pequeno
    paragrafoInicio.style.fontSize = "1.7vh"
    paragrafoSobre.style.fontSize = "1.7vh"
    paragrafoImagens.style.fontSize = "1.7vh"
} else if (screen.width > 320 && screen.width <=425) {
    paragrafoInicio.style.fontSize = "2.5vh"
    paragrafoSobre.style.fontSize = "2.5vh"
    paragrafoImagens.style.fontSize = "2.5vh"
} else if (screen.width > 425 && screen.width <=1024) {
    paragrafoInicio.style.fontSize = "3.5vh"
    paragrafoSobre.style.fontSize = "3.5vh"
    paragrafoImagens.style.fontSize = "3.5vh"
} else if (screen.width > 1024 ) {
    paragrafoInicio.style.fontSize = "4vh"
    paragrafoSobre.style.fontSize = "4vh"
    paragrafoImagens.style.fontSize = "4vh"
}

setTimeout( selectSection(1) , 500)

function selectSection(sectionId) {
    if (sectionId == 1) {
        divHome.style.display = "initial"
        divImg.style.display = "none"
        divAbout.style.display = "none"
    }
    if (sectionId == 2) {
        divAbout.style.display = "initial"
        divHome.style.display = "none"
        divImg.style.display = "none"
    }
    
    if (sectionId == 3) {
        divAbout.style.display = "none"
        divHome.style.display = "none"
        divImg.style.display = "initial"
    }
}
