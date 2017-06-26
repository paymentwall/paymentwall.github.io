---
id: desktop-paylet-stored
title: Stored products
sectionid: docs
permalink: paylet/stored-products
---

# Stored Products

Stored product means that you registered your product in Paymentwall side.

You can set different settings for each product/price point like specific regions you want that product to be sold, one time payment or recurring subscription, price, and discounts/bonuses.

Here is a sample using m2 widget.

<div class="docs-iframe" style="text-align: center;">
	<iframe src="https://api.paymentwall.com/api/subscription/?key=048c51f8fc834a1467db96b683f16e70&uid=testuser&widget=m2_1&sign_version=2&sign=87363025d50bd587eaec63937a20a6e3">
	</iframe>
</div>

## Features

Stored product relies on the products selection page, hence it is not available for deep-linked payment systems. See [Custom price](/paylet/custom-price) if you want to have a deep-linked payment system for your application.

By using stored products:

* It is easy to manage your inventory in Paymentwall side. You can freely add, edit or remove products from your project without having to change the integration or source code of your application.

* You can provide the users with various products they can choose.

## Widget support

Integration with stored products supports below widgets.

* p1, a unified widget on websites. It has a customized widget, which is p10. 

* p2, similar to p1 but requires an additional parameter ```ps``` as [optional parameter](/API-Reference#section-paylet-optional-parameter). 

* p4, all the payment method requires to be opened in a new window.

* m2, a unified widget with better performance on mobile, also suitable for websites.

* mo, standalone widget for [Mobiamo](/direct/mobiamo-home).

## Choosing API

* [Digital Goods](/paylet/stored/dg), used for recurring membership, in-game virtual items, digital content, full version of a game or software, Saas, and one-time payments.

* [Virtual Currency](/paylet/stored/vc). Any game or website that has virtual currency economy, for example Gold, Rubies, Gems, Rupees, Emeralds, Credits, Galactic credit standard, etc...
