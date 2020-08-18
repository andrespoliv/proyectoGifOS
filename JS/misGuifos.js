//Condición lógica para ventanas
let conditions = 0;

//Ocultar botones de video
let startRec = document.getElementById("startRec");
startRec.style.display = "none";
let stopRec = document.getElementById("stopRec");
stopRec.style.display = "none";
let videoElement = document.getElementById("videoElement");
videoElement.style.display = "none";

//Ventana inicial captura
let ventana1Rec = document.createElement("div");
ventana1Rec.className = "ventana1Rec";
let ventana1RecTop = document.createElement("div");
ventana1RecTop.className = "ventana1RecTop";
let ventana1RecTopTxt = document.createElement("p");
ventana1RecTopTxt.className = "ventana1RecTopTxt";
ventana1RecTopTxt.innerText = `Crear Guifos`;
let ventana1RecBttm = document.createElement("div");
ventana1RecBttm.className = "ventana1RecBttm";
let ventana1RecBttmIcon = document.createElement("img");
ventana1RecBttmIcon.className = "ventana1RecBttmIcon";
ventana1RecBttmIcon.src = "assets/window img.png";
let containTxt = document.createElement("div");
containTxt.className = "containTxt";
let ventana1RecBttmTxt1 = document.createElement("p");
ventana1RecBttmTxt1.className = "ventana1RecBttmTxt1";
ventana1RecBttmTxt1.innerText = `Aquí podrás crear tus propios guifos`;
let ventana1RecBttmTxt2 = document.createElement("p");
ventana1RecBttmTxt2.className = "ventana1RecBttmTxt2";
let str1 = "guifo";
let str2 = "1)";
let str3 = "2)";
let str4 = "3)";
let str5 = "4)";
let newLine = "\n";
let fullStr =  `Crear tu ${str1.bold()} es muy fácil, graba cualquier imagen con tu cámara y obtén guifos personalizados. Los pasos para crear tu guifo son:
<br><br>${str2.bold()} Dar permisos de acceso a la cámara (sólo por el tiempo de uso)
<br>${str3.bold()} Capturar tu momento guifo
<br>${str4.bold()} Revisar el momento
<br>${str5.bold()} Listo para subir y compartir!
<br><br>
¿Quieres comenzar a crear tu ${str1.bold()} ahora?`;
ventana1RecBttmTxt2.innerHTML = fullStr;
let ventana1RecBtn1 = document.createElement("button");
ventana1RecBtn1.className = "ventana1RecBtn1";
ventana1RecBtn1.innerText = "Cancelar";
let ventana1RecBtn2 = document.createElement("button");
ventana1RecBtn2.className = "ventana1RecBtn2";
ventana1RecBtn2.innerText = "Comenzar";
ventana1RecTop.appendChild(ventana1RecTopTxt);
ventana1Rec.appendChild(ventana1RecTop);
containTxt.appendChild(ventana1RecBttmTxt1);
containTxt.appendChild(ventana1RecBttmTxt2);
containTxt.appendChild(ventana1RecBtn1);
containTxt.appendChild(ventana1RecBtn2);
ventana1RecBttm.appendChild(ventana1RecBttmIcon);
ventana1RecBttm.appendChild(containTxt);
ventana1Rec.appendChild(ventana1RecBttm);
let out = document.getElementById("out");
out.insertAdjacentElement("afterbegin", ventana1Rec);

//Funcionalidad botones ventana 1
function cancelarGrab(ev){
    ev.stopPropagation();
    ev.preventDefault();
    ventana1Rec.style.display = "none";
};

