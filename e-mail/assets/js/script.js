var mails =[
  "giacomo.rossi@gmail.com",
  "carla.franchi@gmail.com",
  "aldo.baglio@gmail.com",
  "minoca.bellucci@gmail.com",
  "birra.poretti@gmail.com",
  "santo.mario@gmail.com",
  "mamma.mia@gmail.com",
  "pietro.blu@gmail.com",
  "vabene.così@gmail.com",
  "sicuramente.no@gmail.com",
  "magari.si@gmail.com",
  "fabio.pisanelli@gmail.com",
  "speriamo.inbene@gmail.com"
];

var mail_richiesta = prompt("digita qui la tua mail");

var accesso = false;

for(var i=0; i<mails.length; i++){
  var nome= mails[i]
  console.log(nome)
  if(nome === mail_richiesta){
    accesso = true
    console.log("TROVATO...ACCESSO CONFERMATO");
    break;
  }
}

if(accesso){
  document.getElementById('result').innerHTML="ACCESSO CONFERMATO <br> La tua mail è nella lista"
}else{
  document.getElementById('result').innerHTML="ACCESSO NEGATO <br> La tua mail non è nella lista"
}