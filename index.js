const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const playground = require("twt-playground"),
	numeric = require("x-numeric-police"),
	worse = require("x-worse-clearly"),
	which = require("x-which-frequent"),
	cheery = require("x-cheery-messenger"),
	infect = require("x-infect-likewise"),
	gosh = require("x-gosh-where"),
	rarely = require("x-rarely-opposite"),
	amend = require("x-amend-beyond"),
	despite = require("x-despite-cruelly"),
	fare = require("x-fare-barring"),
	prod = require("x-prod-yippee"),
	usually = require("x-usually-longingly"),
	anguish = require("x-anguish-notarize"),
	attack = require("x-attack-yippee"),
	beneath = require("x-beneath-ill-fated"),
	broil = require("x-broil-gadzooks"),
	dismiss = require("x-dismiss-across"),
	atop = require("x-atop-twister");

const USERNAME = "Justyn.Robel",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
