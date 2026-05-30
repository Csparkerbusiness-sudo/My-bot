
  const { Client, GatewayIntentBits } = require("discord.js");

console.log("TOKEN EXISTS:", !!process.env.DISCORD_TOKEN);

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once("ready", () => {
  console.log("Bot is ONLINE as:", client.user.tag);
});

client.on("error", console.error);
process.on("unhandledRejection", console.error);

client.login(process.env.DISCORD_TOKEN)
  .then(() => console.log("Login sent"))
  .catch(console.error);in(process.env.DISCORD_TOKEN);
