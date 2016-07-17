 var volume = 0,
     status = 0;
var socket = io.connect('http://192.168.1.69:8245');
//var socket = io.connect('http://192.168.0.101:8245'); //casa ip bruno

socket.on('connect', function(data){
  socket.on('tv_connect',function(data){
    status = data.tv_status;
    volume = data.volume_tv;
    data.tv_status == 0 ? document.getElementById("tv").src="images/tv.jpg" : document.getElementById("tv").src="images/tvligada.jpg";
    data.tv_status == 0 ? document.getElementById('ma').style.display = 'none' : document.getElementById('ma').style.display = 'block';
    document.getElementById("resultado").innerHTML = volume;
  });
});

socket.on('tv_function',function(tv_data){
  if(tv_data == "tv_On_Off"){
    estadotv();
  }
});

socket.on('tv_volume',function(tv_volume){
  if(tv_volume == "increase"){
    aumentartv();
  }else if(tv_volume == "decrease"){
    diminuirtv();
  }
});

/*----------------------------------------FUNÇÃO LIGAR/DESLIGAR TV -----------------------------------------*/
function estadotv() {
        if        (document.getElementById('ma').style.display =='block'){
                    document.getElementById("tv").src="images/tv.jpg";
                    document.getElementById('ma').style.display ='none';
        }else {    document.getElementById('ma').style.display = 'block';
                    document.getElementById("tv").src="images/tvligada.jpg"; }}

function sendTvHome(){
  socket.emit('tv_function', "tv_On_Off");
}
/*---------------------------------------FUNÇÃO LIGAR/DESLIGAR TV (MUDAIMAGEM) -----------------------------------------*/



/*----------------------------------------FUNÇÃO AUMENTAR VOLUME TV -----------------------------------------*/


function aumentartv(){
        if(volume < 50){
          ++volume;
          document.getElementById("resultado").innerHTML = volume;
        }
}

function sendVolume_Increase(){
  socket.emit('tv_volume', "increase");
}

/*----------------------------------------FUNÇÃO DIMINUIR VOLUME TV -----------------------------------------*/
function diminuirtv(){
    if(volume > 0){
      --volume;
      document.getElementById("resultado").innerHTML = volume;
    }
}

function sendVolume_Decrease(){
  socket.emit('tv_volume', "decrease");
}

/*----------------------------------------FUNÇÃO PARA MOSTRAR DIV OCULTA -----------------------------------------*/

function mostrarsid(){
  var sidbar = document.getElementById('sid_tv');
  return sidbar.style.display === "none" ? sidbar.style.display = "block" : sidbar.style.display = "none";
}

function bloquear(id){

setTimeout(function(){document.getElementById("sidebar_tv").disabled = true;},50);
setTimeout(function(){document.getElementById("sidebar_tv").disabled = false;},1000);
}
document.getElementById("sidebar_tv").addEventListener("click", bloquear);
