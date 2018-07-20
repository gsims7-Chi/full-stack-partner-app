const mongoose = require('mongoose');


// create db and connect
mongoose.connect('mongodb://localhost/obeyims')

mongoose.connection.on('connected', () => {
	console.log('mongoose is connected');
})
mongoose.connection.on('error', (err) => {
	console.log(err, 'mongoose error');
})

mongoose.connection.on('disconnect', () => {
	console.log('mongoose is disconnected')
})