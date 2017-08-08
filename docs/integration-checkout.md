---
id: payments-checkout
title: Checkout API
sectionid: docs
permalink: integration/checkout-home
---

# Checkout API

*Checkout API* is the most popular way to integrate Paymentwall, it provides a *payment page* for hosted checkout payment experience, which can be connected to your application. The link of *payment page* consists of parameters for product details, payment methods of which your customer want to use and its interface. 

***

## Payment flow

<div class="docs-img">
    <img src="/textures/pic/integration/checkout/checkout_multi.png"/>
</div>

A typical payment flow by integrating *checkout API* can be described as following 6 steps:

* [Step 1: User selects the product to buy inside of your application](#step-1-user-selects-the-product-to-buy-inside-of-your-applicationwebsite).

* [Step 2: User selects the payment method to pay with](#step-2-user-selects-the-payment-method-to-pay-with).

* [Step 3: Display the payment page](#step-3-display-the-payment-link).

* [Step 4: Pingback](#step-4-pingback).

* [Step 5: Client-side callback](#step-5-client-side-callback).

* [Step 6: Redirect user to payment success page](#step-6-redirect-user-to-payment-success-page).

***

## Step 1: User selects the product to buy inside of your application. 

*Checkout API* expects a certain product or an certain order to be passed as specific parameters in the link of *payment page*. If you have more than one products, you will need to build a product selection form inside of your application to allow your customer to choose products and then send the product details into the link of *payment page*.

***

## Step 2: User selects the payment method to pay with

Your customer have multiple choices on the payment methods while using Paymentwall. A payment methods selection form is then required, it can be either hosted by your application or Paymentwall.

> Payment methods which are showing up on the widget are depending on user’s IP address and configuration in **Payment Systems** of your project.

For user selecting payment methods on Paymentwall websites, you can simply assign a certain string ```all``` as the value of ```ps``` parameter for *all payment methods* while building *payment page*.

***

For user selecting payment methods inside of your application, there is a difference:

<div class="docs-img">
    <img src="/textures/pic/integration/checkout/checkout_uni.png"/>
</div>

You will need to establish payment methods selection form in your application, and build *payment page* with ```ps``` parameter which can be obtained from [payment system shortcodes](/reference/ps) or using our [payment systems API](/apis#section-tools-payment-systems) with following steps:

* Obtain the country code of your customer based on his ip address. You can also assign a static country code if your customer are all from a same country.
* Dynamically pull the list of methods via *payment systems API* active in a given country, and then embed the respective buttons into your page. A list of all methods we support for the specific country will be returned by Payment System API, you can use it to build your payment methods selection form. Below is a sample for one payment method:

```json
[{
  "id":"idealnl",
  "name":"iDeal",
  "new_window":false,
  "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_ideal.png",
  "img_class":"ideal"
}]
```

* Combine using  ```img_url```, ```name``` with radio button or your preferred way to create available payment methods list.

* Once the user decides which payment method he wants to use, you can use *single payment methods* and add ```ps``` as [optional parameter](/apis#section-paylet-optional-parameter) values ```id``` (Obtained in previous step) to redirect him to Paymentwall websites.

The corresponding checkout pages show up directly whenever your customers are redirected to *payment page*.

***

## Step 3: Display the payment page

Once the link of *payment page* is generated successfully, you can redirect your customer to Paymentwall websites to finish the payment by using following ways:

* Embed as an *iframe* inside of your applications.

* Redirect as a standalone page.

Your customer will be able to fill out the payment details and do the checkout on *payment page*.

***

## Step 4: Pingback

Paymentwall's asynchronous payment notification which is named as *Pingback*, is sent out within a certain time period (Usually within 2 minutes) after user making a payment. It contains a identify transaction id from Paymentwall and final payment status for each payments. 

* The generation of a *Pingback* typically involves a change in the state of its corresponding payment, which is represented by its attribute ```type```. You can consider a payment is *successful* and completed as long as you have received one with ```type=0```. You can then start delivering products to your customer according to the rest information which is included in *Pingback*. 
Refer to [Pingback](/reference/pingback-home) for details.

* Your server must be able to handle our *Pingback* and proceed the delivery to your customer accordingly. At the same time, the identify transaction id from Paymentwall, ```ref```, is expected to be stored into your database in case of any further refund or chargeback actions. 

***
 
## Step 5: Client-side callback

Whenever users make a payment, Paymentwall send a synchronous notification *client-side callback* which uses ```window.postMessage()``` mechanism to deliver events. 

Refer to [client-side callback](/reference/client-side-callback) about how to handle it.

***

## Step 6: Redirect user to payment success page

If you have passed ```success_url``` as an [optional parameter](/apis#section-checkout-optional_parameter) into *payment page*, Paymentwall system can help to redirect your customers back to your application.

***

## Configuration

Configure your project in [merchant dashboard](https://api.paymentwall.com/developers/applications) to make it work properly with *Checkout API*:

* Select *Your API*  as *Digital Goods* in **Settings**.

* Fill the *Pingback url* to receive asynchronous notification in **Settings**.

* Adjust the coverage of each payment methods for your project in **Payment System**.

* Create your preferred interface in **Widgets** and obtain the *widget code* for building the link of *payment page* later on. Paymentwall offers a range of *payment page* templates. The interface of each template is slightly different depending on the *widget code* you are using. Refer to [widgets](/reference/widgets).

> There is no need to do configuration for **Region**, **Offers** and **Products** sections while using *Checkout API*.

***

## Relevant topics

* [Onetime payment](/integration/checkout/onetime).

* [Subscription](/integration/checkout/subscription).

* [Mobile-web integration](/reference/mobile_web).