function sendMail(){
  const sheet = SpreadsheetApp.getActiveSheet();
  // メールアドレス
  const toAddress = sheet.getRange('B11').getValue();
  // タイトル
  const title = sheet.getRange('B12').getValue();
  // 本文
  const content = sheet.getRange('B13').getValue();
  // ログ出力
  outputLog('アドレス:'+toAddress);
  outputLog('メールタイトル:'+title);
  outputLog('メール本文:'+content);
}

function outputLog(message){
  Logger.log(message);
}



