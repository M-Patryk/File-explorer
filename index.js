#!/usr/bin/env node
const fs = require('fs');
const util = require('util');

fs.readdir(process.cwd(), async (err, filenames) => {
	//Either err === error object, which means something went wrong
	// OR err === 0, which means everything is OK
	if (err) {
		// console.log(err) //If i do this and error occur but code wont crash then if it is possible the code will still be running
		throw new Error(err); // w tym przypadku jesli wystapi problem to od razu program sie zatrzyma
	}
	for (let filename of filenames) {
		try {
			const stats = await lstat(filename);
			console.log(filename, stats.isFile());
		} catch (err) {
			console.log(err);
		}
	}
});

//Method #1 - has to be at the bottom
const lstat = (filename) => {
	return new Promise((resolve, reject) => {
		fs.lstat(filename, (err, stats) => {
			if (err) {
				reject(err);
			}

			resolve(stats);
		});
	});
};

//Method #2
// const lstat = util.promisify(fs.lstat)

//Method #3
//const {lstat} = fs.promises;