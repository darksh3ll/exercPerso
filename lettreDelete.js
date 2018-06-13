//Programme qui supprimme une lettre choisie par l`utilisateur

const str          = "j'aime la programmation".toLowerCase();
const letterDelete = "a";                        //Lettre a éffacé
let   compteur     = 0 ;
let   resulat      = "";                         //On stock ici le résulat
for (let i = 0; i < str.length; i++) {
    if (str[i] === letterDelete) {
        str[i].slice(letterDelete);
        compteur++;
    }else {
        resulat += str[i];
    }
}
console.log(resulat);
console.log(`Je viens d'effacer ${compteur} ${letterDelete}`);

//Renvoie j'ime l progrmmtion
//Je viens d'effacer 4 a


//Prototype Slice exemple :

const arr = ['bernard','coucou,','pierre']
console.log(arr.slice(1));
