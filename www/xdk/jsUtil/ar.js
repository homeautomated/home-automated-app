 var volume = 17;
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
    gE('neve').style.opacity = 0;
  }else{
    gE(a).style.display="block";
    gE("ar").src="images/ar_on.png";
    gE('neve').style.opacity = 1;
  }
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
