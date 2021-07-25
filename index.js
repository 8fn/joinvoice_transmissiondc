const express = require('express');
const mySecret = process.env['TOKEN']
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
client.on("ready", () => {
  console.log(`${client.user.tag} fez login com sucesso!`)
   timer();
   function activity() {
      client.user.setActivity('$ajuda', ({type: 'WATCHING'}))
      client.user.setStatus('idle')
   }
   function activity2() {
      client.user.setActivity('gg/portugal', ({type: 'STREAMING', url: 'https://www.twitch.tv/portugal'}))
   }
   function timer() {   //1000 = 1 second and 1000 is 1000 milliseconds
   setTimeout(activity2, 3000)
   setTimeout(activity, 6000)
   setTimeout(timer, 6000)
   }
   client.user.setActivity('a game', ({type: 'STREAMING', url: 'https://www.twitch.tv/portugal'}))

	console.log(`Bot iniciado com ${client.users.size} utilizadores, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`)
	const channel = client.channels.cache.get("865025471674581043");
    if (!channel) return console.error("O canal não existe!");
    channel.join().then(connection => {
      console.log("Conectado ao VC com sucesso!");
    }).catch(e => {
  
      console.error(e);
    });
    

});
client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token