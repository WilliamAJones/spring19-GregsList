import CarController from "./components/carController.js";
import HouseController from "./components/houseController.js";
import JobController from "./components/jobController.js";





class App {
    constructor() {
        this.controllers = {
            carController: new CarController(),
            houseController: new HouseController(),
            jobController: new JobController()
        }
    }
}



window.app = new App()