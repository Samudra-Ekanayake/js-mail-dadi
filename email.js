const listaEmailConsentite = [
    "mariorossi@email.com",
    "lucaverdi@email.com",
    "laurabianchi@email.com",
    "alessiaviola@email.com"
];

const emailUtente = prompt("inserisci la tua email");

const emailConsentita = listaEmailConsentite.includes(emailUtente);

if (emailConsentita) {
    console.log("la tua email è stata trovata")
}
    
