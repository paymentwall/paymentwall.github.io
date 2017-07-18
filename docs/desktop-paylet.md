---
id: desktop-paylet
title: Paylet
sectionid: docs
permalink: paylet-home
---

# Paylet

Paylet is a payment methods aggregation platform which contains all the payment methods provided by Paymentwall and our partners. It provides a [Widget](/paylet/reference/widget) object as a carrier of the corresponding payment methods for a designated country.
 
## Payment methods

All [supported payment methods](https://www.paymentwall.com/payment-methods) can be used directly by integrating Paylet and are shown into Widget as an available option. 

Each project has a default configuration of activated payment methods, you can do adjustments to the activated payment methods and their country coverage for corresponding project in **Payment System** section in [Dashboard](https://api.paymentwall.com/developers/applications) according to your own preferences. The payment options showing in widgets are set by the IP address of visitors and the country coverage of corresponding payment methods. 

## Customer payment flow

<div class="docs-img">
    <img src="/textures/pic/paylet/pw_paylet_customer_payment_flow.png">
</div>

Conventionally, a payment system requires option pages of merchandise and payment methods before allowing user to make a payment. These two option pages can be provided by our widgets, depending on how you integrate Paylet.

| Integration | Available options | Description | 
| --- | --- | --- |
| [Stored product](/paylet/stored-products) | Merchandise options; Payment methods options. |  Widget provides both merchandise and payment methods option pages. <br> The merchandise option page relies on how you configure your product details in Dashboard. There is no product information sent in [Paylet API for Stored Product](/apis#section-paylet-stored).|
| [Custom price](/paylet/custom-price) | Payment methods options. | Widget can provide payment methods option page or redirect your customer to the corresponding checkout page directly.<br> Merchandise option page is expected to be accomplished in your own application. After that, all the product information are sent via [Paylet API for Custom Price](/apis#section-paylet-custom).|

After the widget is built successfully, you can use following methods to embed it into your own application.

* ```widget.getHtmlcode()``` returns an <iframe> html code with default width and height. 
* ```widget.getUrl()``` returns a ```url```, you can then use it to define <iframe> with custom size or open it in a new tab.

As a result, your customers are redirected to checkout pages via our widgets and able to make payment with their preferred payment method. 

## Notification

Paymentwall sends a asynchronous notification called [Pingback](/default-pingback) once it is determined that the user has paid successfully.

For synchronous notification, Paymentwall provides a [Client-side callback](/paylet/reference/feature#client-side-callback) which allows you to update your pages respectively.
