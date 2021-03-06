#!/usr/bin/env node
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const path = require('path');

//Method #2
const lstat = util.promisify(fs.lstat);

const targetDirectory = process.argv[2] || process.cwd();
fs.readdir(targetDirectory, async (err, filenames) => {
	//Either err === error object, which means something went wrong
	// OR err === 0, which means everything is OK
	if (err) {
		// console.log(err) //If i do this and error occur but code wont crash then if it is possible the code will still be running
		throw new Error(err); // w tym przypadku jesli wystapi problem to od razu program sie zatrzyma
	}
	const statPromieses = filenames.map((filename) => {
		return lstat(path.join(targetDirectory, filename)); //Tutaj tworzymy tablice z obiektami plikow ze zmiennej filenames. Obiekty maja info o danym pliku/folderze
	});

	const allStats = await Promise.all(statPromieses); //To do gory to jest tylko obietnica, ale jeszcze nie spelniona. Tutaj ja spelniamy

	for (let stats of allStats) {
		const index = allStats.indexOf(stats); // Rozbijamy obiekty z tablicy na czesci i wyswietlamy nazwe pliku wraz z funkcja isFIle()

		// console.log(filenames[index], stats.isFile())
		if (stats.isFile()) {
			console.log(chalk.green(filenames[index]));
		} else {
			console.log(chalk.yellow(filenames[index]));
		}
	}
});
