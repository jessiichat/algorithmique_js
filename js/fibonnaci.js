// Algorithme pour le calcul
    // Fn  = F(n-2) + F(n-1)
    // let result = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length];
    // fibonacci.push(result);

// déclaration du tableau
const Fibonacci = [0, 1, 2, 3, 5];
// déclaration d'une variable neutre
let n = 0;

// Calculer les 50 termes qui suivent les 5 premiers et les afficher
for (let i = 5; i < 50; i++){
    n = Fibonacci[i-2] + Fibonacci[i-1];
    Fibonacci.push(n);   
}

//console.log(Fibonacci);


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

    // if(puissance === 0){
    //     return resultat
    // }

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
