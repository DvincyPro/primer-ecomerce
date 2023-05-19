const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const reciboCheckout = async (req, res) => {
  const { items, email } = req.body;
  //   console.log(items, email);

  try {
    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        unit_amount: Math.round(item.price * 100),
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["ES", "IT", "FR"],
      },
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(items.map((items) => items.image)),
      },
    });

    res.status(200).json({
      id: session.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while creating the checkout session.",
    });
  }
};

export default reciboCheckout;
