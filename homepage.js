const divHome = document.getElementById("div-home")
const divImg = document.getElementById("div-img")
const divAbout = document.getElementById("div-about")

if (screen.width <= 400) {
    //celular pequeno
    paragrafoInicio.style.fontSize = "1.5vh"
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
