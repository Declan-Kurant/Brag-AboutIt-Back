const Schema = require('./schema')

const User = Schema.User
const Message = Schema.Message

//
// Coffee.remove({})
// 	.catch(err => console.log(err))
// 	.then(() => {
// 		console.log('coffees removed successfully')
//
// 		coffees.forEach((coffee, i) => {
// 			coffees[i].save((err, coffee) => {
// 				err ? console.log('error creating coffee') : console.log(coffee)
// 			})
// 		})
// 	})
