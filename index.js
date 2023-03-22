import { Client, GatewayIntentBits } from "discord.js";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});


client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("!chat")) {
    const query = message.content.slice(5);
    await message.channel.sendTyping();

    // Add previous message to conversation log
    let conversationLog = [{ role: 'system', content: 'You are a friendly chatbot.' }];

    try {

      await message.channel.sendTyping();

      let prevMessages = await message.channel.messages.fetch({ limit: 15 });
      prevMessages.reverse();
  
      prevMessages.forEach((msg) => {
        if (message.content.startsWith('!')) return;
        if (msg.author.id !== client.user.id && message.author.bot) return;
        if (msg.author.id !== message.author.id) return;
  
        conversationLog.push({
          role: 'user',
          content: msg.content,
        });
      });

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Hey, give me a response to this message: ${query}`,
        temperature: 0.5,
        // max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
      });

      const reply = response.data.choices[0].text;

      message.reply(reply);
    } catch (error) {
      console.error(error);
      message.reply("Oops, something went wrong. Please try again later.");
    }
  }

  if (message.content.startsWith("!imagine")) {
    const query = message.content.slice(6);

    try {
      await message.channel.sendTyping();
      const response = await openai.createImage({
        model: "image-alpha-001",
        prompt: `generate an image of ${query}`,
        size: "512x512",
        response_format: "url",
      });

      message.reply(`${response.data.data[0].url}`);
    } catch (error) {
      console.error(error);
      message.reply("Oops, something went wrong. Please try again later.");
    }
  }
});

client.login(process.env.TOKEN);
