// Déclarer un tableau contenant tout l'alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let newMessage = "";
let gap = 3;
let message = "avengers";

// Définir la première lettre et créer un décalage
// par exemple de 3 lettres : A = D
//const firstLetter = message.charAt(0);
//let regex = firstLetter.replace(alphabet.charAt(0), alphabet.charAt(3));

// Remplir le nouveau tableau avec les nouvelles lettres
// Remplacer toutes les lettres suivantes
for (let i = 0; i < message.length; i++){ 
    newMessage += message[i].replace(message.charAt(i), alphabet.charAt(i + gap));

    // // Si on arrive à la lettre 24 on remplace par a
    // if (i === alphabet.length - 3){
    //     message[i] = message[i].replace(message[alphabet.length - 3], alphabet.charAt(0));
    // }

    // // Si on arrive à la lettre 25 on remplace par b
    // if (i === alphabet.length - 2){
    //     message[i] = message[i].replace(message[alphabet.length - 2], alphabet.charAt(1));
    // }

    // // Si on arrive à la lettre 26 on remplace par c
    // if (i === alphabet.length){
    //     message[i] = message[i].replace(message[alphabet.length], alphabet.charAt(2));
    // }
}

console.log(newMessage);

// Création d'une fonction prenant en paramètres le message et le décalage
function cesar()