const mongoose = require('./connection.js')

const UserSchema = new mongoose.Schema({
	username: '',
	contacts: [],
	recieved_messages: [] //array of ID's
})
const MessageSchema = new mongoose.Schema({
	txt_content: '',
	audio: '', //URL TO API
	recurring_status: false, //if true, message is sent more than once
	delivery_date: { type: Date, default: Date.now }
})

const User = mongoose.model('User', UserSchema)
const Message = mongoose.model('Message', MessageSchema)

module.exports = {
	User,
	Message
}
