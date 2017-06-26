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

We have made improvement for [optimized payment methods](/mobile/support_ps) on their UI and method of calling, which could make the payment process smooth and easy. Your customers don't need to waste their time on loading webviews anymore. Once the item is chosen, they can start typing payment information immediately.

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
