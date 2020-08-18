//Configurar menú elegir tema

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("modos");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, 
  create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;

        


        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });


    b.appendChild(c);
    
    
  }
  x[i].appendChild(b);
  let bandera = false;
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      
      //Elegir modos

      if(bandera == true){
        document.getElementsByClassName("select-selected-alt")[0].classList.add("select-selected");
        document.getElementsByClassName("select-selected-alt")[0].classList.remove("select-selected-alt");
        bandera = false;
      }
      
        if(a.innerHTML == "Modo claro"){
          document.getElementsByClassName("select-selected")[0].classList.add("select-selected");
          document.getElementsByClassName("select-selected")[0].classList.remove("select-selected-alt");
          document.getElementById("logo").src="assets/gifOF_logo.png";
          document.body.style.backgroundColor = "white";
          document.body.getElementsByTagName("header")[0].style.backgroundImage =  "linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%)";
          document.getElementById("crearGuifos").style.backgroundColor = "#F7C9F3";
          document.getElementById("misGuifosTexto").style.color = "#110038";
          document.getElementById("crearGuifos").style.color = "black";
          document.getElementsByClassName("buscar_up")[0].style.backgroundImage = "linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%)";
          document.getElementsByClassName("buscar_down")[0].style.backgroundColor = "#E6E6E6";
          document.getElementsByClassName("buscar_down")[0].style.boxShadow = "inset -2px -2px 0 0 #B4B4B4, inset 2px 2px 0 0 #FFFFFF";
          document.getElementsByClassName("headGifSugerido")[0].style.backgroundImage = "linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%)";
          document.getElementsByClassName("headGifSugerido")[1].style.backgroundImage = "linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%)";
          document.getElementsByClassName("headGifSugerido")[2].style.backgroundImage = "linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%)";
          document.getElementsByClassName("headGifSugerido")[3].style.backgroundImage = "linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%)";
          document.getElementsByClassName("select-items")[0].style.backgroundColor = "#F7C9F3";
          document.getElementsByClassName("select-selected")[0].style.color = "black";

        } else if(a.innerHTML == "Modo oscuro"){
          bandera = true;
          document.getElementById("logo").src="assets/gifOF_logo_dark.png";
          document.body.style.backgroundColor = "#110038";
          document.body.getElementsByTagName("header")[0].style.backgroundImage = "linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)";
          document.getElementById("misGuifosTexto").style.color = "white";
          document.getElementById("crearGuifos").style.backgroundColor = "#EE3EFE";
          document.getElementById("crearGuifos").style.color = "white";
          document.getElementsByClassName("buscar_up")[0].style.backgroundImage = "linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)";
          document.getElementsByClassName("buscar_down")[0].style.backgroundColor = "#B4B4B4";
          document.getElementsByClassName("buscar_down")[0].style.boxShadow = "inset -2px -2px 0 0 #8F8F8F, inset 2px 2px 0 0 #FFFFFF";
          document.getElementsByClassName("headGifSugerido")[0].style.backgroundImage = "linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)"
          document.getElementsByClassName("headGifSugerido")[1].style.backgroundImage = "linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)"
          document.getElementsByClassName("headGifSugerido")[2].style.backgroundImage = "linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)"
          document.getElementsByClassName("headGifSugerido")[3].style.backgroundImage = "linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)"
          document.getElementsByClassName("select-items")[0].style.backgroundColor = "#EE3EFE";
          document.getElementsByClassName("select-selected")[0].classList.add("select-selected-alt");
          document.getElementsByClassName("select-selected")[0].classList.remove("select-selected");
          document.getElementsByClassName("select-selected-alt")[0].style.color = "white";
          ;
        }
      
      
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);    

//Botón de búsqueda
let btnSearch = document.getElementById("btnSearch");
btnSearch.disabled = true;
btnSearch.style.color = "gray";

//Barra de búsqueda
    let barraB = document.getElementById("search");
    let mainBtn1 = document.createElement("button");
    let mainBtn2 = document.createElement("button");
    let mainBtn3 = document.createElement("button");
    let bandera1 = false;
    let flag1 = false; //Para botones Ver más

