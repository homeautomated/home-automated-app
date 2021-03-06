var bathroom            = 0;
var bedroom             = 0;
var kitchen             = 0;
var roomOne             = 0;
var roomTwo             = 0;
var valorCheck          = 0;
var connection_lamp_all = 0;
var teste = 0;
var socket              = io.connect('http://192.168.0.104:8245'); //casa ip bruno
//var socket              = io.connect('http://192.168.1.99:8245');

block_left_all_server("block_all","67%","100%");

socket.on('connect', function(data){
  disblock_left_all_server("block_all","100%","67%");
  socket.on('allLamp',function(data){
    if(data.lamp_all_conect == 5){
      modifyLamps(1, 5);
      lampOn("lbanheiro");
      lampOn("lcozinha");
      lampOn("lquarto");
      lampOn("lsala1");
      lampOn("lsala2");
    } else if(data.lamp_all_conect != 0) {
      connection_lamp_all = data.lamp_all_conect;
      data.lampBathroom == 0 ? lampOff("lbanheiro") : lampOn("lbanheiro");
      bathroom = data.lampBathroom;
      data.lampKitchen == 0 ? lampOff("lcozinha") : lampOn("lcozinha");
      kitchen = data.lampKitchen;
      data.lampBedroom == 0 ? lampOff("lquarto") : lampOn("lquarto");
      bedroom = data.lampBedroom;
      data.lampRoomOne == 0 ? lampOff("lsala1") : lampOn("lsala1");
      roomOne = data.lampRoomOne;
      data.lampRoomTwo == 0 ? lampOff("lsala2") : lampOn("lsala2");
      roomTwo = data.lampRoomTwo;
    }
    status();
  });
  socket.on('disconnect', function(){
    block_left_all_server("block_all","67%","100%");
    location.reload();
  });
});

socket.on('lamp_All',function(data){
  switch (data){
    case "lampBathroom":
      lampbanheiro();
      break;
    case "lampKitchen":
      lampcozinha();
      break;
    case "lampBedroom":
      lampquarto();
      break;
    case "lampRoomOne":
      lampsala1();
      break;
    case "lampRoomTwo":
      lampsala2();
      break;
    case "lamp_All_Home":
      all_lamps();
      break;
 }
});

/*-------------------------------------FUNÇÃO LIGAR/DESLIGAR LAMPADA BANHEIRO -----------------------------------------*/


function lampbanheiro(){
  if(bathroom == 0){
    lampOn("lbanheiro");
    bathroom  = 1;
    connection_lamp_all += 1;
  } else {
    lampOff("lbanheiro");
    bathroom = 0;
    connection_lamp_all -= 1;
  }
  block("block_bathroom","0em","-10em");
  block("block_all","67%","100%");
  status();
}

function sendLampBathroom(){
  socket.emit('lamp_All', "lampBathroom");
}

/*-------------------------------------FUNÇÃO LIGAR/DESLIGAR LAMPADA COZINHA -----------------------------------------*/

function lampcozinha(){
  if(kitchen == 0){
    lampOn("lcozinha");
    kitchen = 1;
    connection_lamp_all += 1;
  } else {
    lampOff("lcozinha");
    kitchen = 0;
    connection_lamp_all -= 1;
  }
  block("block_kitchen","0em","-10em");
  block("block_all","67%","100%");
  status();
}

function sendLampKitchen(){
  socket.emit('lamp_All', "lampKitchen");
}

/*-------------------------------------FUNÇÃO LIGAR/DESLIGAR LAMPADA QUARTO -----------------------------------------*/

function lampquarto(){
  if(bedroom == 0){
    lampOn("lquarto");
    bedroom = 1;
    connection_lamp_all += 1;
  } else {
    lampOff("lquarto");
    bedroom = 0;
    connection_lamp_all -= 1;
  }
  block_left("block_bedroom","0em","-10em");
  block("block_all","67%","100%");
  status();
}

function sendLampBedroom(){
  socket.emit('lamp_All', "lampBedroom");
}

/*-------------------------------------FUNÇÃO LIGAR/DESLIGAR LAMPADA SALA1 -----------------------------------------*/

function lampsala1(){
  if(roomOne == 0){
    lampOn("lsala1");
    roomOne  = 1;
    connection_lamp_all += 1;
  }else{
    lampOff("lsala1");
    roomOne = 0 ;
    connection_lamp_all -= 1;
  }
  block_left("block_roomOne","50%","102%");
  block("block_all","67%","100%");
  status();
}

function sendLampRoomOne(){
 socket.emit('lamp_All', "lampRoomOne");
}

/*-------------------------------------FUNÇÃO LIGAR/DESLIGAR LAMPADA SALA2 -----------------------------------------*/

