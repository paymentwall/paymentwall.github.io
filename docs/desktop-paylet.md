---
id: desktop-paylet
title: Paylet
sectionid: docs
permalink: paylet-home
---

# Paylet

Paylet is a payment methods aggregation platform which contains all the payment methods provided by Paymentwall and our partners. It provides a [widget](/paylet/widget) for you to implement Paylet into your application..

## Included payment methods

Payment methods provided by Paymentwall:

* [PayAlto](/direct/payalto-home).

* [Brick](/direct/brick-home).

* [MINT](/direct/mint-home).

* [Mobiamo](/direct/mobiamo-home).

For the payment methods provided by our partners, please refer to [supported payment methods](https://www.paymentwall.com/payment-methods).

> The payment methods which are shown into widget depends on user's current IP address and configuration in **payment system** of your project.

## Optional products

* [Stored product](/paylet/stored-products).

* [Custom price](/paylet/custom-price).

* [Invoice](/paylet/invoice).

* [Offerwall](/paylet/offerwall-home).

## Requirements

* A created Paymentwall project with payment widget created.

## Use Paylet

We assume that you have created a Paymentwall project.

* Build the payment widget by using [Paylet API](/API-Reference#section-paylet-stored). 

+ Display our payment widget. You can use refer to the 2 options below on how to handle the ```widget``` object.
    - ```widget.getHtmlcode()```, which returns an **iframe** html code with default width and height. 
    - If you want to have your own iFrame to display our payment widget or open it in a new tab, use ```widget.getUrl()``` instead.

* Setup Pingback listener

[Pingback](/default-pingback) is our instant payment notification. Each pingback has a unique reference ID in our system, you need to proceed the delivery of the product according to our pingback.