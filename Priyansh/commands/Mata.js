const fs = require("fs");
module.exports.config = {
  name: "mata",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "VIRAT SAINI", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("➜") ||
     react.includes("←") ||
     react.includes("▽") ||
react.includes("mata")) {
    var msg = {
        body: `। ༄ᶦᶰᵈ᭄🔥⃝JAI MATA DI❤️❥❥═══༄ᶦᶰᵈ᭄🙏👈`,attachment: fs.createReadStream(__dirname + `/noprefix/mata.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("✨", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