function continuarGrab(ev){
    ev.preventDefault();
    if(conditions == 1){
        for(let n = 0; n < document.getElementsByClassName("divBotones").length; n++){
            document.getElementsByClassName("divBotones")[n].style.display = "none";
        }
    }
    else if( conditions == 2){
        for(let n = 0; n < document.getElementsByClassName("divBtnBtn").length; n++){
            document.getElementsByClassName("divBtnBtn")[n].style.display = "none";
        }
    }
    ventana1RecTopTxt.innerText = `Un Chequeo Antes de Empezar`;
    ventana1RecBttm.style.display = "none";
    startRec.className = "btnCaptura";
    startRec.style.display = "block"
    let divIcon = document.createElement("div");
    divIcon.className = "divIcon";
    let divBtnIcon = document.createElement("div");
    divBtnIcon.className = "divBtnIcon";
    let cameraIcon = document.createElement("img");
    cameraIcon.src = "assets/camera.svg"
    cameraIcon.className = "cameraIcon";
    startRec.innerText="Capturar";
    divIcon.appendChild(cameraIcon);
    divBtnIcon.appendChild(divIcon);
    divBtnIcon.appendChild(startRec);
    ventana1Rec.appendChild(videoElement);
    ventana1Rec.appendChild(divBtnIcon);
    videoElement.style.display = "block";
    iniciarGrabacion()
};


ventana1RecBtn1.addEventListener("click", cancelarGrab);
ventana1RecBtn2.addEventListener("click", continuarGrab);


//Grabar utilizando la cámara y hacer el upload del GIF a la API de GIPHY
      
const apikey = "VtQTFhl5Pt1if6YbfAmpYarrvJ7BnDoA" //Aca pongan su apikey de Giphy;
var recorder = null;  // Inicio la variable recorder en null, porque la voy a usar en varios lados despues de obtener su valor.

