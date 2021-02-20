const fs = require('fs')

fs.readdir(process.cwd(), (err, files) => {
    //Either err === error object, which means something went wrong
    // OR err === 0, which means everything is OK
    if(err){
        // console.log(err) //If i do this and error occur but code wont crash then if it is possible the code will still be running
        throw new Error(err) // w tym przypadku jesli wystapi problem to od razu program sie zatrzyma
    }

    console.log(files)
})