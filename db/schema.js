const mongoose = require('./connection.js')

const BoastSchema = new mongoose.Schema({
	txt_content: { type: String, required: [true, 'Please include a message'] },
	from: '',
	about: '',
	is_trophy: false, //if true, boast gets trophy symbol
	is_scholar: false, //if true, boast gets academic symbol
	is_plus_one: false,
	is_brain: false,
	is_thumbs_up: false
})

const Boast = mongoose.model('Boast', BoastSchema)

module.exports = { Boast }
