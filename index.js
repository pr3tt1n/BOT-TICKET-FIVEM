require('dotenv').config()
const Client = require('./src/structures/Client');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const moment = require('moment')

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
});

client.on('interactionCreate', interaction => {
    if (interaction.isSelectMenu()) {
        if (interaction.customId.startsWith("pagar")) {

            var pegara = new MessageEmbed()
            .setAuthor({ name: process.env.nomeDoServidor, iconURL: process.env.logo})
            .setDescription(`> ${interaction.user} **trago agora as informações do método selecionado!** \n\n > As informações serão apagadas em 3 minutos! \n\n **Pix:** \n \`\`\`${process.env.seupix}\`\`\` `)
            .setColor(process.env.COR)
            .setImage(process.env.pagar)
            .setFooter({text: "Selecione a forma de pagamento:"});

            interaction.reply({
                embeds: [pegara]
            })
        }
    }
})

client.login(process.env.BOT_TOKEN)