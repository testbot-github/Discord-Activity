const express = require('express');
const app = express();
const port = 6000;
 
app.get('/', (req, res) => res.send('Bot Working!!!'));
 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); //FOR 24/7 HOSTING [USE UPTIME ROBOT, ETC.]





require("dotenv").config();

const { Client } = require("discord.js");
const fetch = require("node-fetch");
const client = new Client();
const PREFIX = "!";

const ACTIVITIES = {
    "poker": {
        id: "755827207812677713",
        name: "Poker Night"
    },
    "betrayal": {
        id: "773336526917861400",
        name: "Betrayal.io"
    },
    "youtube": {
        id: "755600276941176913",
        name: "YouTube Together"
    },
    "fishington": {
        id: "814288819477020702",
        name: "Fishington.io"
    },
    "chess": {
        id: "832012586023256104",
        name: "Chess"
    }
};

client.on("ready", () => console.log("Bot Online"));
client.on("warn", console.warn);
client.on("error", console.error);

client.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    if (message.content.indexOf(PREFIX) !== 0) return;

    const args = message.content.slice(PREFIX.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();


    if (cmd === "yttogether") {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("❌ | Invalid Channel Specified!");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I Need 'INSTANT INVITE' Authorization! [please contact mods]");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 10,
                target_application_id: "755600276941176913", // youtube together
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send("❌ | **YouTube Together**Failed to start!");
                message.channel.send(`✅ | Click here to start **YouTube Together** in ${channel.name}: <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send("❌ | Could not start **YouTube Together**!");
            })
    } //////////////////////////////////////////////////

        if (cmd === "poker") {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("❌ | Invalid Channel Specified!");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I Need 'INSTANT INVITE' Authorization! [please contact mods]");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 9,
                target_application_id: "755827207812677713", // Poker Night
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send("❌ | **Poker Night**Failed to start!");
                message.channel.send(`✅ | Click here to start **Poker Night** in ${channel.name}: <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send("❌ | Could not start **Poker Night**!");
            })
    } ///////////////////////////////////////////////////

        if (cmd === "betrayal") {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("❌ | Invalid Channel Specified!");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I Need 'INSTANT INVITE' Authorization! [please contact mods]");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 10,
                target_application_id: "773336526917861400", // betrayal.io
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send("❌ | **Betrayal.io**Failed to start!");
                message.channel.send(`✅ | Click here to start **Betrayal.io** in ${channel.name}: <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send("❌ | Could not start **Betrayal.io**!");
            })
    } //////////////////////////////////////////////////

        if (cmd === "fishington") {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("❌ | Invalid Channel Specified!");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I Need 'INSTANT INVITE' Authorization! [please contact mods]");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 10,
                target_application_id: "814288819477020702", // fishington.io
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send("❌ | **fishington.io**Failed to start!");
                message.channel.send(`✅ | Click here to start **fishington.io** in ${channel.name}: <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send("❌ | Could not start **fishington.io**!");
            })
    } //////////////////////////////////////////////////
    
    
    // or use this
    if (cmd === "activity") {
        const channel = message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("❌ | Invalid Channel Specified!");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I Need 'INSTANT INVITE' Authorization! [ask mods]");
        const activity = ACTIVITIES[args[1] ? args[1].toLowerCase() : null];
        if (!activity) return message.channel.send(`❌ | Correct formats:\n${Object.keys(ACTIVITIES).map(m => `- **${PREFIX}activity <Channel_ID> ${m}**`).join("\n")}`);

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: activity.id,
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send(`❌ |  **${activity.name}**Failed to start!`);
                message.channel.send(`✅ | Click Here to Start!**${activity.name}** in **${channel.name}**: <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send(`❌ | **${activity.name}**Failed to start!`);
            })
    } ///////////////////////////////////////

    
        if (cmd === "chess") {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "voice") return message.channel.send("❌ | Invalid Channel Specified!");
        if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I Need 'INSTANT INVITE' Authorization! [please contact mods]");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 2,
                target_application_id: "832012586023256104", // Chess
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send("❌ | **Chess**Failed to start!");
                message.channel.send(`✅ | Click here to start **Chess** in ${channel.name}: <https://discord.gg/${invite.code}>`);
            })
            .catch(e => {
                message.channel.send("❌ | Could not start **Chess**!");
            })
    } ///////////////////////////////////////////////////

});

client.login(process.env.TOKEN);
