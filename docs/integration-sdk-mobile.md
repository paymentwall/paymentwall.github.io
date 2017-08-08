---
id: payments-sdk-mobile
title: Mobile SDK
sectionid: docs
permalink: integration/sdks/mobile-home
---

# Mobile SDK

Mobile SDK is a mobile payment solution for the [payment methods](https://www.paymentwall.com/payment-methods) provided by Paymentwall and our partners. It aims to provide a better user experience. Below is payment process of credit card.

<div class="docs-img">
  <img src="/textures/pic/integration/sdks/mobile/choose-ps.png" style="width: 15%">
  <img src="/textures/pic/integration/sdks/mobile/perform-cc.png" style="width: 15%">
  <img src="/textures/pic/integration/sdks/mobile/processing.png" style="width: 15%">
  <img src="/textures/pic/integration/sdks/mobile/result-success.png" style="width: 15%">
</div>

We have made improvement for [optimized payment methods](/integration/sdks/mobile/support_ps) on UI and method of calling, which could make payment process smooth and easy. Your customers no longer need to waste their time on loading webviews anymore. Once the item is chosen, they can start typing payment information immediately.

For the rest of payment methods, we also provide a view which is suitable for mobile users.

## Components

Mobile SDK consists of two parts: Core SDK and Plugin SDK. For more information about each part, please click the links for details.

* [Core SDK](/integration/sdks/mobile/core). The required part of Mobile SDK.

* [Plugin SDK](/mobile/plugin-home). Plugin SDK is provided for value-added services. You can implement the user experience improvement function or payment methods according to your needs.

## Integration Flow

* Include [Core SDK](/integration/sdks/mobile/core) in your application. Choose one or more payment options according to your needs.

* [Custom price](/integration/checkout-home). Set up product details in core SDK, which is required. To maximize the needs of payment customization and improvements of user experience, Mobile SDK is designed to display products for each request.

* Include payment options which you want to use through [plugin SDK](/mobile/plugin-home) (optional).

* Set up [Pingback](/reference/pingback-home) to implement delivery and other actions according to instant payment notification.
