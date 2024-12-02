import Task from './task.js'

class Project {
    constructor(name, id) {
        this.id = id;
        this.name = name;
    }

    taskList = [];

    appendTask() {
        this.taskList.push();
    }
}

export default Project;