//////////////// ここは書き換えてはいけない！ 

let campus = {
  name: "八王子キャンパス",
  address: "八王子市館町"
};

let gakka = [
  { name: "機械システム工学科" },
  { name: "電子システム工学科" },
  { name: "情報工学科" },
  { name: "デザイン学科" }
];

function show() {
  let h2Addr = document.querySelector('h2#addr');
  let pAddr = document.createElement('p');
  pAddr.textContent = campus.address;
  h2Addr.insertAdjacentElement('afterend', pAddr);

  let h2Dept = document.querySelector('h2#dept');
  let ulDept = document.createElement('ul');

  for (let g of gakka) {
    let li = document.createElement('li');
    li.textContent = g.name;
    ulDept.insertAdjacentElement('beforeend', li);
  }
  
  h2Dept.insertAdjacentElement('afterend', ulDept);
}

let showButton = document.querySelector('button#show');
showButton.addEventListener('click', show);