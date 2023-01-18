// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits, REST, Routes } from 'discord.js';
import ready from './service/listeners/ready';
import interactionCreate from './service/listeners/interactionCreate';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.DISCORD_TOKEN as string;
const clientId = process.env.CLIENT_ID as string;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

console.log('Reviving our fallen brother in Christ')


client.login(token);
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
try {
	ready(client);
	interactionCreate(client);
} catch (error) {
	console.error('Failed to login Harambe v2 due to error:', error)
}

// Log in to Discord with your client's token
client.login(token);