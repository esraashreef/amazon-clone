const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
    "sk_test_51JPnsQJoUzv1x0Frj5HwV5XiAnQDcRQWd777ZGu69Uv40x7YgqaHz2P5MdPjVvhDilUVb7jBbOnrrTqaehpQHj8H00kTKIDJxV",
);


// app config
const app =express();

// middleeware
app.use(cors({origin: true}));
app.use(express.json());
// api routes
app.get("/", (request, response)=> {
  response.status(200).send("hello world");
},
);


app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// listen code

exports.api= functions.https.onRequest(app);

// http://localhost:5001/clone-dc71c/us-central1/api

