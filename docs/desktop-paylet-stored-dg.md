---
id: desktop-paylet-stored-dg
title: Digital Goods
sectionid: docs
permalink: paylet/stored/dg
---

# Digital Goods 

Recurring membership, in-game virtual items, digital content, full version of a game or software, Saas, and one-time payments can be stored in Paymentwalls side in order to facilitate the API call: 

Please make sure your project is configured as **Digital Goods API** before starting.

## Setup products

You can set different settings for each product like specific regions you want that product to be sold (useful for localizing), one time payment or recurring subscription, price, and discount.

<div class="docs-img">
    <img src="/textures/pic/paylet/pw_project_product_screen.png" style="width: 50%">
</div>

## Product details

| Field | Description |
|---|---|
|**Active**| Whether to show the product inside the widget. |
|**Product name**| Products name. |
|**Type**| Fixed (one time payments) or time based (subscriptions). |
|**Length**| If subscription, this sets the duration of the subscription. |
|**Period**| If subscription, this sets the period of the subscription charges . |
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
|**Order**| Order the product should appear in the widget |
 
## API Call

See [Stored Product for digital goods](/apis#section-paylet-stored-dg) to perform API Call.

## Next Step

Once you have successfully integrated our widget, you can then continue with pingback setup.

> [Pingbacks for digital goods API](/default-pingback-dg).

Alternatively, you can also see virtual currency of Stored Product.

> [Virtual currency](/paylet/stored/vc).