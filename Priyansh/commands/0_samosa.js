 const fs = require("fs");
module.exports.config = {
	name: "samosa",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Samosa") ||
     react.includes("🏴󠁧󠁢󠁷󠁬󠁳󠁿") || 
react.includes("🏴󠁧󠁢󠁥󠁮󠁧󠁿")) {
		var msg = {
				body: "JALDI JALDI KHA LO😋",
				attachment: fs.createReadStream(__dirname + `/noprefix/samosa.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