function iniciarGrabacion() {  //Este metodo inicia la grabacion.
    navigator.mediaDevices.getUserMedia({ //Seteamos el uso de la camara. Recuerden que si no esta activada no la pueden usar.
        audio: false,
        video: {
            height: { max: 480 }
        }
        }).then(function(stream) { // Una vez que se ejecuta, el resultado de esa promesa  nos devuelve el "stream" de nuestra camara. Usamos el tag video para que la muestre en html.
            var video = document.querySelector('video');
            video.srcObject = stream;
            video.play();
              
              //Ahora que esta habilitada la camara, iniciamos los parametros del objeto RecordRTC para que empiece a grabar el "stream".
              recorder = RecordRTC(stream, {
                  type: 'gif',
                  frameRate: 1,
                  quality: 10,
                  width: 280,
                  hidden: 240,
                  
                  onGifRecordingStarted: function() { 
                      console.log('started')
                  },
              });
          });
      }

      function grabando(){
        recorder.startRecording();  // Boton para iniciar la grabacion.
        event.preventDefault();
        if(document.getElementsByClassName("divIcon").length != 0){
            for(let n = 0; n < document.getElementsByClassName("divIcon").length; n++){
                document.getElementsByClassName("divIcon")[n].style.display = "none";
            }
            
        }      
                  startRec.style.display = "none";
                  stopRec.style.display = "block";
                  stopRec.innerText = "Listo"
                  stopRec.className = "btnListo";
                  ventana1RecTopTxt.innerText = `Capturando tu guifo`;
                  let divIcon = document.createElement("div");
                  divIcon.className = "divIcon1";
                  let divBtnIcon = document.createElement("div");
                  divBtnIcon.className = "divBtnIcon";
                  let cameraIcon = document.createElement("img");
                  cameraIcon.src = "assets/recording.svg"
                  cameraIcon.className = "cameraIcon";
                  divIcon.appendChild(cameraIcon);
                  divBtnIcon.appendChild(divIcon);
                  divBtnIcon.appendChild(stopRec);
                  ventana1Rec.appendChild(divBtnIcon);
      };
    startRec.addEventListener('click', grabando);

    stopRec.addEventListener('click', (event) => {
        recorder.stopRecording(function(){  // Cuando se realiza el stop de la grabacion, se obtiene un objeto blob con los datos del archivo.
            event.preventDefault();
            if(document.getElementsByClassName("divIcon1").length != 0){
                for(let n = 0; n < document.getElementsByClassName("divIcon1").length; n++){
                    document.getElementsByClassName("divIcon1")[n].style.display = "none";
                }
            }
            stopRec.style.display = "none";
            ventana1RecTopTxt.innerText = `Vista Previa`;
            let imgPlay = document.createElement("img");
            imgPlay.className = "imgPlay";
            imgPlay.src = "assets/forward.svg";
            let btnVistaPrevia = document.createElement("button");
            btnVistaPrevia.className = "btnVistaPrevia";
            let btnRepetir = document.createElement("button");
            btnRepetir.className = "btnRepetir";
            btnRepetir.innerText = "Repetir captura";
            let btnSubir = document.createElement("button");
            btnSubir.className = "btnSubir";
            btnSubir.innerText = "Subir guifo";
            let divBtnBtn = document.createElement("div");
            divBtnBtn.className = "divBtnBtn";
            btnVistaPrevia.appendChild(imgPlay);
            divBtnBtn.appendChild(btnVistaPrevia);
            divBtnBtn.appendChild(btnRepetir);
            divBtnBtn.appendChild(btnSubir);
            ventana1Rec.appendChild(divBtnBtn);
            let blob = recorder.getBlob();
            let videoURL = window.URL.createObjectURL(blob);
            let gifName = "miGuifo";
            if(conditions != 2){
                conditions = 2;
            }

            function grabDeNuevo(ev){
                ev.preventDefault();
                if(conditions == 1){
                    for(let n = 0; n < document.getElementsByClassName("divGifSave").length; n++){
                        document.getElementsByClassName("divGifSave")[n].style.display = "none";
                    }
                }
                    continuarGrab(ev);
            }
            btnRepetir.addEventListener("click", grabDeNuevo);
            
            function reproducirGIF(ev){
                ev.stopPropagation();
                ev.preventDefault();
                videoElement.style.display = "none";
                let divGifSave = document.createElement("div");
                divGifSave.className = "divGifSave";
                let gifSave = document.createElement("img");
                gifSave.className = "gifSave";
                gifSave.src = videoURL;
                divGifSave.appendChild(gifSave);
                ventana1Rec.appendChild(divGifSave);
                divBtnBtn.className = "divBotones";
                ventana1Rec.className = "divVistaPrevia";
                if(conditions != 1){
                    conditions = 1;
                }
                
            }
            btnVistaPrevia.addEventListener("click", reproducirGIF);

            function copiarEnlace(ev){
                ev.preventDefault();
                let textArea = document.createElement("textarea");
                textArea.value = "https://giphy.com/channel/andrespoliv";
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            };

            function descargar(){
                var a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";
                return function (fileName) {
                    a.href = videoURL;
                    a.download = fileName;
                    a.click();
                    window.URL.revokeObjectURL(videoURL);
                };
            };

            let btnSeAcabo = document.createElement("button");
            let btnCopiarEnlace = document.createElement("button");
            let btnDescargar = document.createElement("button");

            
            function subirGIF(ev){
                ev.preventDefault();
                let form = new FormData();  // Utilizamos formdata para preparar la informacion para mandar a la api
                form.append('file', blob, 'myGif.gif');
            
                fetch('https://upload.giphy.com/v1/gifs?api_key=' + apikey ,  // Invocamos la api de Giphy con la key
                {
                    method: 'post', // Seteamos el metodo que vamos a usar, en este caso, Post.
                    body: form  //En el body van los parametros que recibe la api.
                })
                .then(response => {
                    if(conditions == 1){
                        for(let n = 0; n < document.getElementsByClassName("divGifSave").length; n++){
                            document.getElementsByClassName("divGifSave")[n].style.display = "none";
                        }
                    }
                    divBtnBtn.style.display = "none";
                    videoElement.style.display = "none";
                    let divMaestro = document.createElement("div");
                    divMaestro.className = "divMaestro";
                    let divGifSave1 = document.createElement("div");
                    divGifSave1.className = "divGifSave1";
                    let gifSave1 = document.createElement("img");
                    gifSave1.src = videoURL;
                    gifSave1.className = "gifSave1";
                    ventana1RecTopTxt.innerText = `Guifo subido con éxito`;
                    btnCopiarEnlace.className = "btnCopiarEnlace";
                    btnCopiarEnlace.innerText = "Copiar enlace";
                    btnDescargar.className = "btnDescargar";
                    btnDescargar.innerText = "Descargar guifo";
                    btnSeAcabo.className = "btnSeAcabo";
                    btnSeAcabo.innerText = "Listo";
                    let textGIFCreado = document.createElement("p");
                    textGIFCreado.className = "textGIFCreado";
                    textGIFCreado.innerText = "Guifo creado con éxito";
                    let divBtnFinal = document.createElement("div");
                    divBtnFinal.className = "divBtnFinal";
                    divBtnFinal.appendChild(textGIFCreado);
                    divBtnFinal.appendChild(btnCopiarEnlace);
                    divBtnFinal.appendChild(btnDescargar);
                    divBtnFinal.appendChild(btnSeAcabo);
                    divGifSave1.appendChild(gifSave1);
                    divMaestro.appendChild(divGifSave1);
                    divMaestro.appendChild(divBtnFinal);
                    ventana1Rec.appendChild(divMaestro);
                    return response.json();
                })
                .then(data => {
                    let datos = JSON.stringify(data);
                    //console.log(datos);
                    localStorage.setItem(`gif${data.data.id}`, datos);
                    
                    return data;
                })
                .catch(error => {
                    return error;
                });
            }

            function reinicio (ev){
                ev.preventDefault();
                location.reload();
            }
            
            btnSubir.addEventListener("click", subirGIF);
            btnSeAcabo.addEventListener("click", reinicio);
            btnCopiarEnlace.addEventListener("click", copiarEnlace);
            btnDescargar.addEventListener("click", descargar(gifName));
            
        });
  
    });

