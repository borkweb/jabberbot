# Jabber Bot

## Requirements
### node (of course)
On a mac, install with brew!

````
brew install node
````

### npm (of course)
Run:
````
curl http://npmjs.org/install.sh | sh
````

### [icu4c](http://userguide.icu-project.org/)
On a mac, install with brew!
````
brew install icu4c
brew link icu4c
````

### npm: simple-xmpp
Install via: 
````
npm install -g simple-xmpp
````

## Configuring
Once you've installed all the requirments, you will need to configure your bot.

````
cp config-example.js config.js
vi config.js
````

<table>
	<thead>
		<tr>
			<th>Setting</th>
			<th>Wat?</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>process.env.bot_send_to</td>
			<td>The jabber account your bot will send messages to. (i.e. your gtalk account)</td>
		</tr>
		<tr>
			<td>process.env.bot_listen_port</td>
			<td>The port your bot will listen on.</td>
		</tr>
		<tr>
			<td>process.env.bot_jid</td>
			<td>The jabber account your bot will log in as in order to send debug messages.</td>
		</tr>
		<tr>
			<td>process.env.bot_password</td>
			<td>The password for your bot's jabber account.</td>
		</tr>
		<tr>
			<td>process.env.bot_host</td>
			<td>The jabber host.  Default: talk.google.com</td>
		</tr>
		<tr>
			<td>process.env.bot_port</td>
			<td>The jabber host port.  Default: 5222</td>
		</tr>
	</tbody>
</table>

*Note:* you'll need to create a jabber account somewhere so this will all work.  If you don't have your own domain name, using Gmail is always an option.  Once you've created your bot's account, you'll need to log in as your bot via a chat client and invite your primary account as a friend.

## Running the Bot

Run this bad boy like so:

````
node bot.js
````
