const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Order = require("../models/Order.model")
const Vendor = require("../models/Vendor.model")
const OrderNumber = require("../models/OrderNumbers.model")
const creds = require('./config')
var nodemailer = require('nodemailer');



router.post('/newOrder',  (req, res)=>{
    let {product, 
        vendor, orderDate, paymentDate, 
        paymentMethod, orderStatus} = req.body;

    let randomNumber = Math.floor(100000 + Math.random() * 900000);

    OrderNumber.find({orderNumbers: randomNumber})
    .then(response => {
        if(response.length === 0){
        console.log("does not exist")
        OrderNumber.create({"orderNumbers": randomNumber})
        .then((response) => {
            console.log(response)
            Order.create({
                'product': product,
                "vendor":vendor, 
                "orderNumber":randomNumber, 
                'orderDate':orderDate, 
                "paymentDate":paymentDate, 
                'paymentMethod':paymentMethod, 
                'orderStatus':orderStatus}).then((response)=>{
                console.log(response)
            })
        })//adds the order number to the database
                    console.log("randomNumber", randomNumber)
        }else{
            randomNumber = Math.floor(100000 + Math.random() * 900000);
                OrderNumber.create({"orderNumbers": randomNumber})
                .then((response) => {
                console.log(response)
                Order.create({
                    'product': product,
                    "vendor":vendor, 
                    "orderNumber":randomNumber, 
                    'orderDate':orderDate, 
                    "paymentDate":paymentDate, 
                    'paymentMethod':paymentMethod, 
                    'orderStatus':orderStatus}).then((response)=>{
                    console.log(response)
                })
        })
        }
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




router.get("/orders", (req, res, next) => {
  Order.find().then((allOrders) => res.json(allOrders));
});



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

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}
var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
router.post('/sendConfirmation', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email

  console.log(email)


  var mail = {
    from: email,
    to: email,  //Change to email address that you want to receive messages on
    subject: 'YOUR ORDER HAS BEEN CONFIRMED',
    text: 'This is a test from the super Developers Buyback app'
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
