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

// ANIMAÇÃO SEÇÃO 'SOBRE MIM'
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

const animeScroll = () => {
  const windowTop = window.pageYOffset + ((window.innerHeight * 0.75));
  target.forEach(function(element) {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

window.addEventListener('scroll', () => {
  animeScroll();
})