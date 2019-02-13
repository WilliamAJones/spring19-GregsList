import CarService from "./carService.js";

//Private
let _cs = new CarService()


function draw() {
    let cars = _cs.Cars
    let template = ''
    cars.forEach(car => {
        template += car.getTemplate()
    });
    document.getElementById('available-cars').innerHTML = template
}

function logCars() {
    console.log("cars UPDATED!!!")
}

//Public
export default class CarController {
    constructor() {
        // debugger
        _cs.addSubscriber('cars', draw)
        _cs.addSubscriber('cars', logCars)
        draw()
    }

    //IN ANY FORM SUBMISSION DO NOT FORGET TO PREVENT THE DEFAULT ACTION
    addCar(event) {
        event.preventDefault();
        let form = event.target
        let newCar = {
            title: form.title.value,
            price: form.price.value,
            description: form.description.value,
            img: form.img.value
        }
        // debugger
        _cs.addCar(newCar)
        //Clears the form
        form.reset()

    }
    deleteCar(id) {
        _cs.deleteCar(id)
    }

}