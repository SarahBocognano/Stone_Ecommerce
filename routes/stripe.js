const router = require('express').Router();
const stripe = require('stripe')('sk_test_51KdyjxLztupzaYHvoaPbr9ZixaFfMRfqXoyZVy3S1OsgDwl6DdyZiWOi4UdfGubHnHlKYgTLiS018i0kSRUCpkAG005UEgMpuj');
const cors = require('cors');

router.post("/", cors(), async (req, res) => {
  let { amount, id } = req.body;
  console.log("amount:" + amount, id);
  
  try{
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "EUR",
      description: "Your Company Description",
      payment_method: id,
      confirm: true
    });
    res.status(200).json({
      message: "Payement effectué",
      success: true,
    })
  }catch(err){
    res.status(500).json(err)
    console.log(err)
  }
})


module.exports = router;