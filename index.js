const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')


const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()


server.use(cors())
server.use(middlewares);
server.use(jsonServer.bodyParser)
server.use(router)


// server.post("/users",(req,res)=>{
//     const user=req.body;
//     user.id=Date.now();

//     router.db.get("users").push(user).write();
//     res.status(200).json({message:"successfully registered new users",user})

// })





const port=3000;

server.listen(port,()=>{
    console.log(`JSON server is running on ${port}`);
})