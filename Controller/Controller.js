const Locations= require('../model/Locations')
const User= require('../model/User')
const Restaurant=require('../model/Restaurant')
const Items=require('../model/Items')
const Order=require('../model/Order')
const MealType= require('../model/Mealtype')


exports.getLocations=(req,res)=>{
    Locations.find().then((result)=>{
        res.json({
            msg:"Resturant list",
            "Restaurant":result
        }).status(200)
    })
}

exports.getusers=(req,res)=>{
    User.find().then((result)=>{
        res.json({
            msg:"users list",
            "Restaurant":result
        }).status(200)
    })
}



exports.getRestaurantbyLocId=(req,res)=>{
        const {Loc_Id}=req.params
        Restaurant.find({location_id:Loc_Id}).then(
        (result)=>{
            res.status(200).json({
                "body":result
            })
        }
    )
    
}

exports.getRestaurantbyResId=(req,res)=>{
    const {Res_Id}=req.params
    Restaurant.findById({_id:Res_Id}).then( //returns an object instead of array
    (result)=>{
        res.status(200).json({
            "res_details":result
        })
    }
)
}

exports.getmenuItemsByResId=(req,res)=>{
    const {Res_Id}=req.params
    Items.find({restaurantId:Res_Id}).then(
        (result)=>{
            res.status(200).json({"menu":result})
        }
    )

}

exports.getOrderbyUserId=(req,res)=>{
    const {User_Id}=req.params
    Order.find({placedByUserId:User_Id}).then(
        (result)=>{
            res.status(200).json({"body":result})
        }
    )

}


exports.postusersignup=(req,res)=>{
 
    const {email,pass,FN,LN}=req.body
    const usersignup=new User({ //if passed body key is same as the db key,then directly give the body key here ,no need to assign value
        email:email,
        password:pass,
        firstName:FN,
        lastName:LN
    })

    usersignup.save().then(result=>{
        res.status(200).json({"response":result})
    })

}



exports.postuserlogin = (req, res) => {
    const { email, password } = req.body;
    User.find({ email: email, password: password })
        .then(response => {
            if (response.length > 0) {
                res.status(200).json({ message: "User Authenticated Succesfully", isAuthenticated: true, user: response })
            }
            else {
                res.status(200).json({ message: "User Not Authenticated Succesfully", isAuthenticated: false, user: response })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}




//trying new one
exports.restaurantFilter = (req, res) => {
    let { location, cuisine, mealtype, lcost, hcost, sort, page } = req.body;

    sort = sort ? sort : 1;
    page = page ? page : 1;

    const itemsPerPage = 2;
    let filterObj = {};

    const startIndex = page * itemsPerPage - itemsPerPage;
    const endIndex = page * itemsPerPage;

    location && (filterObj["location_id"] = location);
    cuisine && (filterObj["cuisine_id"] = { $in: cuisine });
    mealtype && (filterObj["mealtype_id"] = mealtype);
    lcost && hcost && (filterObj["min_price"] = { $lte: hcost, $gte: lcost });

    Restaurant.find(filterObj).sort({ min_price: sort })
        .then(response => {
            let pageArr = [];
            for (var i = 1; i <= Math.ceil(response.length / itemsPerPage); i++) {
                pageArr.push(i);
            }
            const filteredRestaurants = response.slice(startIndex, endIndex);
            res.status(200).json({ message: "Restaurants Fetched Succesfully", restaurants: filteredRestaurants, pageCount: pageArr, totalRestaurants: response.length })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}




























exports.getmealtypes=(req,res)=>{
MealType.find().then(
    result=>{
        res.status(200).json({msg:"Mealtypes",body:result})
    }
).catch()
}

