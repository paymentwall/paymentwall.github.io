---
id: payments-widget-dg
title: Digital Goods
sectionid: docs
permalink: integration/widget/digital-goods
---

# Widget API - Digital Goods

[Full API Reference](/apis#section-widget-dg).  

In-game virtual items, digital contents, full version of a game or software, Saas, and any one-time payment products can be stored on Paymentwall side.

* [Widget Call](#widget-call).

* [Handle Pingback](#handle-pingback).

* [Success Page](#success-page).

## Configuration

Once you have a project created in [My Projects](https://api.paymentwall.com/developers/applications), you can start configure your project at **Settings** section to make it work properly with *Widget API*:

* Select **Your API**  as *Widget API - Digital Goods*.

* Setup your inventories using [Product Inventory Management - Digital Goods](/reference/product-inventory-management-dg)

* Fill up the **Pingback url** to receive pingback notification.

***

## Widget Call

By replacing the value of ```ps``` parameter from ```all``` to specific [payment systems API](/apis#section-tools-payment-systems) short codes, you can specify payment method for *single payment method*.

{% assign codeId = "widget-api-dg" %}
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

## Handle Pingback
>Before you start, please read [Pingbacks](/reference/pingback-home) document to get an overview of Paymentwall Pingback system.

Sample Pingback Request for Digital Goods :

```
http://www.yourserver.com/anypath?uid=pwuser&goodsid=gold_membership&slength=1&speriod=month&type=0&ref=b1493096790&sign_version=2&sig=d94b23ba8585f29978706dd1b153ead9
```

Sample code using [Paymentwall API Libraries](https://github.com/paymentwall) at GitHub.

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

Before you submit the project, please test your pingback integration using [Test Pingback Tool](/sandbox/pingback-tool).

You should check whether your Pingback listener is :
- responding ```OK``` to Paymentwall pingback requests.
- filtering duplicate reference id requests.
- filtering wrong signature requests. You can test this by checking **Use a dummy value** feature in Test Pingback Tool.

## Success Page
If you would like to redirect the user after a payment is made, you can pass the ```success_url``` and ```failure_url``` parameters as [optional parameter](/apis#section-param-optional) that will be used as the address of landing page after your users made payments.
You can also use client side callback if you want to take more actions.

> To enable client side callback, please contact to devsupport@paymentwall.com with your Paymentwall account email address.

***

## Next Step

Once you have successfully integrated our widget and set up for the pingback listener, you can submit your project for review.

> See [project go live](/guides/review-home).
