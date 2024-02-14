/**
 * Démo mon premier JavaScript
 * @author  Jérémy Boegli
 * @version 2.0
 * @since   2024-02-07 (date de création)
 */

'use strict'; // Active le mode strict du JavaScript

const premierP = document.querySelector('p');
const premierUl = document.querySelector('ul');
const toutLesStrong = document.querySelectorAll('strong');
console.log(premierP, premierUl, toutLesStrong);

premierP.innerText = 'Bonjour le monde';
premierUl.style.backgroundColor = 'yellow';

//Parcours le tableau des strongs
for (let i = 0; i < toutLesStrong.length; i++){
    toutLesStrong[i].style.color = 'red';
    toutLesStrong[i].innerText = 'TOTO';
}

// Même chose avec for ... of
for (let element of toutLesStrong){
    element.style.textDecoration = 'overline';
}

/* Gestion de la liste des courses */

const txtArticle = document.querySelector('#article');
const btAjouter = document.querySelector('button.ajouter');
const ulListe = document.querySelector('ul.liste');

console.log(txtArticle, btAjouter, ulListe);

//Fonction ajouter
function ajouter() {
    //Affiche le texte saisi dans le champ
    //alert(txtArticle.value);
    //ulListe.innerHTML += ´<li> ${txtArticle.value} </li>´;
    ulListe.innerHTML += '<li>' + txtArticle.value + '</li>';
}
// Au clic du bouton appelle la fonction ajouter
//btAjouter.onclick = ajouter;
btAjouter.addEventListener('click', ajouter);
/** Même chose avec un arrow function anonyme
    btAjouter.addEventListener('click', function ajouter (){
    if(txtArticle.value.length < 1) {
        alert('Entrez un article');
        return; //Sort de la fonction
        }
    ulListe.innerHTML += '<li> }{txtArticle.value} </li>';
    txtArticle.value = '';
    txtArticle.focus();
}); */

//Ecoute les frappes claviers sur le champ texte
txtArticle.addEventListener('keypress', (event) => {
    //Affiche le code de la touche clavier dans la console
    console.log(event.key);
    //Si la touche est Enter
    if(event.key === 'Enter'){
        btAjouter.click(); // Simule le clic du bouton ajouter
    }
});
