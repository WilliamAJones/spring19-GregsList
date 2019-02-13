import Car from "../models/car.js";

//PRIVATE
//STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
    cars: [
        new Car({ price: 10000, title: 'A Stealthy Getaway Car', img: 'https://images-na.ssl-images-amazon.com/images/I/410jkSdCl0L._SL500_AC_SS350_.jpg', description: 'cops and robbers both hate him' }),
        new Car({ price: 1500, title: 'A Classic For any Enthusist', img: 'https://media.npr.org/assets/img/2011/05/31/FordPinto_wide-aa4b7f14f4dde2bc2b9fd16e77003fb01626dee2-s800-c85.jpg', description: 'Just don\'t hit it from behind' }),
        new Car({ price: 100, title: 'Just Take it', img: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Gremlin_side_%285903000893%29.jpg', description: '$$cash only$$'}),
        new Car({ price: 100000, title: 'The Bi-Valve lnterior Combustion Twice-Exhausted Bi-Axle Nitro-Cycle ', img: 'http://4.bp.blogspot.com/_i_AovfzNXgQ/TTtbyS6Fz1I/AAAAAAABbm8/RAPRFHCVi98/s400/Wild_Wild_West_1999_019.jpg',description: 'Serious inquiries only...AVANTIIIIII!!!!!!' }),
    ]
}


//SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
//ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
//SUBSCRIBERS IS AN OBJECT OF ARRAYS OF FUNCTIONS
let _subscribers = {
    cars: []
}


function setState(dataName, value) {
    _state[dataName] = value
    //FOR EACH FUNCTION IN THE SUBSCRIBERS ENVOKE THE FUNCTION
    _subscribers[dataName].forEach(fn => fn());
}

//PUBLIC
export default class CarService {

    addSubscriber(dataName, fn) {
        _subscribers[dataName].push(fn)
    }
    get Cars() {
        return _state.cars
    }
    addCar(rawCar) {
        let newCar = new Car(rawCar)
        _state.cars.push(newCar)
        setState('cars', _state.cars)
    }
    deleteCar(id) {
        for (let i = 0; i < _state.cars.length; i++) {
            let car = _state.cars[i];
            if (car.id == id) {
                _state.cars.splice(i, 1)
                break;
            }
        }
        setState('cars', _state.cars)
    }
}