module.exports=(app)=>{
    let user  = require("../controllers/user.controller")
    const auth= require('../middleware/authorization')

    app.post("/v1/api/user", user.create_user)
    app.get("/v1/api/user", auth.authorization, user.show_user)
    app.put("/v1/api/user/:id", user.update_user)
    app.post("/v1/api/user/login", user.user_login)
    app.get('/v1/api/user/posts', auth.authorization, user.user_posts)
}
