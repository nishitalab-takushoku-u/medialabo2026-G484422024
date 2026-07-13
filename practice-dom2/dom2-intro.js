function changeDom() {
  let l1 = document.createElement('li');
  l1.textContent = 'ヨット';
  let u1 = document.querySelector('ul#kazoeuta');
  u1.insertAdjacentElement('beforeend', l1);

  let i = document.querySelector('img#bluemoon');
  i.setAttribute('src', 'bluemoon.jpg');

  let a = document.createElement('a');
  a.textContent = '拓殖大学HP';
  a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
  let p1 = document.querySelector('p#takudai');
  p1.insertAdjacentElement('afterend', a);

  let u2 = document.querySelector('ul#kassen');
  u2.remove();

  let u3 = document.createElement('ul');
  
  let red = document.createElement('li');
  red.textContent = '赤';
  u3.insertAdjacentElement('beforeend', red);
  
  let green = document.createElement('li');
  green.textContent = '緑';
  u3.insertAdjacentElement('beforeend', green);
  
  let blue = document.createElement('li');
  blue.textContent = '青';
  u3.insertAdjacentElement('beforeend', blue);
  
  let p2 = document.querySelector('p#primary');
  p2.insertAdjacentElement('afterend', u3);
}

let btn = document.querySelector('button#henkou');
btn.addEventListener('click', changeDom);