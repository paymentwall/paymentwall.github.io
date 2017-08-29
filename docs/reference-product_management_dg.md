---
id: payments-reference-product_manager_dg
title: Product Manager - Digital Goods
sectionid: docs
permalink: reference/product_manager_dg
---

# Product Manager - Digital Goods

It is easier to manage your inventory by using Paymentwall's **Product Manager**. 
You can add, update or remove products anytime you want without changing the integration or source code of your application. 

Please make sure your project is configured as **Digital Goods API** before starting.

## Setup Regions

You can also specify the Regions that you want to support.
By setting Region groups, you can provide different inventories for each group of countries.
If you don't want to specify, please feel free to skip it.

## Setup products

You can set different settings for each product like specific regions you want that product to be sold (useful for localizing), one time payment or recurring subscription, price, and discount.

<div class="docs-img">
    <img src="/textures/pic/integration/widget/dg-product.png" style="width: 50%">
</div>

## Product details

| Field | Description |
|---|---|
|**Active**| Whether to display the product inside the widget. |
|**Product name**| Products name. |
|**Type**| Fixed (one time payments) or time based (subscriptions). |
|**Length**| This sets the duration of the subscription. |
|**Period**| This sets the period of the subscription charges . |
|**Recurring billing**| Check if subscription should be recurring (auto-renewed). |
|**Trial**| If your subscription has a free trial period. |
|**Post-trial product**| The subscription product which will be applied once trail product is expired. |
|**SKU ID**| Id of the product. In Pingbacks, this comes back as ```goodsid```. |
|**Old Price**| Adds another price with strikethrough to show as discount, keep it same with ```Final Price``` if you don't want to use it. |
|**Final Price**| The price of your product. |
|**Currency**| Currency of the product. |
|**Show discount**| Show discount message for your product if ```Old price``` is higher than ```Final Price```. |
|**Promotion**| Add a note as promotion message to the product. |
|**Default**| Sets the product as pre-selected when widget is opened |
|**Most popular**| Add **Most Popular** tag |
|**Best value**| Adds **Best Value** tag |
|**Order**| Order in which the product should appear in the widget |