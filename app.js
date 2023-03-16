const ulRelatorioHtml = document.getElementById("ulRelatorio");
const temperaturaHtml = document.getElementById("1");
const pressaoHtml = document.getElementById("2");
const bateriaHtml = document.getElementById("3");
const payloadAltitudeHtml = document.getElementById("10");
const payloadCo2Html = document.getElementById("11");
const payloadVocHtml = document.getElementById("12");
const umidadeHtml = document.getElementById("13");
const umidadeHtml2 = document.getElementById("14");
const inputHtml = document.getElementById("input");
const tempHtml = document.getElementById("4");
const pressHtml = document.getElementById("5");
const batteryHtml = document.getElementById("6");
const altHtml = document.getElementById("7");
const vocHtml = document.getElementById("9");
const co2Html = document.getElementById("8");
const btnInfo = document.getElementById("btn-info");
const title = document.getElementById("title-h1");
const logo = document.getElementById("logo");
const bar = document.getElementById("bar");
const menu = document.getElementById("menu-a");
const menuUl = document.getElementById("menu-ul");
const loader = document.getElementById("load");
const btnStart = document.getElementById("btn1");
const divInfo = document.getElementById("divInfo");
const divCodes = document.getElementById("divCode");
const divHist = document.getElementById("div-historico");
const divHistHolder = document.getElementById("div-historico-text");
const btnHist = document.getElementById("btn-historico");
let numberHist = document.getElementById("numero-historico");
let infoHist = document.getElementById("info-historico");
const histHeader = document.getElementById("headerHist");
const stopHist = document.getElementById("btnStopHist");
const inputCodigo2 = document.getElementById("codigo2");
const inputDia = document.getElementById("diaHist");
const specifiedElement1 = bar;
let historico;
let codigo;
let codigo2;
let codigoAnterior;
let status;
const timeout = setTimeout(search, 6000);
clearTimeout(timeout);
let c = 0;
let id;
let x;
let y = 0;
let z = 0;

let dadosAtuais;
let dadoAnterior;

console.log(screen.width);
console.log(screen.height);

