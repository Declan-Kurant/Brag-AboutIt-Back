const mongoose = require('./connection')

const UserSchema = new mongoose.Schema({
	username: '',
	contacts: [],
	recieved_messages: [] //array of ID's

)
const MessageSchema = new mongoose.Schema({
	txt_content: '',
	audio: '<URL>',
	recurring_status: False, //if true, message is sent more than once
	delivery_date: date
})

const User = mongoose.model('User', UserSchema)
const Message = mongoose.model('Message', MessageSchema)

module.exports = {
	User,
	Message
}
