// Primitive

// 7 types : string, number, bigint, boolean, undefined, symbol, null

// Reference (Non-primitive)

// Object, Array, Function

let  DC_characters  =  ['Batman', 'Superman', 'Flash']  // Array

let DC_hero  =  {  // Object
    Name:  'Ben Affleck',
    DC_character: 'Batman',
    City: 'California'}

function Batman(Name, DC_character, City) {  // Function
    this.Name = Name
    this.DC_character = DC_character
    this.City = City
}

console.log(typeof DC_characters)  // object
console.log(typeof DC_hero)  // object
console.log(typeof Batman)  // function

Ben_Affleck = new Batman('Ben Affleck', 'Batman', 'California')
console.log(Ben_Affleck)