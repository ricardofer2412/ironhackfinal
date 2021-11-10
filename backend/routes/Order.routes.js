const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Order = require("../models/Order.model")
const Vendor = require("../models/Vendor.model")

router.post('/newOrder',  (req, res)=>{
    // console.log(req.body)
    const {product, 
        vendor, orderNumber, orderDate, paymentDate, 
        paymentMethod, orderStatus} = req.body;

    const userEmail = vendor.email;

     
    Order.create({
        'product': product, 
        "vendor":vendor, 
        "orderNumber":orderNumber, 
        'orderDate':orderDate, 
        "paymentDate":paymentDate, 
        'paymentMethod':paymentMethod, 
        'orderStatus':orderStatus}).then((response)=>{
        console.log(response)
    })
})
    
    // Vendor.findOne({userEmail})
    // .then((user)=>{
    //     if(!user) {
    //         console.log("NO USER FOUND")
    //         Vendor.create({
    //           "name": vendor.name,
    //           "email": vendor.email,
    //           "phoneNumber": vendor.phoneNumber,
    //           "address": vendor.address,
    //           "address2": vendor.address2,
    //           "city": vendor.city,
    //           "zipcode": vendor.zipcode,
    //           "state": vendor.state, 
    //         }).then((response) => {
                
    //         })
    //     }else{
    //         console.log(user)
    //     }



module.exports = router;
