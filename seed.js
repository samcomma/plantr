const db = require('./models.js');

db.sync({force: true})
    .then(()=> {
        console.log('Database has synced.')
        db.close();
    })
    .catch(err => {
        console.log("Something's gone wrong!")
        console.log(err)
        db.close()
    });
