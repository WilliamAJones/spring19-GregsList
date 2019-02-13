import HouseService from "./houseService.js";

//Private
let _hs = new HouseService()


function draw() {
    let houses = _hs.Houses
    let template = ''
    houses.forEach(house => {
        template += house.getTemplate()
        
    });
    document.getElementById('available-houses').innerHTML = template
}

function logHouses() {
    console.log("houses UPDATED!!!")
}

//Public
export default class HouseController {
    constructor() {
        // debugger
        _hs.addSubscriber('houses', draw)
        _hs.addSubscriber('houses', logHouses)
        draw()
    }

    //IN ANY FORM SUBMISSION DO NOT FORGET TO PREVENT THE DEFAULT ACTION
    addHouse(event) {
        event.preventDefault();
        let form = event.target
        let newHouse = {
            title: form.title.value,
            price: form.price.value,
            description: form.description.value,
            img: form.img.value
        }
        // debugger
        _hs.addHouse(newHouse)
        //Clears the form
        form.reset()

    }
    deleteHouse(id) {
        _hs.deleteHouse(id)
    }

}