---
id: payments-direct-brick-subscription
sectionid: docs
title: Subscription
permalink: integration/direct/brick/subscription
---

# Subscription

This tutorial helps you to setup Brick subscription into your payment system.

## Subscription request

We assume that you have collected [one-time token](/integration/direct/brick/create-form) and [fingerprint](/integration/direct/brick/create-form) on your backend side. You can then use our [Subscription API](/apis#section-brick-subscription) to define subscription for your product.

{% assign codeId = "desktop-brick-subscription-request" %}
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

## Setup trial period

If you want to provide a trial period for your customers, you can add a trial subscription on your product.

{% assign codeId = "desktop-brick-subscription-trial" %}
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

## Subscription response object

Once a subscription request is successfully performed, you will get a subscription response object which contains the subscription details. See [subscription response attributes](/apis#section-brick-subscription-object) for more details.

Each subscription has several charge id which represents the payments in subscription histroy.

## Handle subscription 

Paymentwall instant payment notification, [pingback](/reference/pingback-home), will be sent immediately once a subscription request is achieved. Your delivery should be performed according to the [type](/reference/pingback-home#pingback-type) of our pingback. You may also define your own parameter as additional parameters in [subscription request](#subscription-request) which can be set as [custom pingback parameters](/reference/pingback/custom-parameter) for transparent transmission in charge request.

## Subscription Schedule

Once a user makes his first payment via subscription, we are authorized for recurring billing until his subscription expired.

We will automatically charge the user based on the subscription schedule. E.g. if you specify the product length as 1 month, we will charge the user every month. Next payment will happen on the same day of the next month. For example, if a payment happens on 30th of January, the next payment will be made in first days of March.

Every time a user is billed, we will send a new pingback.

Once the last charge happens Paymentwall will send a pingback with pingback ```type=13```,  which means the subscription is expired.

## Subscription failure

If a user has insufficient funds or a payment fails for any other reason, Paymentwall will make 2 reattempts (3 attempts in total) to charge the user. [Payment Status API](/apis#section-tools-payment-status) will report active status of the subscription and ```date_next``` will contain the date of the next attempt.

If all of the attempts fail, Paymentwall will stop the subscription.

> Once the subscription stopped, it will no longer process an attempt to charge the user for the next scheduled payment.

For this event Paymentwall will send a pingback with ```type=14```, means subscription payment failed.

## Subscription cancellation

You can also cancel the subscription by using scripts below or using our [cancellation API](/apis#section-tools-cancellation).

{% assign codeId = "desktop-brick-subscription-cancellation" %}
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

## Next step

That's it! Your payment system now can handle the subscription payments. You will need to implement 3D secure as next step.

> See how to [apply 3d secure](/integration/direct/brick/3dsecure).