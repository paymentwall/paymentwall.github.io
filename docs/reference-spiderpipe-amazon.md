---
id: reference-spiderpipe-amazon
title: SpiderPipe - Amazon
sectionid: docs
permalink: spiderpipe/amazon
---

# SpiderPipe - Amazon

Steps to connect your Amazon account to Paymentwall.

* [Create Amazon payments business account](#create-amazon-payments-business-account).

* [Configure IPN listener and callback url](#configure-ipn-listener-and-callback-url).

* [Add Amazon payments business account to Paymentwall](#add-amazon-payments-business-account-to-paymentwall).

## Create Amazon payments business account

In order to set up an Amazon payment method you need to have :

* Amazon Payments Business Account, see [Amazon business account overview](https://payments.amazon.com/sdui/sdui/business/overview).

> Please complete all verifications steps required by Amazon (such as Email, Bank Account, Credit Card and Tax interview).

* AWS Console Account, click [here](https://portal.aws.amazon.com/gp/aws/developer/subscription/index.html) for more details.

## Configure IPN listener and callback url

* Log in to your Amazon Payments Business account.

* Under **Edit My Account Settings** tab, click  **Manage Developer and Seller Preferences** link.

<div class="docs-img">
	<img src="/textures/pic/reference/spiderpipe/amazon-account_settings-edit-manage-devreseller-preference.jpg" style="width: 80%">
</div>

* Enter the following Callback URL to **URL for Instant Payment Notification**. Alternatively, you can click [here](https://payments.amazon.com/sdui/sdui/managecobranding) to configure IPN listener & callback URL.

```html
https://api.paymentwall.com/api/paymentpingback/amazon
```

<div class="docs-img">
	<img src="/textures/pic/reference/spiderpipe/amazon-account_settings-edit-manage-devreseller-preference.jpg" style="width: 80%">
</div>

## Add Amazon payments business account to Paymentwall

* Log in to Paymentwall Developers Area, go to **Account Settings**.

* Find **SpiderPipe Accounts** and click **Add Payment account** button.

<div class="docs-img">
	<img src="/textures/pic/reference/spiderpipe/pw-account_settings-add-spiderpipe-account.jpg" style="width: 80%">
</div>

* Select the **Amazon Payments** payment system from the list.

<div class="docs-img">
	<img src="/textures/pic/reference/spiderpipe/pw-account_settings-spiderpipe-select-amazon.jpg" style="width: 80%">
</div>

* Fill up the form and save.

<div class="docs-img">
	<img src="/textures/pic/reference/spiderpipe/pw-account_settings-spiderpipe-amazon.jpg" style="width: 80%">
</div>

**Access Key ID** and **Secret Access Key** credentials can be obtained in your [AWS Console account](https://portal.aws.amazon.com/gp/aws/securityCredentials). 

<div class="docs-img">
	<img src="/textures/pic/reference/spiderpipe/amazon-aws_console-access-secretkey.jpg" style="width: 80%">
</div>

>  Amazon sends chargeback notifications via email. Hence, we recommend you to set up the specific filters that are meant to forward the elected emails received from Amazon directly to us at [thirdparty@paymentwall.com](mailto:thirdparty@paymentwall.com).

## Next step

You can now using Amazon payment method in our payment widget.

