const brandsList = document.querySelector('.brands__list');
const moreButton = document.querySelector('.brands__more-button');
const lessButton = document.querySelector('.brands__less-button');

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