// background.js (改修版)

// 拡張機能がインストールされた時に実行される
chrome.runtime.onInstalled.addListener(() => {
  // 右クリックメニューを作成
  chrome.contextMenus.create({
    id: "countText",
    title: " 文字数を数える ",
    contexts: ["selection"]  // テキストが選択された時のみ表示
  });
});

// 右クリックメニューがクリックされた時の処理
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "countText") {
    const selectedText = info.selectionText;

    // 1. すぐに計算する
    const charCount = selectedText.length;
    const wordCount = selectedText.trim().split(/\s+/).filter(word => word.length > 0).length;
    const lineCount = selectedText.split('\n').length;

    // 2. 計算結果をURLの「クエリ文字列」という形に変換する
    // 例: ?charCount=93&wordCount=1&lineCount=1
    const queryData = new URLSearchParams({
      charCount: charCount,
      wordCount: wordCount,
      lineCount: lineCount
    });

    // 3. データを付けたURLで、新しいポップアップウィンドウを開く
    chrome.windows.create({
      url: `popup.html?${queryData.toString()}`,
      type: 'popup',  
      width: 280,    // 幅
      height: 300    // 高さ
    });

    // ※ storageへの保存とcontent.jsへのメッセージ送信は、もう不要なので削除！
  }
});