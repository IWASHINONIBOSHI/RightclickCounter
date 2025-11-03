// popup.js (改修版)

// HTMLの読み込みが完了したら、中の処理を実行する
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. このポップアップが開かれた時のURLからデータを抜き出す
  const query = window.location.search;
  const params = new URLSearchParams(query);

  // 2. URLから各データを取得する
  const charCount = params.get('charCount');
  const wordCount = params.get('wordCount');
  const lineCount = params.get('lineCount');
  
  // 3. データがあれば、HTMLの各要素に結果を表示する
  if (charCount !== null) {
    document.getElementById('charCount').textContent = charCount;
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('lineCount').textContent = lineCount;
  } else {
    // もしURLにデータがなかった場合（アイコンクリック時など）
    document.getElementById('charCount').textContent = '0';
    document.getElementById('wordCount').textContent = '0';
    document.getElementById('lineCount').textContent = '0';
  }

});