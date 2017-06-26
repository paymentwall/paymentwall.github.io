---
id: mobile-panda
title: Paymentwall SDK
sectionid: docs
permalink: mobile-sdk
---

# Paymentwall SDK

Paymentwall SDK is a mobile payment solution for the [payment methods](https://www.paymentwall.com/payment-methods) provided by Paymentwall and our partners. It aims to provide better payment experience for mobile users. Below is payment process of credit card. 

<div class="docs-img">
  <img src="/textures/pic/pw-sdk/choose-ps.png" style="width: 15%">
  <img src="/textures/pic/pw-sdk/perform-cc.png" style="width: 15%">
  <img src="/textures/pic/pw-sdk/processing.png" style="width: 15%">
  <img src="/textures/pic/pw-sdk/result-success.png" style="width: 15%">
</div>

For some payment methods, we have made improvement on its UI and method of calling, which could make the payment process smooth and easy. Your customers don't need to waste their time on loading webviews anymore. Once the item is chosen, they can start typing payment information immediately. Please take the table below for reference.

|Payment Methods|Logo|
| :--: | :--: |
|Indomog |<img src="https://api.paymentwall.com/images/developers/pm_indomog.gif?6" style="width: 12%">|
|Paysbuy |<img src="https://api.paymentwall.com/images/developers/pm_paysbuy.gif?6 " style="width: 12%">|
|KBC |<img src="https://api.paymentwall.com/images/developers/pm_kbc.gif?6 " style="width: 12%">| 
|Mister Cash |<img src=" https://api.paymentwall.com/images/developers/pm_bancontact.gif?6" style="width: 12%">| 
|Web Money |<img src="https://api.paymentwall.com/images/developers/pm_webmoney.gif?6 " style="width: 12%">|
|Liqpay | <img src="https://api.paymentwall.com/images/developers/pm_liqpay.gif?6 " style="width: 12%">|
|Sofort Bank Transfer | <img src="https://api.paymentwall.com/images/developers/pm_sofortbanktransfer.gif?6 " style="width: 12%">|
|Mint | <img src=" https://api.paymentwall.com/images/developers/pm_epinpaymentsystem.gif?6" style="width: 12%">|
|Credit Card |<img src="https://api.paymentwall.com/images/developers/pm_allthegate.gif?6 " style="width: 12%">|
|Mobiamo |<img src="https://api.paymentwall.com/images/developers/pm_mobilegateway.gif?6 " style="width: 8%;">|
|Alipay|<img src="https://api.paymentwall.com/images/developers/pm_alipay.gif?6 " style="width: 12%">|
|Union Pay|<img src="https://api.paymentwall.com/images/developers/pm_unionpay.gif?6" style="width: 10%">|
|WeChat|<img src="https://api.paymentwall.com/images/developers/pm_wechatpayments.gif?6" style="width: 18%">|

For the rest payment methods, we also provide a view which is suitable for mobile users. 

## Components

Paymentwall SDK consists of two parts: Core SDK and Plugin SDK. For more information about each part, please click the links for details.

* [Core SDK](/mobile/core). The required part of Paymentwall SDK. 

* [Plugin SDK](/mobile/plugin). Local payment options which can be a plugin to core SDK. It provides better experience for some payment methods, which will improve on UI and loading speed.

## Integration Flow

* Include [core SDK](/mobile/core) in your application. Choose one or more payment options according to your needs.

* [Custom price](/paylet/custom-price). Set up product details in core SDK, which is required. To maximize the needs of payment customization and improvements of user experience, Paymentwall SDK is designed to display one product for each request.

* Include payment options which you want to use through plugin SDK (optional).

* Set up [Pingback](/default-pingback) to implement delivery and other actions according to instant payment notification.
