import { Client, Events } from "discord.js";
import { Commands } from '../../commands';

export default (client: Client): void => {
    client.once(Events.ClientReady, c => {
        if (!client.user || !client.application) {
            return;
        }

        client.application.commands.set(Commands);
        console.log(`${client.user.username} is online`);
    });
}; 