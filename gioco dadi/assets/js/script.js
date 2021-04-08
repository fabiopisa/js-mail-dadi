var numero_utente = prompt("premi invio per generare il tuo numero")

numero_utente =(Math.floor(Math.random()*7)) ;
console.log(numero_utente + " numero utente");

var numero_computer = (Math.floor(Math.random()*7));
console.log(numero_computer + " numero computer");

if(numero_utente>numero_computer){
  document.getElementById('risultato').innerHTML = "HAI VINTO!! <br> il tuo numero è " + numero_utente + " il numero del bot è " + numero_computer;
}else if(numero_utente===numero_computer){
  document.getElementById('risultato').innerHTML = "HAI PAREGGIATO!! <br> il tuo numero è " + numero_utente + " il numero del bot è " + numero_computer;
}else{
  document.getElementById('risultato').innerHTML = "HAI PERSO!! <br> il tuo numero è " + numero_utente + " il numero del bot è " + numero_computer;
}