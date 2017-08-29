---
id: payments-checkout-onetime
title: Onetime payment
sectionid: docs
permalink: integration/checkout/onetime
---

# Onetime Payments

*Onetime payments* are the instant payment of [Checkout API](/integration/checkout-home). Start your integration with the following steps once you have product selection step finished in your application:

* [Build payment page](#build-payment-page).

* [Handle pingback](#handle-pingback).

* [Client-side action](#client-side-action).

***

## Build payment page

Payment link can be built by ```widget``` object. The configuration difference between [single payment methods](/integration/checkout-home#checkout-api-uni) and [all payment methods](/integration/checkout-home#checkout-api-multi) is the value of ```ps``` parameter.

> See [parameter definition](/apis#section-checkout-onetime) for the requirement and meaning of each parameters while using *onetime payments*.

{% assign codeId = "code-checkout-onetime" %}
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

> If you would like to redirect the user after a payment is made, you can pass the ```success_url``` parameter as [optional parameter](/apis#section-checkout-optional_parameter) that will be used as the URL of redirecting displayed to your customer after a payment is made.

You can then embed the payment page into your application by either using *iframe* or opening it with a new browser window.

***

## Handle pingback

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

## Client-side action

In most cases, a complete payment experience is required wherein the end-users can be redirected back to the original application after making a payment. 

There would be a *link* shown up in the payment successful page which is hosted by Paymentwall or our partners if you have ```success_url``` presented as [optional parameter](/apis#section-checkout-optional_parameter) while building the link of *payment page*. Your customers are then able to click it and go back to your applications.

Alternatively, [client-side callback](/reference/client-side-callback) is suitable if you have additional requirements about client-side actions once a payment is finished.

***

## Relevant topics

* [Test your payment system](/sandbox/test-payment).

* [Pingback](/reference/pingback-home).

* [Project Review](/guides/review-home).