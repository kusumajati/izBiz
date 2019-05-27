module.exports = (app) => {
    const project = require('../controllers/project.controller');

    //post to server database
    app.post('/v1/api/project', project.create_project)
    app.get("/v1/api/project/", project.show_project)
    app.get("/v1/api/project/:id", project.show_project_id)
    app.put("/v1/api/project/:id", project.update_project)
    app.delete("/v1/api/project/:id",project.delete_project)
}
