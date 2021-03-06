var statusCurtain = 0;
//var socket   = io.connect('http://192.168.1.99:8245');
var socket     = io.connect('http://192.168.0.104:8245'); //casa ip bruno
 
block_device_server("block_curtain");

socket.on('connect', function(data){
  disblock_device_server("block_curtain");
  socket.on('curtain_channel',function(data){
    data.sts_curtain == 0 ? document.getElementById("cortina").src="images/cortinaFechada.png" : document.getElementById("cortina").src="images/cortinaAberta.png";
    data.sts_curtain == 0 ? document.getElementById("fedback").innerHTML ="Cortina Fechada" : document.getElementById("fedback").innerHTML ="Cortina Aberta";
    statusCurtain = data.sts_curtain;
    if(data.temp_motor  == 1){
      block_device("block_curtain",15000);
    }
  });
  socket.on('disconnect', function(){
    block_device_server("block_curtain");
    location.reload();
  });
});

socket.on('curtain_func',function(curtain_data){
  if(curtain_data == "control_Curtain"){
    abreFecha();
  }
});

/*---document.getElementById("resultado").innerHTML = x----FUNÇÃO ABRIR/FECHAR CORTINA -----------------------------------------*/
function abreFecha(){
  if(statusCurtain == 0){
    document.getElementById("cortina").src="images/cortinaAberta.png";
    document.getElementById("fedback").innerHTML ="Cortina Abrindo...";
    statusCurtain  = 1;
    
    setTimeout(function(){
      document.getElementById("fedback").innerHTML ="Cortina Aberta";
    },20000);
  }else {
    document.getElementById("cortina").src="images/cortinaFechada.png";
    document.getElementById("fedback").innerHTML ="Cortina Fechando...";
    statusCurtain = 0;
    
    setTimeout(function(){
      document.getElementById("fedback").innerHTML ="Cortina Fechada";
    },20000);
  }
  block_device("block_curtain",20000)
}

function sendCurtain(){
  socket.emit('curtain_func', "control_Curtain");
}


////////////////////
function block_device(id_device,temp_curtain){
  document.getElementById(id_device).style.top = "3%";
  setTimeout(function(){
    document.getElementById(id_device).style.top = "-55%";
  }, temp_curtain);
}

function block_device_server(id_device){
  document.getElementById(id_device).style.top = "3%";
}

function disblock_device_server(id_device){
  document.getElementById(id_device).style.top = "-55%";
}

(function(){
  setTimeout(function(){
    location.reload();
  }, 500000);
})();


/*---------------------------------------- FUNÇÃO MOSTRAR DIV OCULTA SIDEBAR -----------------------------------------*/

function mostrarsid(){
  var sidbar = document.getElementById('sid_cortina');
  return sidbar.style.display === "none" ? sidbar.style.display = "block" : sidbar.style.display = "none";
}

function bloquear(id){

setTimeout(function(){document.getElementById("sidebar_cortina").disabled = true;},50);
setTimeout(function(){document.getElementById("sidebar_cortina").disabled = false;},1000);
}
document.getElementById("sidebar_cortina").addEventListener("click", bloquear);
