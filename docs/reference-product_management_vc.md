---
id: payments-reference-product_manager_vc
title: Product Manager - Virtual Currency
sectionid: docs
permalink: reference/product_manager_vc
---

# Product Manager - Virtual Currency

It is easier to manage virtual economy of your application by using Paymentwall **Product Manager**. 
You can add, update or remove price points anytime you want without changing the integration or source code of your application.

Please make sure your project is configured as **Virtual Currency API** before starting.

## Setup Regions

You can also specify the Regions that you want to service.
By setting Region groups, you can provide different currencies for each group of countries.
If you don't want to specify, please feel free to skip it.

## Setup price points

By using virtual currency, you can add your own price points to specific payment method. Do following steps to configure your price points.

* Access your **project settings** and set the virtual currency exchange rate and name of your virtual currency. For example, lets set the virtual currency like 1 USD = 15 Gold coins:

<div class="docs-img">
    <img src="/textures/pic/integration/widget/vc-exchange-rate.png">
</div>

* You can also set more than one currency exchange clicking on **Manage Currency Rates**. So your project will have an USD exchange rate, and an EUR exchange rate for EUR region:

<div class="docs-img">
    <img src="/textures/pic/integration/widget/vc-custom-xe.png">
</div>

* You can then register your price points in Paymentwall side. In **Price Points** area, choose the payment systems where you want to set price points in and add yours there. 

<div class="docs-img">
    <img src="/textures/pic/integration/widget/vc-pricepoint.png">
</div>

> Mobiamo has its own price points which are declared by mobile operators. New price points are not acceptable for Mobiamo.

You will also see how much virtual currency the customer is purchasing (this is calculated according to the virtual currency exchange rate).

## Price points details

| Field | Description |
|---|---|
|**Active**| shows or hides the product inside the widget |
|**Price**| End user payment price|
|**Base, Gold Coins**| How much VC the price point is worth. No bonuses or discounts applied |
|**Discount type**| You can set that price point to have bonuses or discounts applied. |
|**Discount amount**| Amount of discount/bonus to be applied |
|**Result**| Final amount of VC the user is purchasing |
|**Promotion**| Promotional message |
|**Default**| Sets the product as pre-selected when widget is opened |
|**Most popular**| Adds **Most Popular** tag |
|**Best value**| Adds **Best Value** tag |
|**Clicks**| Amount of clicks this price point already has. You can use this to check price points popularity |
|**Convertions**| Amount of confirmed purchases this price point have |
|**Revenue**| Amount in USD of how much money this price point generates |