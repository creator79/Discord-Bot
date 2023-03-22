<h1 align="center">ChatGPT and Midjourney Discord Bot</h1>



GPT Discord Bot is the original Discord AI bot written in **[JavaScript](https://www.javascript.com/)**, using the **[Discord.js V14](discord.js.org/)** library powered by [OpenAI](https://openai.com/)'s models. It has different features such as answering to all of your questions or draw your imaginations and even translate your prompts from any language to any other language you want and also an configurable Auto Moderation system powered by AI which watch all of your server messages (if you want, you can turn it off/on) and report flagged messages to Admins and they can moderate it and other features which you can see example in **[Screenshots](https://github.com/creator79/Discord-Bot)**!
## 🚧 Requirements
1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**  
   1.1. Enable "Message Content Intent" and "Server Members Intent" in Discord Developer Portal
2. OpenAI API Key
3. **[Node.js 16.9.0](https://nodejs.org/en/download/)** or higher
# 🚀 Getting Started
## ⚙️ Configuration
Go to `.env.example` in  folder and fill out the values:
``` json
{
   
OPENAI_API_KEY=
ORGANIZATION=
TOKEN=
}
```
⚠️ **Note: Never commit or share your token publicly** ⚠️

and if you want to use chatbot or moderation model fill and config `chatbot.js` and `moderation.js` in `configs` folder and (Information on how to configure them is available in the files themselves)
## 🧠 installation
Open your terminal and install required packages with
```sh
npm install
```
After installation finishes run `node register.js` to deploy slash commands and then run `node index.js` in terminal to start the bot.
## 💫 Features
### Commands
`Ask` : Answers your questions with all GPT models (**GPT-3.5-Turbo**, **Text-Davinci-003**, **Text-Curie-001**, **Text-Babbage-001**, and **Text-Ada-001**)! 

`Imagine` : Draw your imaginations with **Dall∙E**!

`Optimize` : Optimizes your imaginations to get better response with imagine command with **GPT-3.5-Turbo**!

`Translate` : Translate your texts in any language to any language you want with **GPT-3.5-Turbo**.
### Systems
`ChatBot` : A Channel where you can talk to the bot and have ChatGPT-Style conversation with **GPT-3.5-Turbo**. (It has a temporary memory so that it can remember the contents for a short time)

`Auto Moderation` : An Auto Mod system which checks all of  your server messages and send a log for your Admins if a message content complies with OpenAI's usage policies with **Text-Moderation-004** (moderation model is free to use and you can config it as much as you want)
## 📸 Screenshots
![Ask](https://ibb.co/YbwXMfG)
![imagine](https://ibb.co/SQQ6SWL)
![Translate](https://user-images.githubusercontent.com/89854127/218874217-f472fa38-9918-46a3-a0e2-6a4cbfb4c370.png)


#
Made with ❤️ and JavaScript, Don't Forget to ⭐
