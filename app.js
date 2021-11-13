const express= require('express')
const mongoose=require('mongoose')
const route=require('./Router/route')
const cors=require('cors')

const app=express();
const port=7001;
const host="localhost"
const db_url="mongodb+srv://root:root@cluster0.txeud.mongodb.net/Zomato_db?retryWrites=true&w=majority"

mongoose.connect(db_url).then(
    (result)=>{
       
        app.listen(port,host,()=>{
            console.log(`Server started with db connection on port no${port}`)
        })
    }
)

app.use(cors());
app.options('*', cors());


app.use(express.json());
app.use("/",route)
