var statusCurtain = 0,
    socket        = io.connect('http://192.168.1.69:8245');
//var socket              = io.connect('http://192.168.0.101:8245'); //casa ip bruno

socket.on('connect', function(data){
  socket.on('curtain_channel',function(data){
    data.sts_curtain == 0 ? document.getElementById("cortina").src="images/cortinaFechada.png" : document.getElementById("cortina").src="images/cortinaAberta.png";
    data.sts_curtain == 0 ? document.getElementById("fedback").innerHTML ="Cortina Fechada" : document.getElementById("fedback").innerHTML ="Cortina Aberta";
    statusCurtain = data.sts_curtain;
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
      document.getElementById("fedback").innerHTML ="Abrindo...";
      statusCurtain  = 1;
      setTimeout(function(){
      document.getElementById("fedback").innerHTML ="Cortina aberta";
      },20000);
    } else {
        document.getElementById("cortina").src="images/cortinaFechada.png";
        document.getElementById("fedback").innerHTML ="Fechando...";
        statusCurtain = 0;
        setTimeout(function(){
        document.getElementById("fedback").innerHTML ="Cortina Fechada";
        },20000);
    }
    block_device("block_curtain")
}
function sendCurtain(){
  socket.emit('curtain_func', "control_Curtain");
}

////////////////////
function block_device(id_device){
  document.getElementById(id_device).style.top = "3%";
  setTimeout(function(){
    document.getElementById(id_device).style.top = "-55%";
  }, 20000);
}

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
