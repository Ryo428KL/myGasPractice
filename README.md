# gasPractice
google app script 練習用

# 準備
## git cloneする
```
git clone https://github.com/Ryo428KL/myGasPractice.git
cd myGasPractice
```
## claspのインストールしてgoogleアカウントを認証
```
npm install -g @google/clasp
clasp login
```
## projectを作成
```
clasp create <project_name>
// sheetsを選択してEnter
```
## projectをpushする
```
clasp push
```
上記実施後、ドライブにスプレッドシート、プロジェクトに<project_name>が作成される

# 関数とか色々
## ログ出力
```
Logger.log('hello world!');
```
## シート情報を取得する
```
const sheet = SpreadsheetApp.getActiveSheet(); // 今開いているセル情報
```
## 個別セルの値の取得/書き込み
```
const cell = sheet.getRange('B12');
Logger.log(cell.getValue()); // セル情報をログ出力
cell.setValue('HELLO WORLD'); // セルに情報を書き込み
```
## 範囲セルの値の取得/書き込み


# その他
## 関数をシート上から実行するにあたって
図形挿入から図形作成→作成した図形を右クリックして左上の設定→スクリプトの割り当て

これとかシートは構成管理できないのか
→pullで落ちてこないからscript管理だけのようである


