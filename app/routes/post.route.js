module.exports = (app)=>{
    const post = require('../controllers/post.controller')

    app.post('/post', post.create_post)
}