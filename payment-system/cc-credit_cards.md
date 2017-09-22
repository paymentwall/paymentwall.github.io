---
id: ps-cc
title: Payment Method - Credit Card
permalink: payment-method/credit-card
sectionid: docs-ps
---

<div class="docs-ps-header">
    <div class="docs-ps-logo">
        <img src="https://api.paymentwall.com/images/ps_logos/pm_gateway.png">
    </div>
    <h1>Credit Card</h1>
</div>

<div class="docs-ps-body" markdown="1">

<div class="docs-ps-instructions" markdown="1">

Credit cards are one of the most common and popular ways for consumers to make purchases online. It enables millions of users around the world to make purchases using branded credit cards. Following multinational financial corporations are supported:
 
* [Visa](https://usa.visa.com/).

* [MasterCard](https://www.mastercard.us/en-us.html).

* [American Express](https://www.americanexpress.com).

*** 

## Payment flow

* Filling the payment details.

<div class="docs-img docs-small-img">
    <img src="/textures/pic/payment-system/credit-cards/cc/cc_form.png">
</div>

* Authorizing the payment, which an additional step for customers to verify themselves before making payments. The displayed verification page varies depending on the user's issuing bank.

<div class="docs-img docs-small-img">
    <img src="/textures/pic/payment-system/credit-cards/cc/cc_3d_secure.png">
</div>

* After finishing the payments, a thank you page with *Transaction code* will be displayed. 

<div class="docs-img docs-small-img">
    <img src="/textures/pic/payment-system/credit-cards/cc/cc_successful.png">
</div>

</div>


<div class="docs-ps-attributes" markdown="1">
<div class="docs-ps-attributes-body" markdown="1">

#### Credit Card

***

|name|description|
|:--|:--|
|Countries| Globally except [sanctioned countries and entities](https://www.paymentwall.com/faq/sanctioned-countries-and-entities) |
|Type|Credit and Debit Cards|
|Processing currencies|Depending on acquiring banks|
|Supported currencies| Refer to [currency codes](/reference/currencies)|
|Payment confirmation time|Instant|
|Payout time frame| NET 30|
|Chargebacks|Yes|
|Refunds|Yes|
|Onboarding required| Yes|
|Recurring Payments|Yes|
|Mobile UI|Yes, Native UI available with [Mobile SDK](/mobile/home)|
|Opens new window|No|
|Min Transaction Limit|0.3 USD or equivalent currencies|

***

Available models:

* **Merchant**. 

Included with your Paymentwall account.

* **MOR**. 

[Terminal 3](https://www.terminal3.com/).

</div>
</div>

</div>