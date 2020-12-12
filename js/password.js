const login = "avatar200";
const pwd = "12345678";

//L’application doit recevoir deux entrées - login - mot de passe.
//=> prompt
let userLogin;
let userPassword;
let count = 0;

//Tant le mot de passe ou le login sont faux => refaire la demande au user.
//Le user n’a que 3 essais pour entrer son login et pwd. Au dela,
//le programme s’arrête, et on affiche ‘compte bloqué !’.
do{
    userLogin = window.prompt("Saisissez votre login : ");
    userPassword = window.prompt("Saisissez votre password : ");

    if(userLogin != login || userPassword != pwd){
        console.log("bad password or login"); 
        console.log("compte bloqué");
    } else {
        console.log("success");
    }

    //Si le user entre une chaine vide
    //Afficher ‘Veuillez remplir les champs’`
    if (userLogin === "" || userPassword === ""){
        console.log("Veuillez remplir les champs");
    }

    count++;
}
while ((userLogin != login || userPassword != pwd) && count <= 2);

//Si ces deux paramètres sont justes, on affiche ‘success’
//Si l’un des deux est faux on affiche ‘bad password or login’
if(userLogin != login || userPassword != pwd){
    console.log("bad password or login"); 
    console.log("compte bloqué");
} else {
    console.log("success");
}