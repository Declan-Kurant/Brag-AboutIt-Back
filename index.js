const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/schema')

const Schema = require('./db/schema')
const Message = Schema.Message

const app = express()

app.use(parser.json())
app.use(cors())

app.get('/*', (req, res) => {
	console.log('hello world!')
})

app.listen(process.env.PORT || 3001, function() {
	console.log('Express server is up and running!')
})

// app.get('/coffees', (req, res) => {
// 	Coffee.find()
// 		.then(coffees => {
// 			res.json(coffees)
// 		})
// 		.catch(err => {
// 			console.log(err)
// 		})
// })
//
// app.get('/coffees/:id', (req, res) => {
// 	console.log(req.params)
// 	Coffee.findById(req.params.id)
// 		.then(coffee => {
// 			console.log(coffee)
// 			res.json(coffee)
// 		})
// 		.catch(err => {
// 			console.log(err)
// 		})
// })
//
// app.post('/coffees', (req, res) => {
// 	Coffee.create(req.body)
// 		.then(coffee => {
// 			res.json(coffee)
// 		})
// 		.catch(err => {
// 			console.log(err)
// 		})
// })
//
// app.delete('/coffees/:id', (req, res) => {
// 	Coffee.findByIdAndRemove(req.params.id)
// 		.then(coffee => {
// 			res.json(coffee)
// 		})
// 		.catch(err => {
// 			console.log(err)
// 		})
// })
//
// app.put('/coffees/:id', (req, res) => {
// 	console.log(`params: ${req.params}`)
// 	console.log(`body: ${req.body}`)
//
// 	Coffee.findByIdAndUpdate(req.params.id, req.body)
// 		.then(coffee => {
// 			res.json(coffee)
// 		})
// 		.catch(err => {
// 			console.log(err)
// 		})
// })
