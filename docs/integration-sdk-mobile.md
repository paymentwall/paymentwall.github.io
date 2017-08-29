---
id: payments-sdk-mobile
title: Mobile SDK
sectionid: docs
permalink: integration/sdks/mobile-home
---

# Mobile Overview

*Paymentwall SDK* is a mobile payment solution for the [payment methods](https://www.paymentwall.com/payment-methods) provided by Paymentwall and our partners. It aims to provide a better user experience. Below is the payment process of credit card.

<div class="docs-img">
  <img src="/textures/pic/integration/sdks/mobile/choose-ps.png" style="width: 15%">
  <img src="/textures/pic/integration/sdks/mobile/perform-cc.png" style="width: 15%">
  <img src="/textures/pic/integration/sdks/mobile/processing.png" style="width: 15%">
  <img src="/textures/pic/integration/sdks/mobile/result-success.png" style="width: 15%">
</div>

It requires two main steps to complete integration:
 
* [Step 1: Implement Paymentwall SDK inside of your application](#step-1-implement-paymentwall-sdk-inside-of-your-application).

* [Step 2: Handle pingback](#step-2-handle-pingback).

***

## Step 1: Implement Paymentwall SDK inside of your application

Find our integration library and code samples with following links:

* [Paymentwall Android SDK](https://github.com/paymentwall/paymentwall-android-sdk).

* [Paymentwall iOS SDK](https://github.com/paymentwall/paymentwall-ios-sdk).

***

## Step 2: Handle pingback

On your server side, put the following code as an online server interface to interact with our *Pingback*:

{% assign codeId = "pingback-listener-dg" %}
<div class="docs-code" id="{{ codeId }}">
  <ul class="docs-code-tabs">
    <li>
      <a class="docs-code-tabs__tab is-active" lang="php">PHP</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="js">Node.js</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="java">Java</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="ruby">Ruby</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="python">Python</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="dotnet">.NET</a>
    </li>
  </ul>
  <div class="docs-code-tabs__body js-lang-php is-active">
    {% for docscode in site.docscode-php %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-js">
    {% for docscode in site.docscode-js %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-java">
    {% for docscode in site.docscode-java %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-ruby">
    {% for docscode in site.docscode-ruby %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-python">
    {% for docscode in site.docscode-python %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-dotnet">
    {% for docscode in site.docscode-dotnet %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
</div>

A *pingback* request typically contains all the information for you to do the product delivery. As an addition, Paymentwall provides a series of reversed parameters as [custom pingback parameters](/reference/pingback/custom-parameter) for specific needs, you can also add your own parameters as *custom pingback parameter* in order to implement parameter transmission.

Below is a sample with default format:

```
http://www.yourserver.com/pingback_path?uid=pwuser&goodsid=gold_membership&slength=&speriod=&type=0&ref=b1493096790&sign_version=2&sig=d94b23ba8585f29978706dd1b153ead9
```

After validating the *pingback*, your server is always expected to be able to proceed the delivery process and respond to it with only ```OK``` in the body of *response*.

***

## Payment methods

This SDK consists of two parts, *Core SDK* and *Plugin SDK*. It provides native payment experience for following payment methods.

| Category | Payment Methods|Logo|
| --- |--- | --- |
| Credit card | [Brick](/integration/direct/brick-home) | <img src="https://api.paymentwall.com/images/developers/pm_allthegate.gif?6 " style="width: 12%">|
| Local payments | [Alipay](#guidance-for-extra-integration) | <img src="https://api.paymentwall.com/images/developers/pm_alipay.gif?6 " style="width: 12%">|
| Local payments | [WeChat Pay](#guidance-for-extra-integration) | <img src="https://api.paymentwall.com/images/developers/pm_wechatpayments.gif?6" style="width: 18%">|
| Local payments | [Mycard](#guidance-for-extra-integration) | <img src="https://api.paymentwall.com//images/developers/pm_mycardwallet.gif?6" style="width: 18%">|
| Prepaid card | [Mint](/integration/direct/mint-home) | <img src=" https://api.paymentwall.com/images/developers/pm_epinpaymentsystem.gif?6" style="width: 12%">|
| Mobile payments | [Mobiamo](/integration/direct/mobiamo-home) | <img src="https://api.paymentwall.com/images/developers/pm_mobilegateway.gif?6 " style="width: 8%;">|

At the same time, *Paymentwall SDK* provides *PWLocal* as an aggression of [payment methods](https://www.paymentwall.com/payment-methods), which uses *webview* to display user interface.

***

## Configuration

Configure your project in [merchant dashboard](https://api.paymentwall.com/developers/applications):

* Select **Your API**  as *Digital Goods* in **Settings**.

* Fill the **Pingback url** to receive asynchronous notification in **Settings**.

* Adjust the coverage of each payment methods for your project in **Payment System**.

* Create your preferred interface in **Widgets** if you are going to use *PWLocal*. Refer to [widgets](/reference/widgets) about the attributes of each *widget*.

> There is no need to do configuration for **Region**, **Offers** and **Products** sections.