//Funcionalidad barra de búsqueda
    function busqueda(ev){  
      ev.preventDefault();
      if(barraB.value == ""){
        btnSearch.disabled = true;
        btnSearch.style.color = "gray";
        btnSearch.style.backgroundColor = "#E6E6E6";
        if(bandera1 == true){
          document.getElementsByClassName("divBusqRel")[0].style.display = "none";
          bandera1 = false;
        }
      }
      if(bandera1 != true){
        if(barraB.value.length > 1){
          bandera1 = true;
          btnSearch.disabled = false;
          let apiKeySrch = "VtQTFhl5Pt1if6YbfAmpYarrvJ7BnDoA";
          btnSearch.style.color = "black";
          btnSearch.style.backgroundColor = "#F7C9F3";
          document.getElementById("lupa").src = "assets/lupa.svg";
          let main = document.createElement("div");
            fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKeySrch}&q=${barraB.value}`)
            .then(response => {
              return response.json();
            })
            .then(data => {
              mainBtn1.innerText = data.data[0].name;
              mainBtn2.innerText = data.data[1].name;
              mainBtn3.innerText = data.data[2].name;
              main.appendChild(mainBtn1);
              main.appendChild(mainBtn1).className = "busqRel";
              main.appendChild(mainBtn2);
              main.appendChild(mainBtn2).className = "busqRel";
              main.appendChild(mainBtn3);
              main.appendChild(mainBtn3).className = "busqRel";
              return data;
            })
          let container = document.getElementsByClassName("buscar_down")[0]
          container.insertAdjacentElement("afterend", main);
          container.insertAdjacentElement("afterend", main).className = "divBusqRel";
          
                }
      }
      
    }
barraB.addEventListener("input", busqueda);
function busqRelacionados1(ev){
  ev.preventDefault();
  barraB.value = mainBtn1.innerText;
  flag1 = true;
  buscar(ev);
}
mainBtn1.addEventListener("click", busqRelacionados1);

function busqRelacionados2(ev){
  ev.preventDefault();
  barraB.value = mainBtn2.innerText;
  flag1 = true;
  buscar(ev);
}
mainBtn2.addEventListener("click", busqRelacionados2);

function busqRelacionados3(ev){
  ev.preventDefault();
  barraB.value = mainBtn3.innerText;
  flag1 = true;
  buscar(ev);
}
mainBtn3.addEventListener("click", busqRelacionados3);
    
//Funcionalidad botón de busqueda

let divB = document.createElement("div");
let container = document.getElementsByClassName("buscar_down")[0];
container.insertAdjacentElement("afterend", divB);
container.insertAdjacentElement("afterend", divB).className = "divBotonHist";
let resultados = [];
divB.style.display = "none";
let bandera2 = false;

function buscar(e){
  e.preventDefault();
  if(bandera2 == false){
    divB.style.display = "flex";
    bandera2 = true;
  }
  let trend = document.getElementById("TD");
  let texto = document.getElementById("TDtext");
  texto.innerText = barraB.value;
  trend.scrollIntoView();
  let valorB = barraB.value;
  resultados.push(valorB);
  var botonHist = document.createElement("button");
  btnSec = botonHist;
  botonHist.innerText = valorB;
  divB.appendChild(botonHist);
  divB.appendChild(botonHist).className = "botonHist";
  if(flag1 == false){
    document.getElementsByClassName("divBusqRel")[0].style.display = "none";
  }
  else{
    flag1 = false;
  }
  
  //Funcionalidad de botón historial
  function busqRapida(ev){
    ev.preventDefault();
    barraB.value = botonHist.innerText;
    let trend = document.getElementById("TD");
    let texto = document.getElementById("TDtext");
    texto.innerText = barraB.value;
    trend.scrollIntoView();
    let apiKeySrch = "VtQTFhl5Pt1if6YbfAmpYarrvJ7BnDoA";
    let apiUrlSrch = `https://api.giphy.com/v1/gifs/search?q=${botonHist.innerText}&api_key=${apiKeySrch}&limit=16`
    fetch(apiUrlSrch) 
    .then(response => response.json()) 
    .then(content => { 
      for(let i = 0; i< document.getElementsByClassName("imgGifTendencias").length; i++){
        if(document.getElementsByClassName("imgGifTendencias").length == content.data.length){
          document.getElementsByClassName("imgGifTendencias")[i].src = content.data[i].images.downsized.url;
        }
        else{
          if(i > content.data.length){
            document.getElementsByClassName("imgGifTendencias")[i].style.display = "none";
          }
          else{
            document.getElementsByClassName("imgGifTendencias")[i].src = content.data[i].images.downsized.url;
          }
        }
        
      }
      
    })
    .catch(err =>{
      console.error(err);
    });
  }
  botonHist.addEventListener("click", busqRapida); 
  //Fetch de búsqueda
  let apiKeySrch = "VtQTFhl5Pt1if6YbfAmpYarrvJ7BnDoA";
  let apiUrlSrch = `https://api.giphy.com/v1/gifs/search?q=${valorB}&api_key=${apiKeySrch}&limit=10`
  fetch(apiUrlSrch) 
  .then(response => response.json()) 
  .then(content => { 
    for(let i = 0; i < 10; i++){
      //if(document.getElementsByClassName("imgGifTendencias").length + 2 == content.data.length){
        if(i == 0){
          document.getElementsByClassName("imgGifSpan2")[0].src = content.data[i].images.downsized.url;
          
        }
        else if(i == 5){
          document.getElementsByClassName("imgGifSpan1")[0].src = content.data[i].images.downsized.url;
          
        }
        else{
          if(i > 5){
            document.getElementsByClassName("imgGifTendencias")[i-2].src = content.data[i].images.downsized.url;
          }
          else{
            document.getElementsByClassName("imgGifTendencias")[i-1].src = content.data[i].images.downsized.url;
          }
        }
    }
    
  })
  .catch(err =>{
    console.error(err);
  });
  
}

