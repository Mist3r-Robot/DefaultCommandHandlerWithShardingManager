const Discord = require('discord.js')
const embed = new Discord.RichEmbed()
module.exports = async (bot, msg) => {

  
  /*
  * Don't delete that if you dont wan't to bot respond to a another bot, in private message and himself.  
  */
  if (msg.author.bot) return
  if (msg.author.id === bot.user.id) return
  if (msg.channel.recipient) return
 
  if (msg.content.indexOf(bot.config.prefix) !== 0) return

  const args = msg.content.slice(bot.config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  const cmd = bot.commands.get(command)  

  if (!cmd) return
  cmd.run(bot, msg, args, embed)
  
}
