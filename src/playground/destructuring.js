// console.log('destructuring');
// const person =  {
//     //name: 'JOhn',
//     age: 24,
//     location: {
//         city: 'Los angeles',
//         temp: 78
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const {name:firstName = 'anon', age} = person;

// console.log(`${firstName} is ${age}`);


// const {temp: temperature, city} = person.location;
// console.log(`It's ${temperature} in ${city}`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher : {
        name: 'Penguin'
    }
};

const { publisher:publisherName = 'Self-Published' } = book.publisher;
console.log(`${publisherName}`);

//
//Array destructuring
//
const address = ['123 Broadway St', 'Los Angeles', 'CA', 92831];

const [, street, city, state = 'New Yourk', _] = address;

console.log(`Your are in ${city} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [size, , price] = item;
console.log(`A medium ${size} costs ${price}`);