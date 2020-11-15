var CHANNEL_ACCESS_TOKEN = "{チャンネルトークンIDをいれます。}";

function doPost(e) {
  // postされたデータから、contents変数に格納されているjsonを取り出します。
  var contents = e.postData.contents;
  // jsonをハッシュマップ化します。
  var obj = JSON.parse(contents)
  // jsonの形式
  // class Contents {
  //   List<Event> events 
  // }
  // class Event {
  //   String type  // だいたい "message"
  //   Source source
  //   String replyToken
  // }
  // class Source {
  //   String userId
  //   String groupId
  //   String roomId
  // }
  var events = obj["events"];
  for(var i = 0; i < events.length; i++){
    if(events[i].type == "message"){
      reply_message(events[i]);
    }
  }
}

// LineにTextMessage形式で返信する
// @param e Events.type="message"がやってくる
function reply_message(e) {
  var user_id = e.source.userId;
  var group_id = e.source.groupId;
  var room_id = e.source.roomId;
  var ids = ["userId: " + user_id, "groupId: " + group_id, "roomId:" + room_id];
  var postData = {
    "replyToken" : e.replyToken,
    "messages" : [
      {
        "type" : "text",
        "text" : "メッセージの書き込みありがとうございます。\n" + ids.join(",")
      }
    ]
  };
  var options = {
    "method" : "post",
    "headers" : {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + CHANNEL_ACCESS_TOKEN
    },
    "payload" : JSON.stringify(postData)
  };
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", options);
}