const swiper = new Swiper('.Slider-container', {
  effect: 'cards',
  grabCursor: true,
  centerdSlides: true,
  loop: true,
});
swiper.changeDirection('horizontal');

swiper.on('slideChange', () => {
  const { activeIndex } = swiper;
  const { slides } = swiper;
  const activeSlide = slides[activeIndex];
  const deckSelectButton = document.querySelector('.button-27');

  deckSelectButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const inner = activeSlide.innerText.split('.');
    const url = `question/${inner[0]}`;
    window.location.href = url;
    const lala = await fetch(url);
  });
});
