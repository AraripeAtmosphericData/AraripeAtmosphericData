const ulRelatorioHtml = document.getElementById("ulRelatorio")
const temperaturaHtml = document.getElementById("1")
const pressaoHtml = document.getElementById("2")
const bateriaHtml = document.getElementById("3")
const payloadAltitudeHtml = document.getElementById("10")
const payloadCo2Html = document.getElementById("11")
const payloadVocHtml = document.getElementById("12")
const inputHtml = document.getElementById("input")
const tempHtml = document.getElementById("4")
const pressHtml= document.getElementById("5") 
const batteryHtml= document.getElementById("6")
const altHtml = document.getElementById("7")
const vocHtml = document.getElementById("9")
const co2Html = document.getElementById("8")
const btnInfo = document.getElementById("btn-info")
const title = document.getElementById("title-h1")
const logo = document.getElementById("logo")
const bar = document.getElementById("bar")
const menu = document.getElementById("menu-a")
const menuUl = document.getElementById("menu-ul")
const loader = document.getElementById("load")
const btnStart = document.getElementById("btn1")
const divInfo = document.getElementById("divInfo")
const divCodes = document.getElementById("divCode")
const specifiedElement1 = bar
let  codigo
let codigoAnterior
let status
const timeout = setTimeout(search, 6000)
clearTimeout(timeout)
let id
let x
let y = 0

let dadosAtuais 
let dadoAnterior 


console.log(screen.width)
console.log(screen.height)

if (screen.width <768) {
    btnInfo.addEventListener('mouseenter', () => {
        showGuide(2)
      });
      btnInfo.addEventListener('mouseleave', () => {
        closeGuide(2)
      });
    btnInfo.style.width ="7vh"
    btnInfo.style.height ="5vh"
    btnInfo.style.fontSize ="1.5vh"
    btnInfo.style.borderRadius ="2vh"

} else {
    btnInfo.addEventListener('mouseenter', () => {
        showGuide(1)
    });
    btnInfo.addEventListener('mouseleave', () => {
        closeGuide(1)
    });
    title.style.fontSize = "8vh"
    title.style.width= "50%"
    logo.style.width= "25%"
    btnInfo.innerHTML = "Guia de Uso"
}
document.addEventListener("click", (event) => {
    const isClickInside = specifiedElement1.contains(event.target);
    if (isClickInside) {
      console.log("a")
    } else {
        if( bar.style.width=="21vh" | bar.style.width=="30vh"){
            divInfo.style.display = "none"
            divCodes.style.display = "none"
            menuUl.style.display ="none"
            bar.style.height ="4%"
            bar.style.width ="4vh"
                menu.style.display ="flex"
        }
    }
})
function showGuide(mode) {
    if(mode == 1) {
        btnInfo.innerHTML = ""
        btnInfo.style.width ="70vh"
        btnInfo.style.height ="20vh"
        btnInfo.addEventListener('transitionend', () => {
            btnInfo.innerHTML = "preencha o campo em branco com o codigo de indentificação , '13789' por exemplo,  e clique em 'Iniciar Busca' para visualizar seus dados"
          });
        } 
        if(mode == 2) {
            btnInfo.innerHTML = ""
            btnInfo.style.width ="45vh"
            btnInfo.style.height ="18vh"
            btnInfo.style.fontSize ="2vh"
            btnInfo.addEventListener('transitionend', () => {
                btnInfo.innerHTML = "preencha o campo em branco com o codigo de indentificação , '13789' por exemplo,  e clique em 'Iniciar Busca' para visualizar seus dados"
              });
            } 
   

}
function sideBar() {
        bar.style.height= "14vh"
        bar.style.width= "21vh"
        menu.style.display ="none"
        setTimeout(()=>{
            menuUl.style.display ="flex"
        },350)
}
function infoList() {
    if(divInfo.style.display == "initial") {} else {
    let height = parseFloat(bar.style.height)+40
    bar.style.height= height+"vh"
    bar.style.width= "30vh"
    setTimeout(()=>{
         divInfo.style.display = "initial"
    },300)
    }
}
function codeList() {
    if(divCodes.style.display == "initial") {} else {
    let height = parseFloat(bar.style.height)+12
    bar.style.height= height+"vh"
    bar.style.width= "30vh"
    setTimeout(()=>{
         divCodes.style.display = "initial"
    },300)
    }
}
function closeGuide(mode) {
    if(mode == 1) {
    btnInfo.innerHTML = ""
    btnInfo.style.width ="26vh"
    btnInfo.style.height ="6vh"
    btnInfo.addEventListener('transitionend', () => {
        btnInfo.innerHTML = "Guia de Uso"
      });
    } 
    if(mode == 2) {
        btnInfo.innerHTML = ""
        btnInfo.style.width ="7vh"
        btnInfo.style.height ="5vh"
        btnInfo.style.fontSize ="1.5vh"
        btnInfo.addEventListener('transitionend', () => {
            btnInfo.innerHTML = "Guia"
          });
        } 
}
function visibilidade(type) {
    if(type == 0) {
        pressaoHtml.classList.add("transparent")
        bateriaHtml.classList.add("transparent")
        payloadAltitudeHtml.classList.add("transparent")
        payloadCo2Html.classList.add("transparent")
        payloadVocHtml.classList.add("transparent")
    } else if (type == 1) {
        pressaoHtml.classList.remove("transparent")
        bateriaHtml.classList.remove("transparent")
        payloadAltitudeHtml.classList.remove("transparent")
        payloadCo2Html.classList.remove("transparent")
        payloadVocHtml.classList.remove("transparent")
    } else if (type == 2) {
        pressHtml.classList.remove("transparent")
        batteryHtml.classList.remove("transparent")
        altHtml.classList.remove("transparent")
        co2Html.classList.remove("transparent")
        vocHtml.classList.remove("transparent")
    } else if (type == 3) {
        pressHtml.classList.add("transparent")
        batteryHtml.classList.add("transparent")
        altHtml.classList.add("transparent")
        co2Html.classList.add("transparent")
        vocHtml.classList.add("transparent")
    }
}
visibilidade(0)
visibilidade(3)


