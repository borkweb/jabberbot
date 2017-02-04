var config = require("./config");
var xmpp = require("simple-xmpp");
var sys  = require("util");
var dgram = require('dgram');

var settings = {
	to: process.env.bot_send_to,
	port: process.env.bot_listen_port,
	credentials: {
		jid       : process.env.bot_jid,
		password  : process.env.bot_password,
		host      : process.env.bot_host,
		port      : process.env.bot_port,
	},
};

xmpp.on('online', function() {
	console.log('Yes, I\'m connected!', arguments);
	send_batman_ping();
});


xmpp.on('chat', function(from, message) {
	console.log("%s is saying %s", from, message);
});


xmpp.on('buddy', function(jid, state) {
	console.log('%s is in %s state', jid, state);
});


xmpp.on('stanza', function(stanza) {
	console.log("the stanza");
});

xmpp.connect(settings.credentials);

function send_batman_ping() {
	xmpp.send(settings.to, "[dbg] bot has come online");
}

var server = dgram.createSocket("udp4");

server.on("message", function (msg, rinfo) {
	var origin_server = '';
	var to = '';

	msg = JSON.parse( msg );

	if( msg.data ) {
		to = msg.data.target || settings.to;
	} else {
		to = settings.to;
	}//end else

	if( msg.server ) {
		origin_server = ':' + msg.server;
	}//end if

	xmpp.send(to, "[dbg" + origin_server + "] " + msg.message);
});

server.on("listening", function () {
	var address = server.address();
	console.log("server listening " + address.address + ":" + address.port);
});

server.bind( process.env.bot_listen_port );