let APIKEY = "VtQTFhl5Pt1if6YbfAmpYarrvJ7BnDoA";
//DIVs Mis Guifos

if(localStorage.length > 0){
    for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i).includes("gif")){
            let gifGuardados = JSON.parse(localStorage.getItem(localStorage.key(i)));
            let url2 = `https://api.giphy.com/v1/gifs/${gifGuardados.data.id}?api_key=${APIKEY}`;  
            fetch(url2) //Función Fetch con atributo url
                .then(response => response.json()) //Primer método de Fetch que devuleve un objeto response en formato JSON.
                .then(content => { //Toma el elemento promise de la respuesta anterior y lo muestra en la consola
                    //  data, pagination, meta
                    let out3 = document.getElementById("GIF3");
                    let fig = document.createElement("div");
                    let img = document.createElement("img");
                    img.src = content.data.images.downsized.url;
                    img.alt = content.data.title;
                    if(i == localStorage.length){
                        fig.appendChild(img);
                        fig.appendChild(img).className = "imgMisGuifosSpan1";
                        out3.insertAdjacentElement("afterbegin", fig)
                        out3.insertAdjacentElement("afterbegin", fig).className = "misGuifosSpan1"; 
                    }
                    else if(localStorage.length < 5 && i == 7){
                        fig.appendChild(img);
                        fig.appendChild(img).className = "imgMisGuifosSpan2";
                        out3.insertAdjacentElement("afterbegin", fig)
                        out3.insertAdjacentElement("afterbegin", fig).className = "misGuifosSpan2"; 
                    }
                    else{
                        fig.appendChild(img);
                        fig.appendChild(img).className = "imgMisGuifos";
                        out3.insertAdjacentElement("afterbegin", fig)
                        out3.insertAdjacentElement("afterbegin", fig).className = "misGuifos";  
                    }
                    })
                    .catch(err => { //En caso de existir un error durante la llamada el servidor, esta función nos retornará ese mensaje en la consola.
                        console.error(err);
                    });
        }
        
    }
}  

