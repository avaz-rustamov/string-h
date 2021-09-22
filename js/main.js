var elForm = document.querySelector('.form');

var elFormInputFirst = document.querySelector('.form-input__first');
var elFormInputSecond = document.querySelector('.form-input__second');
var elSiteNav = document.querySelector('.site-nav');

var elArray = [];




elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();



  var elFormInputFirstValue = elFormInputFirst.value.trim();
  elFormInputFirst.value = null;



  var elFormInputSecondValue = elFormInputSecond.value.trim();
  elFormInputSecond.value  = null;

  var array = {
    name: elFormInputFirstValue,
    surname: elFormInputSecondValue
  };

  elArray.push(array);
  for(var itemArray of elArray) {
    var siteItem = document.createElement('li');
    siteItem.setAttribute('class', 'site-nav__item');
    siteItem.textContent = itemArray.name + " ";

    var itemBold = document.createElement('bold');
    itemBold.setAttribute('class', 'item-bold');
    itemBold.textContent =  itemArray.surname;

    siteItem.appendChild(itemBold);
    elSiteNav.appendChild(siteItem);
  }
});