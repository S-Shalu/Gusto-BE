const express=require('express')
const control =require('../Controller/Controller')
var paymentGatewayController = require('../Controller/PaymentGateway');


route=express.Router()

route.get('/locations',control.getLocations)
route.get('/users',control.getusers)
route.get('/mealtypes',control.getmealtypes)
route.get('/resturantByLocId/:Loc_Id',control.getRestaurantbyLocId)
route.get('/resturantByResId/:Res_Id',control.getRestaurantbyResId)
route.get('/menuItemsByResId/:Res_Id',control.getmenuItemsByResId)
route.get('/OrderbyUserId/:User_Id',control.getOrderbyUserId)
route.post('/usersignup',control.postusersignup)
route.post('/userlogin',control.postuserlogin)
route.post('/filter',control.restaurantFilter)
route.post('/payment', paymentGatewayController.payment);
route.post('/callback', paymentGatewayController.callback);


module.exports=route
