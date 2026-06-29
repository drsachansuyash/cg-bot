const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

client.once("ready", () => {
  console.log(`${client.user.tag} is online!`);
});

client.on("guildMemberAdd", async (member) => {
  try {
    const current = member.user.username;

    if (!current.startsWith("CG ")) {
      await member.setNickname(`CG ${current}`);
    }
  } catch (err) {
    console.log(err);
  }
});

client.login(process.env.BOT_TOKEN);
