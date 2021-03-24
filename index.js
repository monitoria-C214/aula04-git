const faker = require('faker')
const {say, think} = require('cowsay')

const randomName = faker.name.findName()
console.log("Nome: ", randomName)

const randomVehicle = faker.vehicle.vehicle()
console.log("Veículo: ", randomVehicle)

console.log(say({
  text: `Oie ${randomName}`
}))

console.log(think({
  text:`Quero um ${randomVehicle}`
}))