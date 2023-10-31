const brandsList = document.querySelector('.brands__list');
// const brandsItems = Array.from(document.querySelectorAll('.brands__item'));
const moreButton = document.querySelector('.brands__more-button');
// const arrow = moreButton.querySelector('.brands__more-icon');
// const btnText = document.querySelector('.brands__button-text');

const lessButton = document.querySelector('.brands__less-button');

// let action = 1;

// function d () {
//   if (action = 1) {
//     toOpenList ()
//   } else if (action = 2) {
//     toHideList ()
//   }
// }

// function defaultList () {
//   for (let i = 6; i < brandsItems.length; i++) {
//     brandsItems[i].classList.add('brands__item--hidden');
//   }
//   lessButton.classList.add('brands__less-button--hidden');
// }

// function toOpenList () {
//   for (let i = 0; i < brandsItems.length; i++) {
//     moreButton.addEventListener('click', function () {
//       brandsItems[i].classList.remove('brands__item--hidden');

//       btnText.textContent = 'Скрыть';
//       arrow.classList.add('brands__less-icon');
//     })
//   }
//   action = 2;
// }

// function toHideList () {
//     moreButton.addEventListener('click', function () {
//       for (let i = 6; i < brandsItems.length; i++) {
//         brandsItems[i].classList.add('brands__item--hidden');
//       }
//     })
//   action = 1;
// }


// defaultList ();
// d ();










function openList () {
  brandsList.classList.add('brands__list--hidden');
  lessButton.classList.add('brands__less-button--hidden');

  moreButton.addEventListener('click', function () {
    brandsList.classList.remove('brands__list--hidden');
    moreButton.classList.add('brands__more-button--hidden');
    lessButton.classList.remove('brands__less-button--hidden');
    
  });
}

openList ();

function closeList () {
  lessButton.addEventListener('click', function () {
    brandsList.classList.add('brands__list--hidden');
    lessButton.classList.add('brands__less-button--hidden');
    moreButton.classList.remove('brands__more-button--hidden');
  })
}

closeList ();