function tashizan() {
  let x = document.querySelector('input[name="left"]');
  let y = document.querySelector('input[name="right"]');

  let leftNum = parseInt(x.value);
  let rightNum = parseInt(y.value);

  let result = leftNum + rightNum;

  let ans = document.querySelector('span#answer');
  ans.textContent = result;
}

let b = document.querySelector('button#calc');
b.addEventListener('click', tashizan);