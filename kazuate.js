// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let seikaiFlug = false;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let inputElement = document.querySelector('input#yoso');
  let yoso = parseInt(inputElement.value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  //       正解/不正解のときのメッセージを表示する
  let kaisuSpan = document.querySelector('span#kaisu');
  let resultP = document.querySelector('p#result');

  kaisu = kaisu + 1;
  kaisuSpan.textContent = kaisu;

  if (kaisu >= 4 || seikaiFlug === true) {
    resultP.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
  } else if (yoso === kotae) {
    resultP.textContent = '正解です．おめでとう!';
    seikaiFlug = true;
  } else if (kaisu === 3) {
    resultP.textContent = 'まちがい．残念でした答えは ' + kotae + ' です．';
  } else if (yoso < kotae) {
    resultP.textContent = 'まちがい．答えはもっと大きいですよ';
  } else if (yoso > kotae) {
    resultP.textContent = 'まちがい．答えはもっと小さいですよ';
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector('button#answer');
b.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録