if (screen.width < 768) {
  btnInfo.addEventListener("mouseenter", () => {
    showGuide(2);
  });
  btnInfo.addEventListener("mouseleave", () => {
    closeGuide(2);
  });
  btnInfo.style.width = "7vh";
  btnInfo.style.height = "5vh";
  btnInfo.style.fontSize = "1.5vh";
  btnInfo.style.borderRadius = "2vh";
} else {
  btnInfo.addEventListener("mouseenter", () => {
    showGuide(1);
  });
  btnInfo.addEventListener("mouseleave", () => {
    closeGuide(1);
  });
  title.style.fontSize = "8vh";
  title.style.width = "50%";
  logo.style.width = "25%";
  btnInfo.innerHTML = "Guia de Uso";
}
document.addEventListener("click", (event) => {
  const isClickInside = specifiedElement1.contains(event.target);
  if (isClickInside) {
    console.log("a");
  } else {
    if ((bar.style.width == "21vh") | (bar.style.width == "30vh")) {
      divInfo.style.display = "none";
      divCodes.style.display = "none";
      menuUl.style.display = "none";
      bar.style.height = "4%";
      bar.style.width = "4vh";
      menu.style.display = "flex";
    }
  }
});
function showGuide(mode) {
  if (mode == 1) {
    btnInfo.innerHTML = "";
    btnInfo.style.width = "70vh";
    btnInfo.style.height = "20vh";
    btnInfo.addEventListener("transitionend", () => {
      btnInfo.innerHTML =
        "preencha o campo em branco com o codigo de indentificação , '13789' por exemplo,  e clique em 'Iniciar Busca' para visualizar seus dados";
    });
  }
  if (mode == 2) {
    btnInfo.innerHTML = "";
    btnInfo.style.width = "45vh";
    btnInfo.style.height = "18vh";
    btnInfo.style.fontSize = "2vh";
    btnInfo.addEventListener("transitionend", () => {
      btnInfo.innerHTML =
        "preencha o campo em branco com o codigo de indentificação , '13789' por exemplo,  e clique em 'Iniciar Busca' para visualizar seus dados";
    });
  }
}
function sideBar() {
  bar.style.height = "14vh";
  bar.style.width = "21vh";
  menu.style.display = "none";
  setTimeout(() => {
    menuUl.style.display = "flex";
  }, 350);
}
function infoList() {
  if (divInfo.style.display == "initial") {
  } else {
    let height = parseFloat(bar.style.height) + 40;
    bar.style.height = height + "vh";
    bar.style.width = "30vh";
    setTimeout(() => {
      divInfo.style.display = "initial";
    }, 300);
  }
}
function codeList() {
  if (divCodes.style.display == "initial") {
  } else {
    let height = parseFloat(bar.style.height) + 15;
    bar.style.height = height + "vh";
    bar.style.width = "30vh";
    setTimeout(() => {
      divCodes.style.display = "initial";
    }, 300);
  }
}
function closeGuide(mode) {
  if (mode == 1) {
    btnInfo.innerHTML = "";
    btnInfo.style.width = "26vh";
    btnInfo.style.height = "6vh";
    btnInfo.addEventListener("transitionend", () => {
      btnInfo.innerHTML = "Guia de Uso";
    });
  }
  if (mode == 2) {
    btnInfo.innerHTML = "";
    btnInfo.style.width = "7vh";
    btnInfo.style.height = "5vh";
    btnInfo.style.fontSize = "1.5vh";
    btnInfo.addEventListener("transitionend", () => {
      btnInfo.innerHTML = "Guia";
    });
  }
}
function visibilidade(type) {
  if (type == 0) {
    pressaoHtml.classList.add("transparent");
    bateriaHtml.classList.add("transparent");
    payloadAltitudeHtml.classList.add("transparent");
    payloadCo2Html.classList.add("transparent");
    payloadVocHtml.classList.add("transparent");
    umidadeHtml.classList.add("transparent");
  } else if (type == 1) {
    pressaoHtml.classList.remove("transparent");
    bateriaHtml.classList.remove("transparent");
    payloadAltitudeHtml.classList.remove("transparent");
    payloadCo2Html.classList.remove("transparent");
    payloadVocHtml.classList.remove("transparent");
    umidadeHtml.classList.remove("transparent");
  } else if (type == 2) {
    pressHtml.classList.remove("transparent");
    batteryHtml.classList.remove("transparent");
    altHtml.classList.remove("transparent");
    co2Html.classList.remove("transparent");
    vocHtml.classList.remove("transparent");
    umidadeHtml2.classList.remove("transparent");
  } else if (type == 3) {
    pressHtml.classList.add("transparent");
    batteryHtml.classList.add("transparent");
    altHtml.classList.add("transparent");
    co2Html.classList.add("transparent");
    vocHtml.classList.add("transparent");
    umidadeHtml2.classList.add("transparent");
  }
}
visibilidade(0);
visibilidade(3);

