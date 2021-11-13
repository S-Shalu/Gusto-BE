const express= require('express')
const mongoose=require('mongoose')
const route=require('./Router/route')
const cors=require('cors')

const app=express();
const port=process.env.PORT||80;
const host="localhost"
const db_url="mongodb+srv://root:root@cluster0.txeud.mongodb.net/Zomato_db?retryWrites=true&w=majority"

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use(cors());
app.options('*', cors());
app.use(express.json());

mongoose.connect(db_url).then(
    (result)=>{
       
        app.listen(port,()=>{
            console.log(`Server started with db connection on port no${port}`)
        })
    }
)





app.use("/",route)
