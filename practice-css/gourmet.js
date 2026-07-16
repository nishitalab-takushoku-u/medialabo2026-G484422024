// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let shop1 = data.results.shop[0];
  console.log("検索結果1件目");
  console.log("店舗名: " + shop1.name);
  console.log("住所: " + shop1.address);
  console.log("予算: " + shop1.budget.name);
  console.log("キャッチコピー: " + shop1.catch);
  console.log("ジャンル: " + shop1.genre.name);
  console.log("営業日時: " + shop1.open);
  console.log("アクセス: " + shop1.access);
  console.log("最寄駅: " + shop1.station_name);

  let shop2 = data.results.shop[1];
  console.log("検索結果2件目");
  console.log("店舗名: " + shop2.name);
  console.log("住所: " + shop2.address);
  console.log("予算: " + shop2.budget.name);
  console.log("キャッチコピー: " + shop2.catch);
  console.log("ジャンル: " + shop2.genre.name);
  console.log("営業日時: " + shop2.open);
  console.log("アクセス: " + shop2.access);
  console.log("最寄駅: " + shop2.station_name);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let divResult = document.querySelector('div#result');
  divResult.textContent = '';

  let htmlText = '<p id="result-count">' + data.results.shop.length + '件がヒットしました.</p>';

  let count = 1;
  for (let shop of data.results.shop) {
    htmlText = htmlText + '<div class="shop-card">';
    htmlText = htmlText + '<h2>検索結果' + count + '件目</h2>';
    htmlText = htmlText + '<h3>店舗名: ' + shop.name + '</h3>';
    htmlText = htmlText + '<ul>';
    htmlText = htmlText + '<li>住所: ' + shop.address + '</li>';
    htmlText = htmlText + '<li>予算: ' + shop.budget.name + '</li>';
    htmlText = htmlText + '<li>キャッチコピー: ' + shop.catch + '</li>';
    htmlText = htmlText + '<li>ジャンル: ' + shop.genre.name + '</li>';
    htmlText = htmlText + '<li>営業日時: ' + shop.open + '</li>';
    htmlText = htmlText + '<li>アクセス: ' + shop.access + '</li>';
    htmlText = htmlText + '<li>最寄駅: ' + shop.station_name + '</li>';
    htmlText = htmlText + '</ul>';
    htmlText = htmlText + '</div>';
    
    count++;
  }

  divResult.innerHTML = htmlText;
}

function kensakuStart() {
  let inputElement = document.querySelector('input#kensaku');
  let key = inputElement.value;
  console.log('検索キー: ' + key);
}

let searchButton = document.querySelector('button#search');
searchButton.addEventListener('click', kensakuStart);

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#search');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let inputElement = document.querySelector('input#kensaku');
  let key = inputElement.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + key + '.json';

  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}