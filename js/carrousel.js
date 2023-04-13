(function(){
 console.log('Début du carrousel')
let bouton = document.querySelector(".carrousel__ouvrir")
/* -------------------------------------------------------- Variable du carrousel */
let carrousel  = document.querySelector(".carrousel")
let carrousel__x = document.querySelector(".carrousel__x")
let carrousel__figure = document.querySelector(".carrousel__figure")

/* -------------------------------------------------------- Variable de la galerie */
let galerie = document.querySelector(".galerie")
let galerie__img = galerie.querySelectorAll("img")
// console.log("galerie__img: " + galerie__img.length)
// console.log(carrousel.tagName)


/* ----------------------------------------------------  ouvrir boîte modale */
bouton.addEventListener('mousedown', function(){
    console.log('ouvrir la boîte modale')
    carrousel.classList.add('carrousel--activer')
    ajouter_img_dans_carrousel()

})
/* ----------------------------------------------------  fermer boîte modale */
carrousel__x.addEventListener('mousedown', function(){
    console.log('fermer la boîte modale')
    carrousel.classList.remove('carrousel--activer')

})
/** 
 * ajouter_img_dans_carrousel
 * Ajouter l'ensemble des images de la galerie dans la boîte modale carrousel
 */
function ajouter_img_dans_carrousel()
{
  for (const elm of galerie__img)
  {
    //console.log(elm.getAttribute('src'))
    let img = document.createElement('img')
    img.setAttribute('src', elm.getAttribute('src'))
    console.log (img.getAttribute('src'))
    carrousel__figure.appendChild(img)
  }
}

})()