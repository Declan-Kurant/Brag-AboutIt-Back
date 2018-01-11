const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/schema')

const Schema = require('./db/schema')
const Message = Schema.Message

const app = express()

app.use(parser.json())
app.use(cors())

app.get('/', (req, res) => {
	console.log('home route')
	Message.find()
		.then(messages => {
			res.json(messages)
		})
		.catch(err => {
			console.log(err)
		})
})

app.get('/messages', (req, res) => {
	console.log('finding messages')
	Message.find()
		.then(messages => {
			res.json(messages)
		})
		.catch(err => {
			console.log(err)
		})
})

app.get('/messages/:id', (req, res) => {
	console.log(req.params)
	Message.findById(req.params.id)
		.then(message => {
			res.json(message)
		})
		.catch(err => {
			console.log(err)
		})
})

app.post('/messages', (req, res) => {
	Message.create(req.body)
		.then(message => {
			res.json(message)
		})
		.catch(err => {
			console.log(err)
		})
})

app.delete('/messages/:id', (req, res) => {
	Message.findByIdAndRemove(req.params.id)
		.then(message => {
			res.json(message)
		})
		.catch(err => {
			console.log(err)
		})
})

app.listen(process.env.PORT || 3001, function() {
	console.log('Express server is up and running on port 3001!')
})