function lampsala2(){
  if(roomTwo == 0){
    lampOn("lsala2");
    roomTwo  = 1;
    connection_lamp_all += 1;
  } else {
    lampOff("lsala2");
    roomTwo = 0 ;
    connection_lamp_all -= 1;
  }
  block("block_roomTwo","67%","100%");
  block("block_all","67%","100%");
  status();
}

function sendLampRoomTwo(){
 socket.emit('lamp_All', "lampRoomTwo");
}

/*-------------------------------------FUNÇÃO LIGAR/DESLIGAR TODAS AS LAMPADAS -----------------------------------------*/

function all_lamps(){
  if(valorCheck == 0){
    lampOn("lbanheiro");
    lampOn("lcozinha");
    lampOn("lquarto");
    lampOn("lsala1");
    lampOn("lsala2");
      document.getElementById("all_lamp").src="images/todasoff.png";
    modifyLamps(1,5);

  }else{
    document.getElementById("all_lamp").src="images/todason.png";
    lampOff("lbanheiro");
    lampOff("lcozinha");
    lampOff("lquarto");
    lampOff("lsala1");
    lampOff("lsala2");
    modifyLamps(0,0);

  }
  block_left_all("block_all","67%","100%");
  status();
}

function sendLamp_all(){
 socket.emit('lamp_All',"lamp_All_Home");
}

function status() {
  if (connection_lamp_all == 5) {
    document.getElementById("all_lamp").src="images/todasoff.png";
    valorCheck = 1;
    block_left_all("block_all","67%","100%");
  } else {
    valorCheck = 0;
    document.getElementById("all_lamp").src="images/todason.png";
  }

}

/*------------------------------------- FUNÇÃO ECONOMIA DE LINHAS -----------------------------------------*/

function modifyLamps(un_lamp,un_all_lamp){
  bathroom = un_lamp;
  kitchen = un_lamp;
  bedroom = un_lamp;
  roomOne = un_lamp;
  roomTwo = un_lamp;
  valorCheck = un_lamp;
  connection_lamp_all = un_all_lamp;
}

/*------------------------ FUNÇÃO MOSTRAR DIV OCULTA SIDIBAR ----------------------------------*/

function mostrarsid(){
  var sidbar = document.getElementById('sid_iluminacao');
  return sidbar.style.display === "none" ? sidbar.style.display = "block" : sidbar.style.display = "none";
}
function bloquear(id){

setTimeout(function(){document.getElementById("sidbar_lamp").disabled = true;},50);
setTimeout(function(){document.getElementById("sidbar_lamp").disabled = false;},1000);
}
document.getElementById("sidbar_lamp").addEventListener("click", bloquear);


/*----------------------------- FUNÇÃO QUE FAZ TROCA DE IMG LAMPADAS  ---------------------------*/

function lampOn(idlamp){
  document.getElementById(idlamp).src="images/lampadaon.png";
}

function lampOff(idlamp){
  document.getElementById(idlamp).src="images/lampadaoffnova.png";
}


//FUNÇÃO PARA BLOQUEAR EM 5 SEGUNDOS
function block(id,siz,siz_){
  document.getElementById(id).style.top = siz;
  setTimeout(function(){
    document.getElementById(id).style.top = siz_;
  }, 1000);
}

function block_left(id,siz,siz_){
  document.getElementById(id).style.left = siz;
  setTimeout(function(){
    document.getElementById(id).style.left = siz_;
  }, 1000);
}

function block_left_all(id,siz,siz_){
  document.getElementById(id).style.top = siz;
  block("block_roomTwo","67%","100%");
  block_left("block_roomOne","50%","102%");
  block_left("block_bedroom","0em","-10em");
  block("block_kitchen","0em","-10em");
  block("block_bathroom","0em","-10em");
  setTimeout(function(){
    document.getElementById(id).style.top = siz_;
  }, 1000);
}

function block_left_all_server(id,siz,siz_){
  document.getElementById(id).style.top = siz;
  block_server("block_roomTwo","67%","100%");
  block_left_server("block_roomOne","50%","102%");
  block_left_server("block_bedroom","0em","-10em");
  block_server("block_kitchen","0em","-10em");
  block_server("block_bathroom","0em","-10em");
}

function block_server(id,siz,siz_){
  document.getElementById(id).style.top = siz;
}

function block_left_server(id,siz,siz_){
  document.getElementById(id).style.left = siz;
}

function disblock_left_all_server(id,siz,siz_){
  document.getElementById(id).style.top = siz;
  block_server("block_roomTwo","100%","67%");
  block_left_server("block_roomOne","102%","50%");
  block_left_server("block_bedroom","-10em","0em");
  block_server("block_kitchen","-10em","0em");
  block_server("block_bathroom","-10em","0em");
}

(function(){
  setTimeout(function(){
    location.reload();
  }, 100000);
})();
