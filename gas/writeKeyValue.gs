// ファイルの概要
// post通信で受け取った内容を
// 事前準備
//  スプレッドシートをWebアプリケーションとして公開とする
//  権限をフルにする
// このスクリプトを更新したときは、webの公開でnewにすること

// 格納先スプレッドシート
// 名前：keyValue
// URL:https://docs.google.com/spreadsheets/d/{スプレッドID}/edit?usp=sharing
// シート名:dataSheet
var SPREAD_ID = "{スプレッドID}";
var SHEET_NAME = "dataSheet";

// シート取得
function getSheet(spreadId, sheetName){
  var ss = SpreadsheetApp.openById(SPREAD_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);
  return sheet;
}

/**
 * シートに書き込みます。
 */
function writeKeyValue(row, key, value) {
  // シート取得
  var sheet = getSheet(SPREAD_ID, SHEET_NAME);
  // データ書き込み
  sheet.getRange(row, 1).setValue(row -1);
  sheet.getRange(row, 2).setValue(key);
  sheet.getRange(row, 3).setValue(value);
  return;
}

// postメソッドで受信する
function doPost(e) {
  var request = getRequest(e);
  
  // シート取得
  var sheet = getSheet(SPREAD_ID, SHEET_NAME);
  var KEY_COLUMN = 2;
  var row = findRow(sheet, request["key"], KEY_COLUMN);
  // keyが見つからなかった場合は次の行を指定します。
  row = row == 0 ? nextRow(sheet) : row ;
  writeKeyValue(row, request["key"], request["value"] );
}

// jsonで受け取ったpostのリクエストを取り出す。
function getRequest(e) {
  var jsonString = e.postData.getDataAsString();
  return JSON.parse(jsonString);
}

// 次の行を返す。
function nextRow(sheet) {
  return sheet.getDataRange().getLastRow() + 1;
}

// シート上のデータの行番号を取得
// @param sheet シート
// @param key 調べるキー
// @param col 列番号
// @returen 見つかった行番号を返す。見つからない場合は0を返す。
function findRow(sheet,key,col){
  //受け取ったシートのデータを二次元配列に取得
  var dat = sheet.getDataRange().getValues(); 

  for(var i=1;i<dat.length;i++){
    if(dat[i][col-1] === key){
      return i+1;
    }
  }
  return 0;
}

// セルの値を取得
function getValue(sheet, row, column) {
  return sheet.getRange(row, column).getValue();
}

// キーをもとにシートから値を取得する
function getKeyValueSample() {
  // シート取得
  var sheet = getSheet(SPREAD_ID, SHEET_NAME);
  var KEY_COLUMN = 2;
  var key = "myIp";
  var row = findRow(sheet,key,KEY_COLUMN);

  var VALUE_COLUMN = 3;
  Logger.log("myIp: " + getValue(sheet, row, VALUE_COLUMN));
}