function comparar() {
  if (dadoAnterior == 0) {
  } else {
    let tempDif = dadosAtuais.temperatura - dadoAnterior.temperatura;

    if (dadoAnterior.temperatura < dadosAtuais.temperatura) {
      tempHtml.innerHTML = "Δ Temperatura:  " + tempDif.toFixed(3) + " °C";
    } else {
      tempHtml.innerHTML = "Δ Temperatura: " + tempDif.toFixed(3) + " °C";
    }
    let batteryDif = dadosAtuais.bateria - dadoAnterior.bateria;
    if (dadoAnterior.bateria < dadosAtuais.bateria) {
      batteryHtml.innerHTML = "Δ Bateria: + " + batteryDif.toFixed(3) + "%";
    } else {
      batteryHtml.innerHTML = "Δ Bateria: " + batteryDif.toFixed(3) + "%";
    }

    let pressDif = dadosAtuais.pressao - dadoAnterior.pressao;
    if (dadoAnterior.pressao < dadosAtuais.pressao) {
      pressHtml.innerHTML = "Δ Pressão:  " + pressDif.toFixed(3) + " Kpa";
    } else {
      pressHtml.innerHTML = "Δ Pressão: " + pressDif.toFixed(3) + " Kpa";
    }
    let altDif = dadosAtuais.altitude - dadoAnterior.altitude;
    if (dadoAnterior.altitude < dadosAtuais.altitude) {
      altHtml.innerHTML = "Δ Altitude:  " + altDif.toFixed(3) + " m";
    } else {
      altHtml.innerHTML = "Δ Altitude: " + altDif.toFixed(3) + " m";
    }
    let vocDif = dadosAtuais.voc - dadoAnterior.voc;
    if (dadoAnterior.altitude < dadosAtuais.altitude) {
      vocHtml.innerHTML = "Δ VOC:  " + vocDif.toFixed(3) + " ppm";
    } else {
      vocHtml.innerHTML = "Δ VOC: " + vocDif.toFixed(3) + " ppm";
    }
    let co2Dif = dadosAtuais.co2 - dadoAnterior.co2;
    if (dadoAnterior.co2 < dadosAtuais.co2) {
      co2Html.innerHTML = "Δ CO2:  " + co2Dif.toFixed(3) + " ppm";
    } else {
      co2Html.innerHTML = "Δ CO2: " + co2Dif.toFixed(3) + " ppm";
    }
    let umDif = dadosAtuais.umidade - dadoAnterior.umidade;
    if (dadoAnterior.umidade < dadosAtuais.umidade) {
      umidadeHtml2.innerHTML = "Δ CO2:  " + umDif.toFixed(3) + " %";
    } else {
      umidadeHtml2.innerHTML = "Δ CO2: " + umDif.toFixed(3) + " %";
    }

    setTimeout(visibilidade(2), 400);
  }
}
function search() {
  console.log(codigo);
  console.log(codigoAnterior);
  if (codigo == codigoAnterior) {
    getData();
  } else {
    getData(1);
  }
  if (status == "on") {
    dadoAnterior = dadosAtuais;
  } else {
    console.log("off");
  }

  if (keepGoing) {
    setTimeout(search, 6000);
  }
}

function startLoop() {
  if (btnStart.disabled == false) {
    keepGoing = true;
    btnStart.innerHTML = '<div id="load"  class=loader>';
    codigo = inputHtml.value;
    if (z == 0) {
      codigoAnterior = codigo;
      z++;
    }
    btnStart.disabled = true;
    status = "on";
    if (c == 1) {
      limparHist();
    }
    search();
  } else {
    console.log("já funcionando");
  }
}

