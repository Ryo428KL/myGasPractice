function firstFunction(){
  Logger.log('hello world!');
}
function writeCellSample(){
  // 特定のセルに固定値の書き込み
  const sheet = SpreadsheetApp.getActiveSheet(); 
  sheet.getRange('A5').setValue('writeCellSample');
}


