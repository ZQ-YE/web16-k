module.exports = {
    devServer: {
        before(app){
            app.get('/api/list',(req, res) => {
                res.json([
                    {id:1, name:"类型注释"},
                    {id:2, name:"编译型语言"}
                ])
            })
        }
    }
}