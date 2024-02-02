var Service_en_cours=false;
var ok=false

function init(min,max){
	var brouzoufs=0;
	var cents=0;
	client.style.color='grey';
	client.style.fontStyle = "italic"
	client.innerHTML='Service en cours';
	min = Math.ceil(min);
	max = Math.floor(max);
	brouzoufs = Math.floor(Math.random() * (max - min)) + min;
	cents = Math.floor(Math.random() * (10 - 0)) / 10.0;
	return brouzoufs+cents;
	};

 
const personne=document.getElementById('personne');
var aleatoire;
var total=document.getElementById("total");
const client=document.getElementById("client");
var paye=document.getElementById('paye');
var nombre=1;

client.addEventListener('click',function() {
	ok=true;
	if (Service_en_cours==false){
		aleatoire=init(0,20);
		Service_en_cours=true
		total.innerHTML=aleatoire;
		paye.innerHTML=Math.ceil(aleatoire/10)*10;
		personne.innerHTML=nombre;
		nombre+=1;
		statut.style.color='black';
		statut.innerHTML='Non traité';
		monnaies.style.display="none";
    	caisse.innerHTML="ouvrir le tiroire caisse";}
    });

const statut=document.getElementById('statut');
const monaie=document.getElementById('monaie');

/* Ma fonction pour collecter la monnaie n'inter-agissais pas avec ma page
var ajout=0;
function collecte(x){
	ajout+=x;
	monaie.innerHTML=ajout;
}*/

var ajout=0;
var _20=document.getElementById('_20');
_20.addEventListener('click',function(){
	ajout+=20;
	monaie.innerHTML=ajout

});
var _10=document.getElementById('_10');
_10.addEventListener('click',function(){
	ajout+=10;
	monaie.innerHTML=ajout;
});
var _5=document.getElementById('_5');
_5.addEventListener('click',function(){
	ajout+=5;
	monaie.innerHTML=ajout;
});
var _2=document.getElementById('_2');
_2.addEventListener('click',function(){
	ajout+=2;
	monaie.innerHTML=ajout;
});
var _1=document.getElementById('_1');
_1.addEventListener('click',function(){
	ajout+=1;
	monaie.innerHTML=ajout;
});

var _0_5=document.getElementById('_0_5');
_0_5.addEventListener('click',function(){
	ajout+=0.500;
	monaie.innerHTML=ajout;
});

var _0_2=document.getElementById('_0_2');
_0_2.addEventListener('click',function(){
	ajout+=0.200;
	monaie.innerHTML=ajout;
});

 _0_1=document.getElementById('_0_1');
_0_1.addEventListener('click',function(){
	ajout+=0.100;
	monaie.innerHTML=ajout;
});

function ouvrir_fermer(){
	ajout=0;
	monaie.innerHTML=0;
  if(getComputedStyle(monnaies).display != "none"){
    monnaies.style.display = "none";
    caisse.innerHTML="ouvrir le tiroire caisse";
    monaie.innerHTML=0;

  } else {
    monnaies.style.display = "flex";
    caisse.innerHTML="Fermer le tiroire caisse";
  }
};
caisse.onclick = ouvrir_fermer;

var rate=document.getElementById('rate');
var perte=0;
const rendre_la_monnaie=document.getElementById("rendre");
rendre_la_monnaie.addEventListener('click',function() {
	if (ok==true){
	var rendu=(Math.ceil(aleatoire/10)*10)-aleatoire
	if (rendu <ajout){
		statut.style.color='red';
		statut.innerHTML='Rendu plus que nécessaire !';
		perte+=1;
		rate.innerHTML=perte;
	}
	else if (rendu>ajout){
		statut.style.color='red';
		statut.innerHTML='Il manque de la monnaie !'
		perte+=1;
		rate.innerHTML=perte;
	}
	else{
		statut.style.color='green';
		statut.innerHTML='Le compte est bon';
	}
	client.style.color='black';
	client.style.fontStyle = ""
	client.innerHTML=' Servire le prochaine client';
	Service_en_cours=false;
	ajout=0;
	monaie.innerHTML=ajout;
	ok=false;
	}
});