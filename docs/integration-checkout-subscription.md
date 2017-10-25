---
id: payments-checkout-subscription
title: Subscriptions
sectionid: docs
permalink: integration/checkout/subscription
---

# Subscription

*Subscription* is a recurring billing payment solution of [Checkout API](/integration/checkout-home). It allows you to bill your customer based on a specific schedule automatically. Once a user makes his first payment via *subscription*, our system signs him up for recurring billing.

> The user will be charged based on the subscription schedule. E.g. if you specify the product length as 1 month, we will charge the user every month. Next payment will happen the same day of the next month. If a payment happens on 30th of January, the next payment will be made in first days of March.

Integrating it only requires 3 steps:

* [Build payment page](#build-payment-page).

* [Handle pingback](#handle-pingback).

* [Client-side action](#client-side-action).

Before starting, make sure you have product selection step finished in your application. The deduction period for each products needs to be clearly defined and the total period length of the *subscription* shall not exceed 6 months.

***

## Payment methods for subscription

*Subscirption* supports certain payment methods:

|Payment method| Payment system short code| Notes |
|---|---|---|
| PayPal| paypal | Requires [spiderpipe](/guides/spiderpipe/paypal) for PayPal to be activated for your Paymentwall account.|
| MercadoPago | mercadopago |  |
| Qiwi wallet | qiwiwallet | |
| Credit cards | cc | Requires credit card activation flow.|
| Mobiamo | mobilegateway | Mobiamo has a special coverage of price points, see [Mobiamo coverage](http://www.mobiamo.com/coverage). |
| SEPA | sepadirectdebit | |


***

## Build payment page

Payment link can be built by ```widget``` object. The configuration difference between [single payment methods](/integration/checkout-home#checkout-api-uni) and [all payment methods](/integration/checkout-home#checkout-api-multi) is the value of ```ps``` parameter.

> See [parameter definition](/apis#section-checkout-subscription) for the requirement and meaning of each parameters while using *subscription*.

{% assign codeId = "code-checkout-subscription" %}
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

***

## Handle pingback

Every time a user is billed, we will send a new *pingback* to inform you the customer has make a payment for his subscription. On your server side, put the following code as an online server interface to interact with our *Pingback*:

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

A *pingback* request typically contains all the information for you to do the product delivery. As an addition，Paymentwall provides a series of reversed parameters as [custom pingback parameters](/reference/pingback/custom-parameter) for specific needs, you can also add your own parameters as *custom pingback parameter* in order to implement parameter transmission.

Below is a sample with default format:

```
http://www.yourserver.com/pingback_path?uid=pwuser&goodsid=gold_membership&slength=3&speriod=day&type=0&ref=b1493048890&sign_version=2&sig=d94b23ba8585f29978706dd1b153ead9
```

After validating the *pingback*, your server is always expected to be able to proceed the delivery process and respond to it with only ```OK``` in the body of *response*.

Other than successful *subscription*, there are other cases for *pingback*:

* From the moment that the recurring was cancelled, Paymentwall will send a *pingback* with ```type=12```. A *subscription* can be cancelled by either cancelled via submitting a ticket by using [cancellation API](/apis#section-tools-cancellation) or deactivating in [Dashboard](https://api.paymentwall.com/developers/reports/recurring-subscriptions/).

* A *pingback* with ```type=13``` is always generated when the recurring billing period is expired.

* If a user has insufficient funds or a payment fails for any other reason, Paymentwall will make 2 re-attempts (3 attempts in total) to charge the user. [Payment Status API](/apis#section-tools-payment-status) can report active status of the subscription with ```date_next``` for the date of next attempt. The *subscription* will be stopped if all of the attempts fail. And once it is stopped, it will no longer process an attempt to charge the user for the next scheduled payment. Paymentwall will send a *pingback* with ```type=14``` in this case , means the corresponding recurring billing payment failed.

***

## Client-side action

In most cases, a complete payment experience is required wherein the end-users can be redirected back to the original application after making a payment. 


There would be a *link* shown up in the payment successful page which is hosted by Paymentwall or our partners if you have ```success_url``` presented as [optional parameter](/apis#section-param-optional) while building the link of *payment page*. Your customers are then able to click it and go back to your applications.

Alternatively, [client-side callback](/reference/client-side-callback) is suitable if you have additional requirements about client-side actions once a payment is finished.

***

## Relevant topics

* [Test your payment system](/sandbox/test-payment).

* [Pingback](/reference/pingback-home).

* [Project Review](/guides/review-home).
