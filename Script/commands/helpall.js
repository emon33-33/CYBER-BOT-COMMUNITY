module.exports.config = {
  name: "helpall",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "💯🎯 ᴄʏʙᴇʀ ᴍᴜꜱʟɪᴍ ᴅᴇꜰᴇɴꜱᴇ 🎯💯",
  description: "FREE SET-UP MESSENGER",
  commandCategory: "system",
  usages: "[Name module]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 20
  }
};
module.exports.languages = {
  en: {
    moduleInfo: `╭──────•◈•──────╮
 | CMD CHAT BOT
 |●𝗡𝗮𝗺𝗲: •—» %1 «—•
 |●𝗨𝘀𝗮𝗴𝗲: %3
 |●𝗗𝗲𝘀𝗰𝗿𝗶p𝘁𝗶𝗼𝗻: %2
 |●𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆: %4
 |●𝗪𝗮𝗶𝘁𝗶𝗻𝗴 𝘁𝗶𝗺𝗲: %5 seconds(s)
 |●𝗣𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻: %6
 |𝗠𝗼𝗱𝘂𝗹𝗲 𝗰𝗼𝗱𝗲 𝗯𝘆
 |💯🎯 ᴄʏʙᴇʀ ᴍᴜꜱʟɪᴍ ᴅᴇꜰᴇɴꜱᴇ 🎯💯 «—•
╰──────•◈•──────╯`,
    helpList: "[ There are %1 commands on this bot, Use: \"%2help nameCommand\" to know how to use! ]",
    user: "User",
    adminGroup: "Admin group",
    adminBot: "Admin bot"
  }
};
module.exports.handleEvent = function ({
  api: _0x5b448d,
  event: _0x1b0f3a,
  getText: _0x9ea8dd
}) {
  const {
    commands: _0x4a806c
  } = global.client;
  const {
    threadID: _0x3aed60,
    messageID: _0x2aefd8,
    body: _0x26a366
  } = _0x1b0f3a;
  if (!_0x26a366 || typeof _0x26a366 == "undefined" || _0x26a366.indexOf("help") != 0) {
    return;
  }
  const _0x30c8db = _0x26a366.slice(_0x26a366.indexOf("help")).trim().split(/\s+/);
  if (_0x30c8db.length == 1 || !_0x4a806c.has(_0x30c8db[1].toLowerCase())) {
    return;
  }
  const _0x30acf4 = global.data.threadData.get(parseInt(_0x3aed60)) || {};
  const _0x536d59 = _0x4a806c.get(_0x30c8db[1].toLowerCase());
  const _0x5962a7 = _0x30acf4.hasOwnProperty("PREFIX") ? _0x30acf4.PREFIX : global.config.PREFIX;
  return _0x5b448d.sendMessage(_0x9ea8dd("moduleInfo", _0x536d59.config.name, _0x536d59.config.description, "" + _0x5962a7 + _0x536d59.config.name + " " + (_0x536d59.config.usages ? _0x536d59.config.usages : ""), _0x536d59.config.commandCategory, _0x536d59.config.cooldowns, _0x536d59.config.hasPermssion == 0 ? _0x9ea8dd("user") : _0x536d59.config.hasPermssion == 1 ? _0x9ea8dd("adminGroup") : _0x9ea8dd("adminBot"), _0x536d59.config.credits), _0x3aed60, _0x2aefd8);
};
module.exports.run = function ({
  api: _0x64d666,
  event: _0x1e7ccd,
  args: _0x290434,
  getText: _0x272a7d
}) {
  const _0x519cb9 = require("axios");
  const _0x33b740 = require("request");
  const _0x314439 = require("fs-extra");
  const {
    commands: _0x288db6
  } = global.client;
  const {
    threadID: _0x12d8be,
    messageID: _0x46b400
  } = _0x1e7ccd;
  const _0x5e13e8 = _0x288db6.get((_0x290434[0] || "").toLowerCase());
  const _0x10c4c6 = global.data.threadData.get(parseInt(_0x12d8be)) || {};
  const {
    autoUnsend: _0x7b08b5,
    delayUnsend: _0x3b4cc3
  } = global.configModule[this.config.name];
  const _0x4722cf = _0x10c4c6.hasOwnProperty("PREFIX") ? _0x10c4c6.PREFIX : global.config.PREFIX;
  if (_0x290434[0] == "all") {
    const _0x2f7eee = _0x288db6.values();
    var _0x15c87e = [];
    var _0xf49f2a = "";
    for (const _0x4df3ea of _0x2f7eee) {
      if (!_0x15c87e.some(_0x132891 => _0x132891.group.toLowerCase() == _0x4df3ea.config.commandCategory.toLowerCase())) {
        _0x15c87e.push({
          group: _0x4df3ea.config.commandCategory.toLowerCase(),
          cmds: [_0x4df3ea.config.name]
        });
      } else {
        _0x15c87e.find(_0x150ce7 => _0x150ce7.group.toLowerCase() == _0x4df3ea.config.commandCategory.toLowerCase()).cmds.push(_0x4df3ea.config.name);
      }
    }
    _0x15c87e.forEach(_0x163969 => _0xf49f2a += "❄️ " + (_0x163969.group.charAt(0).toUpperCase() + _0x163969.group.slice(1)) + " \n" + _0x163969.cmds.join(" • ") + `

`);
    return _0x519cb9.get("https://loidsenpaihelpapi.miraiandgoat.repl.co").then(_0x375af8 => {
      let _0x3d2f35 = _0x375af8.data.data.substring(_0x375af8.data.data.lastIndexOf(".") + 1);
      let _0x1dcc91 = "61573593014054";
      _0x64d666.getUserInfo(parseInt(_0x1dcc91), (_0x27e2f5, _0x58fcde) => {
        if (_0x27e2f5) {
          return console.log(_0x27e2f5);
        }
        var _0x4f4a1b = Object.keys(_0x58fcde);
        var _0xb863df = _0x58fcde[_0x4f4a1b].name.replace("@", "");
        let _0x9ca67e = function () {
          _0x64d666.sendMessage({
            body: `✿🄲🄾🄼🄼🄰🄽🄳 🄻🄸🅂🅃✿

` + _0xf49f2a + ("✿══════════════✿\n│𝗨𝘀𝗲 " + _0x4722cf + "help [Name?]\n│𝗨𝘀𝗲 " + _0x4722cf + `help [Page?]
│𝗡𝗔𝗠𝗘 𝗢𝗪𝗡𝗘𝗥 : 💯🎯 ᴄʏʙᴇʀ ᴍᴜꜱʟɪᴍ ᴅᴇꜰᴇɴꜱᴇ 🎯💯
│𝗧𝗢𝗧𝗔𝗟 : ` + _0x288db6.size + "\n————————————"),
            mentions: [{
              tag: _0xb863df,
              id: _0x1dcc91,
              fromIndex: 0
            }],
            attachment: _0x314439.createReadStream(__dirname + ("/cache/472." + _0x3d2f35))
          }, _0x1e7ccd.threadID, (_0x436f26, _0x612d8b) => {
            _0x314439.unlinkSync(__dirname + ("/cache/472." + _0x3d2f35));
            if (_0x7b08b5 == false) {
              // TOLOOK
              setTimeout(() => {
                return _0x64d666.unsendMessage(_0x612d8b.messageID);
              }, _0x3b4cc3 * 1000);
            } else {
              return;
            }
          }, _0x1e7ccd.messageID);
        };
        _0x33b740(_0x375af8.data.data).pipe(_0x314439.createWriteStream(__dirname + ("/cache/472." + _0x3d2f35))).on("close", _0x9ca67e);
      });
    });
  }
  ;
  if (!_0x5e13e8) {
    const _0x45ae1c = [];
    const _0x42ee77 = parseInt(_0x290434[0]) || 1;
    const _0x1f48e3 = 999;
    let _0x40f233 = 0;
    let _0x1d56bd = "";
    for (var [_0x55a50f, _0x379946] of _0x288db6) {
      _0x55a50f += "";
      _0x45ae1c.push(_0x55a50f);
    }
    _0x45ae1c.sort((_0x18e95c, _0x2dfc14) => _0x18e95c.data - _0x2dfc14.data);
    const _0x53ea96 = _0x1f48e3 * _0x42ee77 - _0x1f48e3;
    _0x40f233 = _0x53ea96;
    const _0x415bb4 = _0x45ae1c.slice(_0x53ea96, _0x53ea96 + _0x1f48e3);
    for (let _0xf67df2 of _0x415bb4) {
      _0x1d56bd += "•—»[ " + _0xf67df2 + " ]«—•\n";
    }
    const _0x4e8dde = `╭──────•◈•──────╮
 | CMD CHAT BOT 
 | 🄲🄾🄼🄼🄰🄽🄳 🄻🄸🅂🅃 
╰──────•◈•──────╯`;
    const _0x217452 = "╭──────•◈•──────╮\n│𝗨𝘀𝗲 " + _0x4722cf + "help [Name?]\n│𝗨𝘀𝗲 " + _0x4722cf + `help [Page?]
│𝗡𝗔𝗠𝗘 𝗢𝗪𝗡𝗘𝗥 : │ Ullash ッ
│𝗧𝗢𝗧𝗔𝗟 : [` + _0x45ae1c.length + "]\n│📛🄿🄰🄶🄴📛 : [" + _0x42ee77 + "/" + Math.ceil(_0x45ae1c.length / _0x1f48e3) + "]\n╰──────•◈•──────╯";
    var _0x316826 = ["https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif", "https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif", "https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif", "https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif", "https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif", "https://i.imgur.com/ybM9Wtr.jpeg", "https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif"];
    var _0x23cd20 = () => _0x64d666.sendMessage({
      body: _0x4e8dde + `

` + _0x1d56bd + _0x217452,
      attachment: _0x314439.createReadStream(__dirname + "/cache/loidbutter.jpg")
    }, _0x1e7ccd.threadID, () => _0x314439.unlinkSync(__dirname + "/cache/loidbutter.jpg"), _0x1e7ccd.messageID);
    return _0x33b740(encodeURI(_0x316826[Math.floor(Math.random() * _0x316826.length)])).pipe(_0x314439.createWriteStream(__dirname + "/cache/loidbutter.jpg")).on("close", () => _0x23cd20());
  }
  const _0x1569fc = _0x272a7d("moduleInfo", _0x5e13e8.config.name, _0x5e13e8.config.description, "" + (_0x5e13e8.config.usages ? _0x5e13e8.config.usages : ""), _0x5e13e8.config.commandCategory, _0x5e13e8.config.cooldowns, _0x5e13e8.config.hasPermssion == 0 ? _0x272a7d("user") : _0x5e13e8.config.hasPermssion == 1 ? _0x272a7d("adminGroup") : _0x272a7d("adminBot"), _0x5e13e8.config.credits);
  var _0x316826 = ["https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif"];
  var _0x23cd20 = () => _0x64d666.sendMessage({
    body: _0x1569fc,
    attachment: _0x314439.createReadStream(__dirname + "/cache/loidbutter.jpg")
  }, _0x1e7ccd.threadID, () => _0x314439.unlinkSync(__dirname + "/cache/loidbutter.jpg"), _0x1e7ccd.messageID);
  return _0x33b740(encodeURI(_0x316826[Math.floor(Math.random() * _0x316826.length)])).pipe(_0x314439.createWriteStream(__dirname + "/cache/loidbutter.jpg")).on("close", () => _0x23cd20());
};
