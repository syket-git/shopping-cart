const iphoneDefaultPrice = document.getElementById('iphone-price').innerText;
const caseDefaultPrice = document.getElementById('iphone-case-price').innerText;

document.getElementById('subtotal').innerText =
  parseInt(iphoneDefaultPrice) + parseInt(caseDefaultPrice);
document.getElementById('total').innerText =
  parseInt(iphoneDefaultPrice) + parseInt(caseDefaultPrice) + 5;

var iphoneFinalPrice = iphoneDefaultPrice;
var caseFinalPrice = caseDefaultPrice;

let iphoneValue = document.getElementById('iphone-value-input').value;
const increment = document.getElementById('increment');
increment.addEventListener('click', function () {
  if (iphoneValue >= 1) {
    document.getElementById('decrement').disabled = false;
  }

  let incrementAmount = iphoneValue++;
  document.getElementById('iphone-value-input').value = incrementAmount + 1;

  const iphonePrice = document.getElementById('iphone-price').innerText;
  const Price = parseInt(iphonePrice) * (incrementAmount + 1);
  iphoneFinalPrice = Price / incrementAmount;

  document.getElementById('iphone-price').innerText = iphoneFinalPrice;

  document.getElementById('subtotal').innerText =
    parseInt(iphoneFinalPrice) + parseInt(caseFinalPrice);
  document.getElementById('total').innerText =
    parseInt(iphoneFinalPrice) + parseInt(caseFinalPrice) + 5;
});

const decrement = document.getElementById('decrement');
decrement.addEventListener('click', function () {
  if (iphoneValue <= 1) {
    document.getElementById('decrement').disabled = true;
  } else {
    let decrementAmount = iphoneValue--;
    document.getElementById('iphone-value-input').value = decrementAmount - 1;

    const iphonePrice = document.getElementById('iphone-price').innerText;
    const Price = parseInt(iphonePrice) * (decrementAmount - 1);
    iphoneFinalPrice = Price / decrementAmount;
    document.getElementById('iphone-price').innerText = iphoneFinalPrice;

    document.getElementById('subtotal').innerText =
      parseInt(iphoneFinalPrice) + parseInt(caseFinalPrice);
    document.getElementById('total').innerText =
      parseInt(iphoneFinalPrice) + parseInt(caseFinalPrice) + 5;
  }
});

let iphoneCaseValue = document.getElementById('iphone-silicone-case-value')
  .value;

const plus = document.getElementById('plus');
plus.addEventListener('click', function () {
  if (iphoneCaseValue >= 1) {
    document.getElementById('minus').disabled = false;
  }

  let plusAmount = iphoneCaseValue++;
  document.getElementById('iphone-silicone-case-value').value = plusAmount + 1;

  const iphoneCasePrice = document.getElementById('iphone-case-price')
    .innerText;
  const Price = parseInt(iphoneCasePrice) * parseInt(plusAmount + 1);
  caseFinalPrice = Price / plusAmount;
  document.getElementById('iphone-case-price').innerText = caseFinalPrice;

  document.getElementById('subtotal').innerText =
    parseInt(caseFinalPrice) + parseInt(iphoneFinalPrice);
  document.getElementById('total').innerText =
    parseInt(caseFinalPrice) + parseInt(iphoneFinalPrice) + 5;
});

const minus = document.getElementById('minus');
minus.addEventListener('click', function () {
  if (iphoneCaseValue <= 1) {
    document.getElementById('minus').disabled = true;
  } else {
    let minusAmount = iphoneCaseValue--;
    document.getElementById('iphone-silicone-case-value').value =
      minusAmount - 1;

    const iphoneCasePrice = document.getElementById('iphone-case-price')
      .innerText;
    const Price = parseInt(iphoneCasePrice) * parseInt(minusAmount - 1);
    caseFinalPrice = Price / minusAmount;
    document.getElementById('iphone-case-price').innerText = caseFinalPrice;

    document.getElementById('subtotal').innerText =
      parseInt(caseFinalPrice) + parseInt(iphoneFinalPrice);
    document.getElementById('total').innerText =
      parseInt(caseFinalPrice) + parseInt(iphoneFinalPrice) + 5;
  }
});

const one = document.querySelector('.remove-item-one');
one.addEventListener('click', function () {
  document.querySelector('.one').style.display = 'none';
});
const two = document.querySelector('.remove-item-two');
two.addEventListener('click', function () {
  document.querySelector('.two').style.display = 'none';
});
