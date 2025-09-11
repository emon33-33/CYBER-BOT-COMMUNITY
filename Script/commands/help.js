const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
    name: "help",
    version: "1.0.4",
    hasPermssion: 0,
    credits: "💯🎯 ᴄʏʙᴇʀ ᴍᴜꜱʟɪᴍ ᴅᴇꜰᴇɴꜱᴇ 🎯💯",
    description: "FREE SET-UP MESSENGER",
    commandCategory: "system",
    usages: "[name/all/page]",
    cooldowns: 5,
    envConfig: {
        autoUnsend: true,
        delayUnsend: 20
    }
};

module.exports.run = async function ({ api, event, args }) {
    const { commands } = global.client;
    const { threadID, messageID } = event;
    const prefix = (global.data.threadData.get(parseInt(threadID))?.PREFIX) || global.config.PREFIX;

    // === যদি all ===
    if (args[0] === "all") {
        let msg = "📌 All Commands:\n\n";
        for (let [name, value] of commands) {
            msg += `• ${name}\n`;
        }
        return api.sendMessage(msg, threadID, messageID);
    }

    // === নির্দিষ্ট command এর help ===
    const command = commands.get((args[0] || "").toLowerCase());
    if (command) {
        const info = `╭──────•◈•──────╮
│ Name: ${command.config.name}
│ Usage: ${prefix}${command.config.name} ${command.config.usages || ""}
│ Description: ${command.config.description}
│ Category: ${command.config.commandCategory}
│ Cooldown: ${command.config.cooldowns}s
│ Permission: ${command.config.hasPermssion}
│ Credits: ${command.config.credits}
╰──────•◈•──────╯`;

        return api.sendMessage(info, threadID, messageID);
    }

    // === Page system ===
    const perPage = 15;
    const page = parseInt(args[0]) || 1;
    const arrayInfo = Array.from(commands.keys());
    const totalPage = Math.ceil(arrayInfo.length / perPage);
    if (page > totalPage) return api.sendMessage(`❌ Invalid page number. Max page: ${totalPage}`, threadID, messageID);

    let msg = `📖 Help list (Page ${page}/${totalPage})\n\n`;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    arrayInfo.slice(start, end).forEach((cmd, i) => {
        msg += `${i + 1 + start}. ${cmd}\n`;
    });

    // === Image try করব ===
    const links = [
        "https://i.imgur.com/LpHFBk9.jpg",
        "https://i.imgur.com/92lbvrE.jpg"
    ];
    const img = links[Math.floor(Math.random() * links.length)];
    const path = __dirname + "/cache/help.jpg";

    try {
        let res = await axios.get(img, { responseType: "arraybuffer" });
        fs.writeFileSync(path, Buffer.from(res.data, "binary"));
        return api.sendMessage({ body: msg, attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
    } catch (e) {
        // যদি image fail হয় তাহলে শুধু text পাঠাবে
        return api.sendMessage(msg, threadID, messageID);
    }
};
