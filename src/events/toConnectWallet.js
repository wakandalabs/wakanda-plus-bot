module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (!interaction.isButton()) return;
		if (interaction.customId) {
			// const user = interaction.user.id;
			await interaction.editReply({
				content: `You select ${interaction.customId}`,
				components: []
			})
		}
	},
};
