---
id: desktop-direct-brick
title: Brick
sectionid: docs
permalink: direct/brick-home
---
# Brick

<div id="payment-form-container">
</div>
<script src="https://api.paymentwall.com/brick/brick.1.4.js"></script>
<script type="text/javascript">
	var brick = new Brick({
		public_key: 't_a93db6bffafdda5c57ab48296fdbba',
		amount: 0.99,
		currency: 'USD',
		container: 'payment-form-container',
		action: 'http://testbed1.stuffio.com/bricktest/brick-doc.php',
		form: {
			merchant: 'Your store',
			product: 'Your goods name',
			pay_button: 'Pay',
			zip: true
		}
	});

	brick.showPaymentForm(function(data) {

	}, function(errors) {
    // handle errors
	});
</script>

Brick is a pure credit card payment solution provided by Paymentwall. It allows you to develop your own payment experience for credit cards payments specifically.

It can be used in [Paylet](/paylet-home) as credit card gateway. Alternatively, you can integrate it using [Brick API](/API-Reference#section-brick-onetime-token) in your application. 

## Try with Brick

By using Brick test cards in [Sanbox](/direct/brick/sandbox) or card information below to do a test payment.

* Card number: 4242 4242 4242 4242.

* Expiry date: 03/21.

* CVV: 097.

* Email: test@paymentwall.com.

Each successful payment has a one-time token to be used in further charge request.

## Components

* [Create form](/direct/brick/create-form) to collect payment details and generate one-time token. 

* Perform request according to your product type, [onetime payment](/direct/brick/charge) or [subscription](/direct/brick/subscription).

## Requirements

* Your payment pages must be loaded via **HTTPS**.

* [3D Secure](http://www.mastercard.com/gateway/implementation_guides/3D-Secure.html) (as known as [verified by Visa](https://www.visaeurope.com/making-payments/verified-by-visa/)) should be implemented into your payment system. See how to [apply 3D Secure](/direct/brick/3dSecure) in Brick.

* A Paymentwall project with Digital Goods API enabled.

## Use Brick

We assume that you have created a Paymentwall project.

+ Get your project credentails, click Brick logo on your project and you will find following project and secret key combinations provided by Paymentwall:
	- Brick Test Keys. A random 32-bit string started with ```t_``` and used in sandbox environment for payment flow verification.
	- Brick Live Keys. A random 32-bit string and used to collect payments from your customers. To have it, your project will needs to be reviewed by us.

* Integrate Brick components in your system

See [components](#components) for more details.

* Setup Pingback listener

[Pingback](/default-pingback) is Paymentwall's instant payment notification. Each pingback has a unique reference ID in our system, please store it and proceed delivery according to our pingback.

