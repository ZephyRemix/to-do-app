import Project from './project.js'

const appController = (function() {
    let projectList = [];

    const createProject = (name, id) => {
        let proj = new Project("TestProject", 1);
        projectList.push(proj);
    }

    return {};
})();

export default appController;