const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@firdaydb.noplxm7.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));