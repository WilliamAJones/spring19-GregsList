import House from "../models/house.js";

//PRIVATE
//STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
    houses: [
        new House({ price: 1000000, title: 'Classic Upstate Estate', img: 'https://i.redd.it/icgps7jk00ly.jpg', description: 'be the envy of all' }),
        new House({ price: 200000, title: 'Affordable Suburban Living', img: 'http://3.bp.blogspot.com/-aZ8yrmq7Y1A/TuZZdc-o72I/AAAAAAAAE8g/M65B3RhSJyc/s1600/track-home.jpg', description: 'When you are here you are home' }),
        new House({ price: 1, title: 'May be soggy', img: 'http://2.bp.blogspot.com/-Q0VFeIUZjvs/UDgTZ7Aqp8I/AAAAAAAACjQ/QJEtoP-WFFM/s1600/DSCN0647.JPG',description:'no dogs allowed' }),
        new House({ price: 7000, title: 'Waterfront Property', img: 'https://i.pinimg.com/originals/91/d8/28/91d828e2efda9ade3ad54ce0d478aac6.jpg',description: 'ITS A VAN...DOWN BY THE RIVER' }),
    ]
}


//SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
//ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
//SUBSCRIBERS IS AN OBJECT OF ARRAYS OF FUNCTIONS
let _subscribers = {
    houses: []
}


function setState(dataName, value) {
    _state[dataName] = value
    //FOR EACH FUNCTION IN THE SUBSCRIBERS ENVOKE THE FUNCTION
    _subscribers[dataName].forEach(fn => fn());
}

//PUBLIC
export default class HouseService {

    addSubscriber(dataName, fn) {
        _subscribers[dataName].push(fn)
    }
    get Houses() {
        return _state.houses
    }
    addHouse(rawHouse) {
        let newHouse = new House(rawHouse)
        _state.houses.push(newHouse)
        setState('houses', _state.houses)
    }
    deleteHouse(id) {
        for (let i = 0; i < _state.houses.length; i++) {
            let house = _state.houses[i];
            if (house.id == id) {
                _state.houses.splice(i, 1)
                break;
            }
        }
        setState('houses', _state.houses)
    }
}