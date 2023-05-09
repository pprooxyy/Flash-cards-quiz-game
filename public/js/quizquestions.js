const swiper2 = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperButtonArr = document.querySelectorAll('.swiper-slide');
const submitButton = document.querySelector('.submit-quiz');

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const questArray = document.querySelectorAll('input[type="radio"]:checked');
  const arrayOfProps = submitButton.name.split('@');
  const arrayOfInputProps = [...questArray].map((el) => {
    return el.id;
  });
  if (questArray.length !== Number(arrayOfProps[1])) {
    alert('Try to answer on every question');
  } else {
    const answersObj = {
      deskId: arrayOfProps[0],
      userId: arrayOfProps[2],
    };
    [...arrayOfInputProps].forEach((el) => {
      answersObj[el.split('@')[1]] = el.split('@')[0];
    });
    const response = await fetch('/statistic/post-game', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answersObj),
    });
    window.location.href = '/post-game-statistic';
  }
});