function stopSearch() {
  keepGoing = false;
  status = "off";
  clearTimeout(timeout);
  dadoAnterior = undefined;
  dadoAtual = undefined;
  setTimeout(() => {
    if (c == 1) {
      btnHist.disabled = false;
      btnHist.innerHTML = "Buscar Histórico";
      stopHist.style.display = "none";
      histHeader.style.display = "flex";
    }
    btnStart.innerText = "Iniciar Busca";
    btnStart.disabled = false;
  }, 5000);
}
function getData(mode) {
  if (inputHtml.value == "") {
    console.log("sem identificador");
    btnStart.innerText = "Iniciar Busca";
    btnStart.disabled = false;
  } else {
    let link =
      `https://api-teste-receber-json.vercel.app/getdata/${codigo}`.toString();

    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length == 0) {
          stopSearch();
          return;
        }
        payloadAltitudeHtml.innerHTML =
          "Altitude = " + data[0].payload.altitude.toFixed(3) + " m";
        umidadeHtml.innerHTML =
          "Umidade = " + data[0].umidade.toFixed(3) + " %";
        payloadCo2Html.innerHTML =
          "CO2 = " + data[0].payload.co2.toFixed(3) + " ppm";
        payloadVocHtml.innerHTML =
          "VOC's = " + data[0].payload.voc.toFixed(3) + " ppm";
        temperaturaHtml.innerHTML =
          "Temperatura = " + data[0].temperatura.toFixed(1) + " °C";
        pressaoHtml.innerHTML =
          "Pressao = " + (data[0].pressao / 1000).toFixed(3) + " Kpa";
        bateriaHtml.innerHTML =
          "Bateria= " + ((data[0].bateria / 2600) * 100).toFixed(2) + "%";
        if (id == undefined) {
          setTimeout(visibilidade(1), 400);
        }
        id = data[0]._id;
        dadosAtuais = {
          umidade: data[0].umidade.toFixed(3),
          temperatura: data[0].temperatura.toFixed(3),
          pressao: (data[0].pressao / 1000).toFixed(3),
          voc: data[0].payload.voc.toFixed(3),
          co2: data[0].payload.co2.toFixed(3),
          altitude: data[0].payload.altitude.toFixed(3),
          bateria: (data[0].bateria / 2600) * 100,
        };

        criarHistorico(1);

        if (dadoAnterior != undefined) {
          setTimeout(() => {
            if (dadoAnterior.bateria == dadosAtuais.bateria) {
              console.log("dados =");
            } else {
              console.log("dados diferentes");
              if (mode == 1) {
                console.log("trocando código");
                //adicionar limpar o relátório e o histórico
                dadoAnterior = undefined;
                codigoAnterior = codigo;
              } else {
                comparar();
              }
            }
          }, 500);
        }
      })
      .catch((err) => {});
  }
}
// usar enter para enviar
// function enterListener() {
//   window.addEventListener("keydown", (event) => {
//     if (event.keyCode == 13) {
//       startLoop();
//     }
//   });
// }
function criarHistorico(mode) {
  if (mode == 1) {
    let li = document.createElement("li");
    let p = document.createElement("p");
    li.appendChild(p);
    p.innerHTML =
      "Temperatura = " +
      dadosAtuais.temperatura +
      " °C" +
      "<br>" +
      "Pressão     = " +
      dadosAtuais.pressao +
      " Kpa" +
      "<br>" +
      "Altitude = " +
      dadosAtuais.altitude +
      " m" +
      "<br>" +
      "VOC's =" +
      dadosAtuais.voc +
      " ppm" +
      "<br>" +
      "Co² =" +
      dadosAtuais.co2 +
      " ppm" +
      "<br>" +
      "Umidade =" +
      dadosAtuais.umidade +
      " %";
    divHist.appendChild(li);
    numberHist.innerHTML = "Número de Dados = " + divHist.children.length;
    if (c == 0) {
      c++;
      divHist.style.display = "flex";
      infoHist.style.display = "flex";
      divHistHolder.style.display = "none";
      btnHist.disabled = true;
      btnHist.innerHTML = "Pare a busca para pesquisar um outro histórico";
      histHeader.style.display = "none";
      stopHist.style.display = "";
    }
  } else if (mode == 2) {
    if (inputCodigo2.value == "") {
      console.log("preencha o codigo");
    } else if (inputDia.value == "") {
      console.log("preencha o dia");
    } else {
      let codigoHist = inputCodigo2.value;
      let day = inputDia.value;
      let link =
        `https://api-teste-receber-json.vercel.app/getHistory/${codigoHist}/${day}`.toString();
      fetch(link)
        .then((response) => response.json())
        .then((data) => {
          if (data.length == 0) {
          } else {
            if (c == 1) {
              limparHist();
            }
            historico = data;
            console.log(historico);
            console.log(data);
            historico.reverse();
            for (i = 0; i < historico.length; i++) {
              let li = document.createElement("li");
              let p = document.createElement("p");
              li.appendChild(p);
              p.innerHTML =
                "Temperatura = " +
                historico[i].temperatura +
                " °C" +
                "<br>" +
                "Pressão     = " +
                historico[i].pressao +
                " Kpa" +
                "<br>" +
                "Altitude = " +
                historico[i].payload.altitude +
                " m" +
                "<br>" +
                "VOC's =" +
                historico[i].payload.voc +
                " ppm" +
                "<br>" +
                "Co² =" +
                historico[i].payload.co2 +
                " ppm" +
                "<br>" +
                "Umidade =" +
                historico[i].umidade +
                " %";
              divHist.appendChild(li);
              numberHist.innerHTML =
                "Número de Dados = " + divHist.children.length;
            }
            numberHist.innerHTML =
              "Número de Dados = " + divHist.children.length;

            if (c == 0) {
              c++;
              divHist.style.display = "flex";
              infoHist.style.display = "flex";
              divHistHolder.style.display = "none";
              stopHist.style.display = "none";
            }
          }
        });
    }
  }
}
function limparHist() {
  const myNode = divHist;
  c = 0;
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
    divHist.style.display = "none";
    infoHist.style.display = "none";
    divHistHolder.style.display = "initial";
    stopHist.style.display = "none";
  }
}
