---
id: desktop-paylet-custom
title: Custom prices
sectionid: docs
permalink: paylet/custom-price
---

# Custom Price

Custom price means that you are sending your products details through [our API](/API-Reference#section-paylet-custom), and not storing it in Paymentwall side.

Here is a sample using Paylet widget.

<div class="docs-iframe" style="text-align: center;">
	<iframe src="https://api.paymentwall.com/api/subscription/?key=cd36b8635c7296dad972a239142c4b84&uid=user40012&widget=pw_1&amount=0.99&currencyCode=USD&ag_name=Gold+Membership&ag_type=fixed&ag_external_id=pw_t_2017051900001&sign_version=2&sign=0802bcbf5754b056458d4036fca74d24"></iframe>
</div>

> Make sure your project is configured as **Digital Goods API** in order to use custom price.

## Features

There will be only one product in our widget while using Custom price as it doesn't have the products selection step, which means you need to create it by your own in your application. 

Since payment methods selection step can also be defined by using ```ps``` param as [optional parameter](/API-Reference#section-paylet-optional-parameter), deep-linked payment system is doable for Custom prices.

* Use widget

Our widget provides a default payment methods selection step for your customers.

* Deep-linked payment system

Alternatively, our widget can also show the target payment method directly at the main page while it is requested. 

In this case, you need to create your own payment methods selection step by using our [payment system API](/API-Reference#section-tools-payment-systems). And embed the ```id``` ( which is ```ps```) from the response of payment system API into the widget call. 


## Widget support

Integration with stored products supports below widgets.

* pw, Paylet widget. The latest published payment widget for better payment experience.

* all the widgets supported in [stored product](/paylet/stored-products#widget-support). 

## Product type

The required parameters are different between onetime payments and subscription, please choose one according to your product type.

* [Onetime payments](/paylet/custom/onetime). Choose it if your product requires an instant payment for total amount.
* [Subscription](/paylet/custom/subscription)