function comparar() {

        let tempDif = dadosAtuais.temperatura - dadoAnterior.temperatura 
    
        if(dadoAnterior.temperatura < dadosAtuais.temperatura) {
            tempHtml.innerHTML = "Δ Temperatura:  "+ tempDif.toFixed(3)+" °C"
        } else {
            tempHtml.innerHTML = "Δ Temperatura: "+ tempDif.toFixed(3)+" °C"
        }
        let batteryDif = dadosAtuais.bateria - dadoAnterior.bateria
        if(dadoAnterior.bateria < dadosAtuais.bateria) {
            batteryHtml.innerHTML = "Δ Bateria: + "+ batteryDif.toFixed(3)+"%"
        } else {
            batteryHtml.innerHTML = "Δ Bateria: "+ batteryDif.toFixed(3)+"%"
        }
    
        let pressDif = dadosAtuais.pressao  - dadoAnterior.pressao 
        if(dadoAnterior.pressao < dadosAtuais.pressao) {
            pressHtml.innerHTML = "Δ Pressão:  "+pressDif.toFixed(3)+" Kpa"
        } else {
            pressHtml.innerHTML = "Δ Pressão: "+pressDif.toFixed(3)+" Kpa"
        }
        let altDif =  dadosAtuais.altitude-dadoAnterior.altitude
        if(dadoAnterior.altitude < dadosAtuais.altitude) {
            altHtml.innerHTML = "Δ Altitude:  "+altDif.toFixed(3)+" m"
        } else {
            altHtml.innerHTML = "Δ Altitude: "+altDif.toFixed(3)+" m"
        }
        let vocDif = dadosAtuais.voc-dadoAnterior.voc
        if(dadoAnterior.altitude < dadosAtuais.altitude) {
            vocHtml.innerHTML = "Δ VOC:  "+vocDif.toFixed(3)+" ppb"
        } else {
            vocHtml.innerHTML = "Δ VOC: "+vocDif.toFixed(3)+" ppb"
        }
        let co2Dif = dadosAtuais.co2-dadoAnterior.co2
        if(dadoAnterior.co2 < dadosAtuais.co2) {
            co2Html.innerHTML = "Δ CO2:  "+co2Dif.toFixed(3)+" ppm"
        } else {
            co2Html.innerHTML = "Δ CO2: "+co2Dif.toFixed(3)+" ppm"
        }
        
            setTimeout(visibilidade(2),400)
}
function search() {
    getData()
    if(status == "on") {
        dadoAnterior = dadosAtuais
    } else {
        console.log("off")
    }

    if(keepGoing) {
        setTimeout(search, 6000);
    }
}

function startLoop() {
    if (btnStart.disabled == false) {
    keepGoing = true;
    btnStart.innerHTML = '<div id="load"  class=loader>'
    codigo = inputHtml.value
    btnStart.disabled = true
    status = "on"
    search();
    } else {
        console.log("já funcionando")
    }
}

function stopSearch() {
    keepGoing = false;
    status = "off"
    clearTimeout(timeout)
    dadoAnterior = undefined
    dadoAtual = undefined
    codigoAnterior = codigo
    setTimeout(()=>{
    btnStart.innerText = "Iniciar Busca"
    btnStart.disabled = false},5000)
    
}
function getData() {
    if (inputHtml.value == "") {
        console.log("sem identificador")
        btnStart.innerText = "Iniciar Busca"
        btnStart.disabled = false
    } else {
        let link = (`https://api-project-smoky.vercel.app/getdata/${codigo}`).toString()

        fetch(link).then((response => response.json())).then( data =>{
        

    payloadAltitudeHtml.innerHTML = "Altitude = " +data[0].payload.altitude.toFixed(3)+" m"
    payloadCo2Html.innerHTML = "CO2 = " + data[0].payload.co2.toFixed(3)+" ppm"
    payloadVocHtml.innerHTML = "VOC's = " +data[0].payload.voc.toFixed(3)+" ppm"
    temperaturaHtml.innerHTML= "Temperatura = "+data[0].temperatura.toFixed(3)+" °C"
    pressaoHtml.innerHTML= "Pressao = "+(data[0].pressao/1000).toFixed(3)+" Kpa"
    bateriaHtml.innerHTML= "Bateria= "+((data[0].bateria/2600)*100).toFixed(2)+"%"
    if(id==undefined) {
        setTimeout(visibilidade(1),400)
    }
    id = data[0]._id
    dadosAtuais = {
        temperatura:data[0].temperatura.toFixed(3),
        pressao:(data[0].pressao/1000).toFixed(3),
        voc:data[0].payload.voc.toFixed(3),
        co2:data[0].payload.co2.toFixed(3),
        altitude:data[0].payload.altitude.toFixed(3),
        bateria:((data[0].bateria/2600)*100)
    }
    console.log(dadosAtuais)
    if(dadoAnterior != undefined) {
        setTimeout(() => {
            if(dadoAnterior.bateria == dadosAtuais.bateria) {
                console.log("dados =")
        } else {
            console.log("dados diferentes")
            if(codigo != codigoAnterior ) {
                console.log("trocando código")
                codigo == codigoAnterior
            } else {
                comparar()
            }
        }
        },500);
    }
    }).catch((err)=>{
    })
 }
}

function enterListener() {
    window.addEventListener("keydown", (event) => {
        if(event.keyCode == 13) {
            startLoop()
        }
    })
}
