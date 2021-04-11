(function(){
  let burger = document.querySelector('.burger');
  let nav = document.querySelector('#'+burger.dataset.target);

  burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });
})();

//  ANIMAÇÃO LETRAS DE MÁQUINA
function typeWrite (elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i)
  })
}

const paragraphHero = document.querySelector('.paragraph-hero');
typeWrite(paragraphHero);

// ANIMAÇÃO 'SOBRE MIM'
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

const animeScroll = () => {
  const windowTop = window.pageXOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
      console.log(target)
    } else {
      element.classList.remove(animationClass);
    }
  })
}

window.addEventListener('scroll', () => {
  animeScroll();
})