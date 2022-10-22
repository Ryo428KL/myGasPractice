// 練習1：メールを送信するスクリプトを作成する
function sendMail(){
  const sheet = SpreadsheetApp.getActiveSheet();
  // emailクラスを作成
  const mail = new email(
    sheet.getRange('B11').getValue(),
    sheet.getRange('B12').getValue(),
    sheet.getRange('B13').getValue()
  );
  // ログで送信内容を確認
  outputLog(JSON.stringify(mail,null,'\t'));
  // email送信
  sendEmail(mail, {});
}

// 練習2：リストの扱い方について
function handleList(){
  const sheet = SpreadsheetApp.getActiveSheet();
  // 対象のセルの情報をリストとして扱う
  sheet.getRange('A19').getValue().split(',').forEach(v => {
    outputLog(v);
  });
}

// 練習3：別シートに用意した名簿(疑似)から一覧を取得する
function getClientList(){
  // 名簿シート名を取得
  const clientListSheetName = SpreadsheetApp.getActiveSheet().getRange('B24').getValue();
  const clientSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(clientListSheetName);
  let no = 1;
  let hasNextRow = isEntered(clientSheet, no);
  const clientList = [];
  while(hasNextRow){
    clientList.push(getClientUnitRowData(clientSheet, no));
    no ++;
    hasNextRow = isEntered(clientSheet, no);
  }
  outputLog(JSON.stringify(clientList, null, '\t'));
}

// 名簿1行のデータを取得
function getClientUnitRowData(sheet, clientNo){
  return new client(
    clientNo,
    sheet.getRange('C' + (clientNo + 2)).getValue(),
    sheet.getRange('D' + (clientNo + 2)).getValue(),
    sheet.getRange('E' + (clientNo + 2)).getValue(),
    sheet.getRange('F' + (clientNo + 2)).getValue(),
    sheet.getRange('G' + (clientNo + 2)).getValue(),
    sheet.getRange('H' + (clientNo + 2)).getValue(),
  );
}

// 入力済の行か否かを判定する
function isEntered(sheet, no){
  return Boolean(sheet.getRange('B' + (no+2)).getValue());
}

// emial送信処理
function sendEmail(sendInf, options){
  GmailApp.sendEmail(sendInf.toAdress, sendInf.subject, sendInf.body, options);
}

// ログ出力
function outputLog(message){
  Logger.log(message);
}

// email送信用情報を格納したクラス
class email{
  constructor(toAdress, subject, body){
    this.toAdress = toAdress;
    this.subject = subject;
    this.body = body;
  }
}

// 顧客情報を格納したクラス
class client{
  constructor(no, firstName, lastName, address, phone, mobilePhonre, email){
    this.no = no;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.mobilePhonre = mobilePhonre;
    this.email = email;
  }
}




