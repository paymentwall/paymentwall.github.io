---
id: payments-direct-mobiamo
title: Mobiamo
permalink: integration/direct/mobiamo-home
sectionid: docs
---

# Mobiamo

[Mobiamo](http://www.mobiamo.com/) is a mobile SMS payment method which connects you to over 240 mobile network operators. You can build your own mobile payment experience into your application by integrating it.

## Use Mobiamo

Mobiamo only supports specific price points per country depending on the mobile carrier used. Therefore it won't be visible in the widget if there is a price point mismatch. Refer to [Mobiamo coverage](http://www.mobiamo.com/coverage) for more details.

You can also pull the list of Mobiamo active price points for a project in a specific country via [price point API](/apis#section-mobiamo-pricepoint).

> We provide [price points discovery mechanic](#price-points-discovery-mechanic) to rearrange your product price so that Mobiamo can be an available payment method for your customers.

## Activation

On your merchant account, simply go to ```My Projects``` > ```Payment Systems``` to turn Mobiamo on.

## Mobiamo in hosted checkout

* Mobiamo can be used directly in [widget API](/integration/widget-home) and [checkout API](/integration/checkout-home) as an alternative payment method.

* Mobiamo has its own standalone widget, whose widget code is ```mo```. Below is a sample ```mo``` widget for Poland using [virtual currency](/integration/widget/virtual-currency).

<div class="docs-iframe" style="text-align: center;">
	<iframe src="https://api.paymentwall.com/api/ps/?key=7f37fa10dcc9ce39ea133ba24b76e748&uid=user40012&widget=mo1_1&vc=Coins&country_code=PL&sign_version=2&sign=1d086abf7a470a7ebace4ba3a4a0d7cd"></iframe>
</div>

## Price points discovery mechanic

Price range is required to be set before using this mechanic. 

By default, it is set as ```[0.9, 1.25]```. The supported price point will be searched in the range from ```0.9``` * ```your_product_price``` to ```1.25``` * ```your_product_price```. The nearest available price point to your product price will be selected if it is in the range.

> For example, if you pass the price of your product equal to 7.00 PLN in Poland, your users will be able to pay with Mobiamo at 7.38 PLN because it is the nearest supported price point to your price 7.00 PLN and it is in the range of search (6.3 PLN to 7.8 PLN).

Your product price will be changed according to the price range.

In case no supported price point is discovered in the default range, Mobiamo won’t be included as a payment option for your users to choose from.

> If you want to change the default range of price point discovery, please kindly contact us at [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com).