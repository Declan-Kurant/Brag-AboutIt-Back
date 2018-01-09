const mongoose = require('mongoose')

// SEPARATES PRODUCTION FROM DEVELOPMENT
// if (process.env.NODE_ENV == 'production') {
// 	mongoose.connect(process.env.MLAB_URL)
// } else {
//
// }
mongoose.connect('mongodb://localhost/3001', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose

const db = mongoose.connection

db.on('error', err => {
	console.log(err)
})

db.once('open', () => {
	console.log('you are connected!')
})
