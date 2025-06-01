/* 
    The models are just the translation in JS of the db tables.
*/


function Establishment(id, type, name, address, phone_number, category) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.address = address;
    this.phone_number = phone_number;
    this.category = category;
}

function Person(name, surname, id) {
    this.name = name;
    this.surname = surname;
    this.id = id;
}

export { Establishment, Person };