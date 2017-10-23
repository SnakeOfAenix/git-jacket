const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args ) => {
var yes = Math.floor(Math.random() * (100 - 0)) + 0;
var no = 100 - yes;

if (yes < no) {
  message.channel.send("non (" + no + "%)" );
}
else if (yes > no) {
  message.channel.send("oui (" + yes + "%)");
}
else{
  message.channel.send("50-50");
}
}



module.exports.help = {
  name: "yn"
}
