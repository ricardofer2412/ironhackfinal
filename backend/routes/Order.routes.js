const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Order = require("../models/Order.model");
const Vendor = require("../models/Vendor.model");
const creds = require("./config");
var nodemailer = require("nodemailer");

const OrderNumber = require("../models/OrderNumbers.model");

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};
var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/sendConfirmation", (req, res, next) => {
  
});


router.post("/newOrder", (req, res) => {
  let { product, vendor, orderDate, paymentDate, paymentMethod, orderStatus, productPrice } = req.body;
  
  let randomNumber = Math.floor(100000 + Math.random() * 900000);

  OrderNumber.find({ orderNumbers: randomNumber }).then((number) => {
    if (number.length === 0) {
      console.log("does not exist");
      OrderNumber.create({ orderNumbers: randomNumber }).then((orderNumber) => {
        console.log('this is first order number try', orderNumber)
        Order.create({
          product: product,
          price: productPrice,
          vendor: vendor,
          orderNumber: randomNumber,
          orderDate: orderDate,
          paymentDate: paymentDate,
          paymentMethod: paymentMethod,
          orderStatus: orderStatus,
        }).then((order) => {
          console.log(order)
            var name = order.vendor.name;
            var email = order.vendor.email;
            var device = order.product;
            
            console.log(email);

            var mail = {
              from: email,
              to: email, //Change to email address that you want to receive messages on
              subject: "BuyBack Order Confirmation",
              text: `Dear ${name},
          
This is a confirmation email, for the order for your ${device.storage} ${device.device} from ${device.carrier.toUpperCase()}. Your order number is ${randomNumber}, feel free to track the progress of your order in our Track Order section on our site. We will be sending the package with the return label, drop it off at your nearest Post Office, and just sit back and wait for the payment!
              
Thank you for choosing BuyBack App,
              
Sincerely The BuyBack Team`


            };

            transporter.sendMail(mail, (err, data) => {
              if (err) {
                res.json({
                  msg: "fail",
                });
              } else {
                res.json({
                  msg: "success",
                });
              }
            });
        });
      }); //adds the order number to the database
      }

  });
});

router.get("/orders", (req, res, next) => {
  Order.find().then((allOrders) => res.json(allOrders));
});

router.put("/orders/:orderId", (req, res, next) => {
  const { orderId } = req.params;
  console.log(orderId);
  const { status } = req.body;
  console.log(status);

  Order.findByIdAndUpdate(orderId, { orderStatus: status }).then(
    res.json({ message: `order has been updated` })
  );
});
router.delete("/orders/:orderId", (req, res, next) => {
  const { orderId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  Order.findByIdAndDelete(orderId)
    .then(() =>
      res.json({ message: `Product with ${orderId} has been deleted` })
    )
    .catch((error) => res.json(error));
});
router.get("/orders/:orderId", (req, res, next) => {
  console.log("test");

  const { orderId } = req.params;
  console.log(orderId);
  Order.findById(orderId).then((order) => {
    res.json(order);
  });
});

router.get('/track-order/:orderNumber', (req, res) => {
  const orderNumber = req.params.orderNumber;
  console.log('order #', orderNumber);
  Order.find({"orderNumber": orderNumber})
  .then((order) => {
    console.log(order)
    res.json(order)
  })
  .catch((error) =>console.log(error))
})


module.exports = router;
