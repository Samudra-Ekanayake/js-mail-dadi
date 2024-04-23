const listaEmailConsentite = [
    "mariorossi@email.com",
    "lucaverdi@email.com",
    "laurabianchi@email.com",
    "alessiaviola@email.com"
];

function controlloEmail() {
    const emailUtente = document.getElementById("emailInput").value


const emailConsentita = listaEmailConsentite.includes(emailUtente);

if (emailConsentita) {
    document.getElementById("messaggio").textContent = "la tua email è stata trovata"  
}

else {
    document.getElementById("messaggio").textContent = "La tua email non è stata trovata"
}
} 
    