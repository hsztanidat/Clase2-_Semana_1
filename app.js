////const myArray = {name: "Bruce", email:""}
//const {name,surname} = myArray

//console.log(name, email)


const {name,email,...rest} = {name: "John", email:"john@gmail.com", city: "Phoenix",state:"AZ", contry:"USA"}

console.log(rest==={city: "Phoenix",state:"AZ", contry:"USA"})