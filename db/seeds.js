const Schema = require('./schema.js')
const Boast = Schema.Boast
const BoastData = require('./seeds.json')

Boast.remove({})
	.then(() => {
		Boast.collection.insert(BoastData).then(boasts => {
			console.log(boasts)
			process.exit()
		})
	})
	.catch(err => {
		console.log(err)
	})
