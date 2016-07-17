var volume = 17;
//var socket = io.connect('http://192.168.1.99:8245');
var socket = io.connect('http://192.168.0.104:8245'); //casa ip bruno

block_device_server("ar_device");

socket.on('connect', function(data){
  disblock_device_server("ar_device");
  socket.on('ar_connect',function(data){
    status = data.ar_status;
    volume = data.volume_ar;
    data.ar_status == 0 ? document.getElementById("ar").src="images/ar_off.png" : document.getElementById("ar").src="images/ar_on.png";
    data.ar_status == 0 ? document.getElementById('divar').style.display = 'none' : document.getElementById('divar').style.display = 'block';
    document.getElementById("resultado").innerHTML = volume;
  });
  socket.on('disconnect', function(){
    block_device_server("ar_device");
    location.reload();
  });
});

socket.on('ar_function',function(ar_data){
  if(ar_data == "ar_On_Off"){
    estadoar('divar');
  }
});

socket.on('ar_volume',function(ar_volume){
  if(ar_volume == "increase"){
    aumentarar();
  }else if(ar_volume == "decrease"){
    diminuirar();
  }
});

/*----------------------------------------FUNÇÃO MOSTRAR DIV OCULTA SIDEBAR -----------------------------------------*/

function gE(ID) {
	return document.getElementById(ID);
}

function mostrarsid(){
  var sidbar = gE('sid_temp');
  return sidbar.style.display === "none" ? sidbar.style.display = "block" : sidbar.style.display = "none";
}

function bloquear(id){
  setTimeout(function(){document.getElementById("sidebar_temp").disabled = true;},50);
  setTimeout(function(){document.getElementById("sidebar_temp").disabled = false;},1000);
}
document.getElementById("sidebar_temp").addEventListener("click", bloquear);

/*-------------------------- FUNÇÃO LIGAR/DESLIGAR AR-CONDICIONADO ------------------------------------*/
function estadoar(a){
  if(gE(a).style.display=="block"){
    gE("ar").src="images/ar_off.png";
    gE(a).style.display="none";
  }else{
    gE(a).style.display="block";
    gE("ar").src="images/ar_on.png";
  }
  block_device("ar_device");
}

function sendVolume_IncreaseAr(){
  socket.emit('ar_volume', "increase");
}

function sendVolume_DecreaseAr(){
  socket.emit('ar_volume', "decrease");
}

function sendArHome(){
  socket.emit('ar_function', "ar_On_Off");
}

/* -----------------------------FUNÇÃO AUMENTAR AR-CONDICIONADO -----------------------------------------*/
function aumentarar(){
  if(volume < 26){
    ++volume;
    gE("resultado").innerHTML = volume;
  }
}

/*----------------------------------------FUNÇÃO DIMINUIR AR-CONDICIONADO -----------------------------------------*/
function diminuirar(){
  if(volume > 17){
    --volume;
    gE("resultado").innerHTML = volume;
  }
};

function block_device(id_device){
  document.getElementById(id_device).style.top = "5%";
  setTimeout(function(){
    document.getElementById(id_device).style.top = "-50%";
  }, 2000);
}

function block_device_server(id_device){
  document.getElementById(id_device).style.top = "5%";
}

function disblock_device_server(id_device){
  document.getElementById(id_device).style.top = "-50%";
}
