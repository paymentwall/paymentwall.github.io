---
id: desktop-paylet-stored-vc
title: Virtual Currency
sectionid: docs
permalink: paylet/stored/vc
---

# Virtual Currency

Please make sure your project is configured as **Virtual Currency API** before starting.

## Setup price points

By using virtual currency, you can add your own price points to specific payment method. Do following steps to configure your price points.

* Access your **project settings** and set the virtual currency exchange rate and name of your virtual currency. For example, lets set the virtual currency like 1 USD = 15 Gold coins:

<div class="docs-img">
    <img src="/textures/pic/paylet/pw_project_vc_exchange_rate.png">
</div>

* You can also set more than one currency exchange clicking on **Manage Currency Rates**. So your project will have an USD exchange rate, and an EUR exchange rate for EUR region:

<div class="docs-img">
    <img src="/textures/pic/paylet/pw_project_vc_custom_xe.png">
</div>

* You can then register your price points in Paymentwall side. In **Price Points** area, choose the payment systems where you want to set price points in and add yours there. 

<div class="docs-img">
    <img src="/textures/pic/paylet/pw_project_pricepoint_screen.png">
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
 
## API Call

See [Stored Product for virtual currency](/apis#section-paylet-stored-vc).

## Next Step

Once you have successfully integrated our widget, you can then continue with pingback setup.

> [Pingbacks for virtual currency API](/default-pingback-vc).

Alternatively, you can also see digital goods of Stored Product.

> [Digital goods](/paylet/stored/dg).