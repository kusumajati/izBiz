module.exports = (app) => {
    const project = require('../controllers/project.controller');
    const auth = require('../middleware/authorization')

    //post to server database
    app.post('/v1/api/project', auth.authorization, project.create_project)
    app.get("/v1/api/project", auth.authorization, project.show_project)
    app.put("/v1/api/project", auth.authorization, project.update_project)
    app.delete("/v1/api/project", auth.authorization, project.delete_project)
}
