---
id: desktop-mobiamo-pinless
title: Pinless API
sectionid: docs
permalink: direct/mobiamo/mobiamo-pinless
---

# Pinless API

## API description

Pinless API allows merchants to own the checkout page and charge users via mobile carrier billing. 

Please contact [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) to activate for your project. The list of supported countries for this API can be discovered [here](http://new.mobiamo.com/coverage) (Check One-click payment supported).

This API requires the installation of Mobiamo Android SDK, which is the SDK wrapper. 

> In case it is not convenient for you to use the SDK, the following features you and your customers need to handle manually: passing ```mnc```, ```mcc``` in the request and sending the text message to make payment. 

## Payment flow

<div class="docs-img">
	<img src="/textures/pic/mobiamo/pinlessapi.png">
</div>

## Pinless API

##### Endpoint

```
POST https://api.paymentwall.com/api/mobiamo/payment
```

##### Request parameters

| Parameter | Description|
| ---|---|
| uid | ID of the end-user stored in your system |
| key | The Project Key. Sign in to your Merchant Account to get the Project Key in General Settings of the project |
| product_name | Name of the product purchased by the user |
| product_id | 	ID of the product purchased by the user |
| amount | Pricepoint of your product |
| currency | Currency code of the pricepoint following [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)|
| country | Country code of the pricepoint following [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)|
| mnc | [Mobile Network Code](https://en.wikipedia.org/wiki/Mobile_country_code#National_operators), needed to be matched with the ```mcc``` to identify user's carrier |
| mcc | [Mobile Country Code](https://en.wikipedia.org/wiki/Mobile_country_code#National_operators) |
| ts | unix timestamp when the request was initiated, in seconds |
| sign | The signature of the request. Refer to [signature calculation](/signature-calculation) for more details. |
| sign_version | The signature version. Requires version 2 at least |

##### Response parameters

| Parameter | Description|
| ---|---|
| transaction_id | Id of the order |
| keyword | Keyword to be sent in the MO SMS message |
| shortcode | A number where the MO SMS message needs to be sent to |
| regulatory_text | Text required by carriers to be shown to the user before purchasing |

## Billing the user

User then needs to send an MO SMS to the given ```shortcode``` with the following text: ```keyword``` ```transaction_id```

If you use our Mobiamo Android SDK, the message can be sent automatically on behalf of the user. Otherwise, users have to manually send the SMS to make payment. 

> In addition, we have a function to set up the message for the users so they only need to press send. To activate this feature. please contact [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com).

## Payment confirmation

Once the payment is processed, Paymentwall will send a server-to-server pingback to merchant's server. The format of the pingback matches [Digital Goods API](/default-pingback).
