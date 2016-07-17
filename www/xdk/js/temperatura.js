var socket = io.connect('http://192.168.1.99:8245');
var averageTemp = 0;

socket.on('connect', function(data) {	
	socket.on('controlData',function(data){
	  document.getElementById("temperaturabanheiro").innerHTML = data.temp_bathroom.toFixed(1) + '°';
	  document.getElementById("temperaturacozinha").innerHTML = data.temp_kitchen.toFixed(1) + '°';
	  document.getElementById("temperaturaquarto").innerHTML = data.temp_bedroom.toFixed(1) + '°';
	  document.getElementById("temperaturasala").innerHTML = data.temp_room.toFixed(1) + '°';
	  averageTemp = (data.temp_bathroom+data.temp_kitchen+data.temp_bedroom+data.temp_room)/4;
	  document.getElementById("temperaturamedia").innerHTML = averageTemp.toFixed(1) + '°';
	});
});

/*-------------------------------------FUNÇÃO MOSTRAR DIV OCULTA SIDEBAR  -----------------------------------------*/

function mostrarsid(){
  var sidbar = document.getElementById('bar_temperatura');
  return sidbar.style.display === "none" ? sidbar.style.display = "block" : sidbar.style.display = "none";
}

function bloquear(id){
	setTimeout(function(){document.getElementById("sid_temperaturas").disabled = true;},50);
	setTimeout(function(){document.getElementById("sid_temperaturas").disabled = false;},1000);
}

document.getElementById("sid_temperaturas").addEventListener("click", bloquear);
