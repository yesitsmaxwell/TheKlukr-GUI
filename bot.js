// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready for action! Burrrrk!');
});

client.on('message', message => {
	if (message.content === '!hi') {
        message.channel.send('Cluck.');
		console.log('Command has beem run: !hi');
    }
    
});

client.on('message', message => {
	if (message.content === '!help') {
        message.channel.send('Hey there! I am TheKlukr! Here are a few commands to get you started:');
		message.channel.send('!hi');
		message.channel.send('!cat');
		message.channel.send('!dog');
		message.channel.send('!intro');
		message.channel.send('!buckawk');
		message.channel.send('!rick');
		message.channel.send('!howmanyeggs');
		message.channel.send('!ping');
		message.channel.send('!delta');
		message.channel.send('!beep');
		message.channel.send('!avatar');
		message.channel.send('!music');
		console.log('Command has beem run: !help');
    }
    
});

client.on('message', message => {
	if (message.content === '!cat') {
        message.channel.send('Aaaah!');
		console.log('Command has beem run: !cat');
    }
});

client.on('message', message => {
	if (message.content === '!music') {
        message.channel.send('https://1drv.ms/u/s!AhnCsANFKLCj6B0HCyJsv4frUfaD?e=oKvGFd');
		console.log('Command has beem run: !music');
    }
});

client.on('message', message => {
	if (message.content === '!dog') {
        message.channel.send('Aaaah!');
		console.log('Command has beem run: !dog');
    }
});

client.on('message', message => {
	if (message.content === '!intro') {
        message.channel.send('Greetings! I am TheKlukr!');
		console.log('Command has beem run: !intro');
    }
});

client.on('message', message => {
	if (message.content === '!buckawk') {
        message.channel.send('buckawk');
		console.log('Command has beem run: !buckawk');
    }
});

client.on('message', message => {
	if (message.content === '!rick') {
        message.channel.send('www.youtube.com/watch?v=dQw4w9WgXcQ');
		console.log('Command has beem run: !rick');
    }
});

client.on('message', message => {
	if (message.content === '!howmanyeggs') {
        message.channel.send('One a day');
		console.log('Command has beem run: !howmanyeggs');
    }
});

client.on('message', message => {
	if (message.content === '!ping') {
	message.channel.send('Pong.');
	console.log('Command has beem run: !ping');
	} else if (message.content === '!delta') {
	message.channel.send('OH NO RUN GET ME A MASK BYE');
	console.log('Command has been run: !delta')
	} else if (message.content === '!beep') {
	message.channel.send('Boop.');
	console.log('Command has beem run: !beep');
	} else if (message.content === '!avatar') {
	if (!message.mentions.users.size) {
		return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
		console.log('Command has beem run: !avatar');
	}

	const avatarList = message.mentions.users.map(user => {
		return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
	});

	// send the entire array of strings as a message
	// by default, discord.js will `.join()` the array with `\n`
	message.channel.send(avatarList);
}
});

// login to Discord with your app's token
client.login('Your bot token here');
