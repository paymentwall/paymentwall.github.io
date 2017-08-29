---
id: payments-direct-brick
title: Brick
sectionid: docs
permalink: integration/direct/brick-home
---
# Brick Direct

*Brick* is a pure credit card payment solution provided by Paymentwall. It has been integrated in [widget API](/integration/widget-home) and [checkout API](/integration/checkout-home) as credit card gateway for hosted checkout experience.

This tutorial introduce the way to use [Brick Direct API](/apis#section-brick-onetime_token), which allows you to develop your own payment system for credit cards payments. 

***

## Integration

Integrating *Brick Direct* only requires 4 steps:

* Step 1: [Create a payment form](/integration/direct/brick/create-form). 

* Step 2: Choose to perform a [charge](/integration/direct/brick/charge) or a [subscription](/integration/direct/brick/subscription) request.

* Step 3: [Apply 3d secure](/integration/direct/brick/3dsecure).

* Step 4: [Handle Paymentwall pingback](/integration/direct/brick/pingback).

***

## Configuration

Configure your project in [merchant dashboard](https://api.paymentwall.com/developers/applications) to make it work properly with *Brick*.

* Select *Your API* as *Digital Goods* in **Settings**.

* Fill the *Pingback url* to receive asynchronous notification in **Settings**.

* Your payment pages must be loaded via *HTTPS*. 

* Email to [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) with your project key to enable *Brick Direct API* for your project.

> There is no need to do configuration for **Region**, **Offers** and **Products** sections while using *Checkout API*. Before using *Brick* in live environment, make sure you have enabled credit card payment method in **Payment System** section.
