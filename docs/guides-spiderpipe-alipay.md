---
id: spiderpipe-payment_methods-alipay
title: SpiderPipe Alipay
sectionid: docs
permalink: guides/spiderpipe/alipay
---

# SpiderPipe - Alipay

Steps to connect Alipay accounts with Paymentwall:

* [Create a Alipay business account](#create-a-alipay-business-account).

* [Configure IPN listener and callback URL](#configure-ipn-listener-and-callback-url).

* [Add Alipay account to Paymentwall](#add-alipay-account-to-paymentwall).

> Please contact [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) to enable Alipay in SpiderPipe.

## Create a Alipay business account

In order to set up an Alipay business account, please see [setup flow](https://openhome.alipay.com/developmentDocument.htm) for reference.

## Configue IPN listener and callback URL

* Login to ALipay developer center.

* Go to **merchant information**, **keys**, set **notify url** as below.

```
https://api.paymentwall.com/api/paymentpingback/alipay
```

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/alipay-merchant_info-set-ipn.jpg" style="max-width:80%">
</div>


## Add Alipay account to Paymentwall

* Login to Paymentwall Merchant Area, go to **My Accounts**, **Account Settings**.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/pw-account_settings-add-spiderpipe-account.jpg" style="max-width:80%">
</div>

* Click **Add Payment Account** and choose **Alipay** from the list.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/pw-account_settings-spiderpipe-select-alipay.jpg" style="max-width:80%">
</div>

* Find your Paterner ID on Alipay developer page.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/alipay-merchant_info-partner-id.jpg" style="max-width:80%">
</div>

* Gnerate Public Key and Private Key.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/alipay-merchant_info-keys.jpg" style="max-width:80%">
</div>

* Fill in the form and save.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/pw-account_settings-spiderpipe-alipay-form.png" style="max-width:80%">
</div>

> The **Seller ID** is your Alipay registration email.


