const Schema = require('./schema.js')
const Message = Schema.Message
const MessageData = require('./message-data.json')

Message.remove({})
	.then(() => {
		Message.collection.insert(MessageData).then(messages => {
			console.log(messages)
			process.exit()
		})
	})
	.catch(err => {
		console.log(err)
	})