btnSearch.addEventListener("click", buscar);
    
    //Petición para buscar GIFs en la API
    //GIFs sugeridos

    let APIKEY = "VtQTFhl5Pt1if6YbfAmpYarrvJ7BnDoA"; //Llave de la API de Giphy, otorgada desde la misma página
    document.addEventListener("DOMContentLoaded", init); //Este método permite aplicar un manejador de eventos sobre el documento, es decir, cuando ocurre un evento tipo "DOMContentLoaded" se ejecutará Init
      function init(ev) {
         //getElementById retorna el elemento con dicho valor de id y en este caso le asigna el evento click
          ev.preventDefault(); //Este método cancela el evento si es cancelable, lo que significa que la acción por defecto que pertenece al evento no ocurrirá.
          let url1 = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`; //Variable que concatena el URL con el API Key
          //Fíjate que estas usando la función search, para subir archivos a GIPHY necesitas usar la siguiente ruta
          //upload.giphy.com/v1/gifs/
          //let str = document.getElementById("search").value.trim(); //Al valor que viene del elemento con ID "search" se le removerán los espacios en blanco y se añadirá a la variable str.
          //url = url.concat(str); //Concatena al url el valor del str
          for(let n = 0; n < 4; n++){
          fetch(url1) //Función Fetch con atributo url
            .then(response => response.json()) //Primer método de Fetch que devuleve un objeto response en formato JSON.
            .then(content => { //Toma el elemento promise de la respuesta anterior y lo muestra en la consola
              //  data, pagination, meta
                let fig = document.createElement("div");
                let hdFig = document.createElement("div");
                let vermas = document.createElement("button");
                let img = document.createElement("img");
                img.src = content.data.images.downsized.url;
                img.alt = content.data.title;
                fig.appendChild(hdFig);
                fig.appendChild(hdFig).className = "headGifSugerido";
                fig.appendChild(hdFig).innerText = `#${content.data.title}`
                fig.appendChild(vermas);
                fig.appendChild(vermas).innerText = "Ver más...";
                fig.appendChild(vermas).className = "verMas";
                let closeButton = document.createElement("img");
                closeButton.src = "assets/button_close.svg";
                closeButton.alt = "Botón para cerrar";
                hdFig.appendChild(closeButton).className = "closeButton1";
                fig.appendChild(img);
                fig.appendChild(img).className = "imgGifSugerido";
                let out = document.getElementById("GIF1");
                out.insertAdjacentElement("afterbegin", fig)
                out.insertAdjacentElement("afterbegin", fig).className = "gifSugerido";
                
                //Funcionalidad botones ver más
                function busquedaVerMas(){
                  ev.preventDefault();
                  barraB.value = content.data.title;
                  flag1 = true;
                  buscar(ev);
                }
                vermas.addEventListener("click", busquedaVerMas);
                
            })
            .catch(err => { //En caso de existir un error durante la llamada el servidor, esta función nos retornará ese mensaje en la consola.
              console.error(err);
            });
          }

      
          

          //GIFs tendencias

          url2 = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=10`;
            fetch(url2) //Función Fetch con atributo url
              .then(response => response.json()) //Primer método de Fetch que devuleve un objeto response en formato JSON.
              .then(content => { //Toma el elemento promise de la respuesta anterior y lo muestra en la consola
                //  data, pagination, meta
                let out2 = document.getElementById("GIF2");
                for(let n = 0; n < 10; n++){
                  let fig2 = document.createElement("div");
                  let img2 = document.createElement("img");
                  img2.src = content.data[n].images.downsized.url;
                  img2.alt = content.data[n].title;
                  if(n == 5){
                    fig2.appendChild(img2);
                    fig2.appendChild(img2).className = "imgGifSpan1";
                    out2.insertAdjacentElement("afterbegin", fig2)
                    out2.insertAdjacentElement("afterbegin", fig2).className = "gifSpan1"; 
                  }
                  else if(n == 0){
                    fig2.appendChild(img2);
                    fig2.appendChild(img2).className = "imgGifSpan2";
                    out2.insertAdjacentElement("afterbegin", fig2)
                    out2.insertAdjacentElement("afterbegin", fig2).className = "gifSpan2"; 
                  }
                  else{
                    fig2.appendChild(img2);
                    fig2.appendChild(img2).className = "imgGifTendencias";
                    out2.insertAdjacentElement("afterbegin", fig2)
                    out2.insertAdjacentElement("afterbegin", fig2).className = "gifTendencias";  
                  }
                      
                }
              })
              .catch(err => { //En caso de existir un error durante la llamada el servidor, esta función nos retornará ese mensaje en la consola.
                console.error(err);
              });
      }