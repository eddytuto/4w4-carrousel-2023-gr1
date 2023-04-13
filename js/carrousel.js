(function(){
    console.log('début carrousel')
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    boutcarrousel__ouvrir.addEventListener('mousedown',function(){
        carrousel.classList.add('carrousel--ouvrir')
    })
    carrousel__x.addEventListener('mousedown',function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })

})()