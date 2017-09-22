---
id: mobile-home
title: Mobile SDK
sectionid: docs-mobile
permalink: mobile/home
---

# Paymentwall SDK

## Introduction

* *Paymentwall SDK* is global mobile payment solution from more than 200 countries with local payment options.
* Our Core SDK is a light version(only 2.2MB) but it will become a native part of your application. When user enter payment page, it can help you eliminates the necessity to open a web browser for payments.
* For these [popular payment methods](/mobile/payment-methods), we have do special optimization for mobile user experience and we also support all these [payment methods](/payment-method/credit-card).
* We also provided [utility plugin](/mobile/utility-plugin) for widget customization and credit card scanning as a extra plugin. You can easily make your payment step unique and convenient.
* Paymentwall SDK could provide a better conversion rate and bring more volume for your business. Just few of code lines, your user can see local payment options your users are most familiar with.

## How does our SDK looks like?

<div class="docs-img">
  <button id="mobile-widget-slide-left" class="slide-arrow"><img src="/textures/pic/integration/sdks/mobile/left-arrow.png" class="slide-arrow"></button>
  <img class="img-mobile-widget-actived" src="/textures/pic/integration/sdks/mobile/choose-ps.png">
  <img class="img-mobile-widget-deactived" src="/textures/pic/integration/sdks/mobile/perform-cc.png">
  <img class="img-mobile-widget-deactived" src="/textures/pic/integration/sdks/mobile/result-success.png">
  <button id="mobile-widget-slide-right" class="slide-arrow"><img class="slide-arrow" src="/textures/pic/integration/sdks/mobile/right-arrow.png"></button>
</div>

## How does it work?

* [Step 1: Download Paymentwall SDK from Github](#step-1-download-library-from-github)

* [Step 2: Configure Core SDK](#step-2-configure-core-sdk)

* [Step 3: Choose Payment Methods](#step-3-choose-payment-methods)

* [Step 4: Choose Utility Plugin(optional)](#step-4-choose-utility-plugin-optional)

* [Step 5: Handle pingback](#step-5-handle-pingback)

***

## Step 1: Download library from Github

Our mobile team has built [Android](https://github.com/paymentwall/paymentwall-android-sdk) and [IOS](https://github.com/paymentwall/paymentwall-ios-sdk) libraries. You can find our integration library and code samples with following links:

* [Paymentwall Android SDK](https://github.com/paymentwall/paymentwall-android-sdk)

* [Paymentwall IOS SDK](https://github.com/paymentwall/paymentwall-ios-sdk)

***

## Step 2: Configure Core SDK

* After download our SDK and registered a Paymentwall account, you will get your credential in [My Projects](https://api.paymentwall.com/developers/applications) page

* You need to configure  *project key/public key* into integration file

* When user want to make a payment, you need to add your product information in *Unified Payment Params*:

> See [parameter definition](/apis#section-checkout-onetime) for the requirement and meaning of each parameters while using *onetime payments*.

{% assign codeId = "code-mobile-sdk-configuration" %}
<div class="docs-code" id="{{ codeId }}">
  <ul class="docs-code-tabs">
    <li>
      <a class="docs-code-tabs__tab is-active" lang="android">Android</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="ios">IOS</a>
    </li>
  </ul>
  <div class="docs-code-tabs__body js-lang-android is-active">
    {% for docscode in site.docscode-android %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
  <div class="docs-code-tabs__body js-lang-ios">
    {% for docscode in site.docscode-ios %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
</div>

***

## Step 3: Choose Payment Methods

In this step, you need to choose what payment methods you want to show to your users and how to show them.

1. Based on your users countries, most popular local payment options can be activated from [our backend](https://api.paymentwall.com/developers/applications). If you have any questions or concerns, please [contact us](https://www.paymentwall.com/contacts).


2. Choose your integration model. Now we have three different integration models. For more details please check [mobile payment methods](/mobile/payment-methods) page.


3. If you processed 100,000+ USD a month and want to have a special mobile payment methods solution, please [contact us](https://www.paymentwall.com/contacts).


***

## Step 4: Choose Utility Plugin(optional)

We are trying to provide a unique and convenient experience for all merchants.

Through our utility plugin you can easily get:

* Customized widget

* Scan card ability

* Use your own payment account with our [SpiderPipe](/guides/spiderpipe-home) product. You can receiving money under our risk filter protect and get merchant support, CRM support service for free!

For more detials please check [Utility Plugin](/mobile/utility-plugin) tab

***

## Step 5: Handle pingback

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

## Next Step

Once you have successfully integrated our widget and set up for the pingback listener, you can submit your project for review.

> See [project go live](/guides/review-home).
