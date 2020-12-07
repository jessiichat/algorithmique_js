// Algorithme pour le calcul
// 2 * 2 = 4
// 2 * 2 * 2 = 8
// 2 * 2 * 2 * 2 = 16



// function puissance(nombre, puissance){
//     // déclaration de la somme
//     let resultat = 1;

//     // Si puissance est inférieur à 0 le résultat vaut 1/nombre*nombre
//     if (puissance < 0){
//         for (let i = -1; i >= puissance; i--){
//             resultat *= 1/nombre;
//         }
//     // Si puissance est égale à 0 le résultat vaut nombre*nombre
//     } else if (puissance === 0){

//     // Si puissance est égale à 1 le résultat vaut le nombre
//     } else {
//         for (let i = 1 ; i <= puissance; i++){
//             resultat *= nombre;
//         }
//     }

//     return resultat;
// }

function puissance(nombre, puissance){
    // déclaration de la somme
    let resultat = 1;

    if(puissance === 1){
        return resultat
    }

    // Math.abs retourne la valeur absolue
    for (let i = 0; i < Math.abs(puissance); i++){
        resultat *= nombre;
    }

    
    if (puissance < 0){
        return 1/resultat;
    } else{
        return resultat;
    }
}
