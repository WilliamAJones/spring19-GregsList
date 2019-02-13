import Job from "../models/job.js";

//PRIVATE
//STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
    jobs: [
        new Job({ price: 15, title: 'Cat Whisperer', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyRM3JB06h_CbT_VGMwi-ZWz8Dr0dnNdAQ7BmHzgIGXsHSLZrbRg', description: 'Train Cats and Kitties for max cattitude' }),
        new Job({ price: 0, title: 'Pro-Gamer', img: 'https://i.kym-cdn.com/photos/images/original/000/030/122/6hee915.gif', description: 'Good luck getting paid' }),
        new Job({ price: 100, title: 'Hammer Brother', img: 'https://www.mariowiki.com/images/thumb/7/79/Hammer_Bro_Brawl_artwork.png/220px-Hammer_Bro_Brawl_artwork.png', description: 'Stop Maryo frem rechin prancess pech'}),
        new Job({ price: 100000, title: 'Real Estate Man ', img: 'https://i.pinimg.com/originals/54/fa/a0/54faa0fa41548e708f2b94dec10ae62d.jpg',description: 'Its free real estate' }),
    ]
}


//SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
//ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
//SUBSCRIBERS IS AN OBJECT OF ARRAYS OF FUNCTIONS
let _subscribers = {
    jobs: []
}


function setState(dataName, value) {
    _state[dataName] = value
    //FOR EACH FUNCTION IN THE SUBSCRIBERS ENVOKE THE FUNCTION
    _subscribers[dataName].forEach(fn => fn());
}

//PUBLIC
export default class JobService {

    addSubscriber(dataName, fn) {
        _subscribers[dataName].push(fn)
    }
    get Jobs() {
        return _state.jobs
    }
    addJob(rawJob) {
        let newJob = new Job(rawJob)
        _state.jobs.push(newJob)
        setState('jobs', _state.jobs)
    }
    deleteJob(id) {
        for (let i = 0; i < _state.jobs.length; i++) {
            let job = _state.jobs[i];
            if (job.id == id) {
                _state.jobs.splice(i, 1)
                break;
            }
        }
        setState('jobs', _state.jobs)
    }
}