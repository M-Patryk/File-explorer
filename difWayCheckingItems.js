//Option #1
// fs.readdir(process.cwd(), (err, filenames) => {
//     //Either err === error object, which means something went wrong
//     // OR err === 0, which means everything is OK
//     if(err){
//         // console.log(err) //If i do this and error occur but code wont crash then if it is possible the code will still be running
//         throw new Error(err) // w tym przypadku jesli wystapi problem to od razu program sie zatrzyma
//     }

//     const allStats = Array(filenames.length).fill(null)
    
//     for(let filename of filenames){
//         const index = filenames.indexOf(filename)

//         fs.lstat(filename, (err, stats) => {
//             if(err){
//                 console.log(err)
//             }

//             allStats[index] = stats

//             const ready = allStats.every(stats => {
//                 return stats
//             })

//             if(ready){
//                 allStats.forEach((stats, index) =>{
//                     console.log(filenames[index], stats.isFile())
//                 })
//             }
//         })
//     }
// })


//Option #2 via async await
//Method #1 - has to be at the bottom
// const lstat = (filename) => {
// 	return new Promise((resolve, reject) => {
// 		fs.lstat(filename, (err, stats) => {
// 			if (err) {
// 				reject(err);
// 			}

// 			resolve(stats);
// 		});
// 	});
// };

//Method #2
// const lstat = util.promisify(fs.lstat)

//Method #3
//const {lstat} = fs.promises;
