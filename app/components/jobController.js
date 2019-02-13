import JobService from "./jobService.js";

//Private
let _js = new JobService()


function draw() {
    let jobs = _js.Jobs
    let template = ''
    jobs.forEach(job => {
        template += job.getTemplate()
        
    });
    document.getElementById('available-jobs').innerHTML = template
}

function logJobs() {
    console.log("jobsUPDATED!!!")
}

//Public
export default class JobController {
    constructor() {
        // debugger
        _js.addSubscriber('jobs', draw)
        _js.addSubscriber('jobs', logJobs)
        draw()
    }

    //IN ANY FORM SUBMISSION DO NOT FORGET TO PREVENT THE DEFAULT ACTION
    addJob(event) {
        event.preventDefault();
        let form = event.target
        let newJob = {
            title: form.title.value,
            price: form.price.value,
            description: form.description.value,
            img: form.img.value
        }
        // debugger
        _js.addJob(newJob)
        //Clears the form
        form.reset()

    }
    deleteJob(id) {
        _js.deleteJob(id)
    }

}