---
id: desktop-direct-brick-charge
title: Charge
sectionid: docs
permalink: direct/brick/charge
---

# Charge

With [one-time token](/direct/brick/create-form) and [fingerprint](/direct/brick/create-form) which are collected by Brick.js, you can then easily charge credit cards by using Charge API on your server side. 

## Charge request

In charge request, you can define the price and currency of your product. See [charge API](/apis#section-brick-charge) for the format of each parameter.

{% assign codeId = "desktop-brick-charge-request" %}
<div class="docs-code" id="{{ codeId }}">
  <ul class="docs-code-tabs">
    <li>
      <a class="docs-code-tabs__tab is-active" lang="php">Php</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="js">Node</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="java">Java</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="curl">cURL</a>
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
  <div class="docs-code-tabs__body js-lang-curl">
    {% for docscode in site.docscode-curl %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
</div>

> By default, Brick capture the charge at once, see [authorize and capture](#authorize-and-capture) if you prefer to do it later.

## Charge response object

Once a charge request is successfully performed, you will get a charge response object which contains the payment information to help you verify your end users. See [attributes](/apis#section-brick-charge-object) for more details.

Each charge has its own id which could be used for authorizing and capturing actions later.

## Handle charge response

You can get the charge response object and redirect your customer to payment result pages by using below script.

Our risk team will help you to review the payment which is suspicious, it is possible to take 1 ~ 2 mins. It is recommended to add a page to notify your customer that his/her payment is under review.

{% assign codeId = "desktop-brick-charge-response" %}
<div class="docs-code" id="{{ codeId }}">
  <ul class="docs-code-tabs">
    <li>
      <a class="docs-code-tabs__tab is-active" lang="php">Php</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="js">Node</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="java">Java</a>
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
</div>

Paymentwall instant payment notification, [pingback](/default-pingback), will be sent immediately once a charge request is achieved. Your delivery should be performed according to the [type](/default-pingback#pingback-type) of our pingback. You may also define your own parameter as additional parameters in [charge request](#charge-request) which can be set as [custom pingback parameters](/pingback-custom-parameters) for transparent transmission in charge request.


## Storing a card after charge

If you want to store the credit card for future use, you can store the permanent token, ```card.token``` field of [charge response object](#charge-response-object), and use it for a new charge request later. 

{% assign codeId = "desktop-brick-charge-store-card-request" %}
<div class="docs-code" id="{{ codeId }}">
  <ul class="docs-code-tabs">
    <li>
      <a class="docs-code-tabs__tab is-active" lang="php">Php</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="js">Node</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="java">Java</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="curl">cURL</a>
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
  <div class="docs-code-tabs__body js-lang-curl">
    {% for docscode in site.docscode-curl %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
</div>

## Authorize and capture

Parameter ```options[capture]``` can be used in [charge request](#charge) for people who want to capture charge later. 

Brick charge request will only do pre-authorization if ```options[capture]=0```( By default ```options[capture]=1```) and put a temporary "hold" on the funds for 7 days.

You can use the ```id``` of charge response object to [capture](#capture) the funds during the period. 

> The capture action will be declined if the pre-authorization has expired.

{% assign codeId = "desktop-brick-charge-capture" %}
<div class="docs-code" id="{{ codeId }}">
  <ul class="docs-code-tabs">
    <li>
      <a class="docs-code-tabs__tab is-active" lang="php">Php</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="js">Node</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="java">Java</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="curl">cURL</a>
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
  <div class="docs-code-tabs__body js-lang-curl">
    {% for docscode in site.docscode-curl %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
</div>

At the same time, you can also void the funds if you don't want to capture it.

{% assign codeId = "desktop-brick-charge-void" %}
<div class="docs-code" id="{{ codeId }}">
  <ul class="docs-code-tabs">
    <li>
      <a class="docs-code-tabs__tab is-active" lang="php">Php</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="js">Node</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="java">Java</a>
    </li>
    <li>
      <a class="docs-code-tabs__tab" lang="curl">cURL</a>
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
  <div class="docs-code-tabs__body js-lang-curl">
    {% for docscode in site.docscode-curl %}
    {% if docscode.codeId == codeId %}
    {{ docscode.content }}
    {% break %}
    {% endif %}
    {% endfor %}
  </div>
</div>

## Next Step

You are almost done! Your payment system now can handle the payments which don't have 3D secure enabled. In order to make your payment system  support 3D secure payments,

> See how to [apply 3d secure](/direct/brick/3dsecure).
