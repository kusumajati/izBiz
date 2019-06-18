module.exports=(app)=>{
    let user  = require("../controllers/user.controller")
    app.post("/v1/api/user", user.create_user)
    app.get("/v1/api/user", user.show_users)
    app.get("/v1/api/user/:id", user.show_users)
    app.put("/v1/api/user/:id", user.update_user)
    app.post("/v1/api/user/login", user.user_login)

}
