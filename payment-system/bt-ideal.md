---
id: ps-iDeal
title: Payment Method - iDeal
permalink: payment-method/ideal
sectionid: docs-ps
---

<div class="docs-ps-header">
    <div class="docs-ps-logo">
        <img src="https://api.paymentwall.com/images/ps_logos/pm_idealpayments.png">
    </div>
    <h1>iDeal</h1>
</div>

<div class="docs-ps-body" markdown="1">

<div class="docs-ps-instructions" markdown="1">

iDEAL is a Netherlands-based payment method that allows customers to complete transactions online using their bank credentials. All major Dutch banks are members of Currence, the scheme that operates iDEAL, making it the most popular online payment method in the Netherlands with a share of online payments close to 55%.

<br>

In order to pay with iDEAL, customers are redirected to their online banking environment where they can authenticate the payment using a second factor of authentication. The exact experience customer go through will depend on their bank. While the iDEAL payment flow may not appear seamless to some businesses discovering it, it is well understood and appreciated by Dutch customers. Payments are irrevocable and immediately confirmed, two strong value propositions of iDEAL for businesses. 
  
<br>

While iDEAL payments details are single-use, each transaction can allow business to retrieve the bank account details of customers. enabling subsequent payments to be completed via SEPA Direct Debit with the appropriate mandate authorization. 

*** 

## Payment flow

* Select a bank to proceed payments.

<div class="docs-img docs-medium-img">
    <img src="/textures/pic/payment-system/bank-transfer/ideal/ideal_ov.png">
</div>

* Finish the payment after redirecting to checkout page of selected bank.

<div class="docs-img">
    <img src="/textures/pic/payment-system/bank-transfer/ideal/ideal_knab.png">
</div>

</div>



<div class="docs-ps-attributes" markdown="1">
<div class="docs-ps-attributes-body" markdown="1">

#### iDeal

***

|name|description|
|:--|:--|
|Countries| <img class="flags" src="/textures/pic/flags/europe/netherlands.png"> [NL](https://en.wikipedia.org/wiki/Netherlands)|
|Type|Bank Transfers|
|Processing currencies|[EUR](https://en.wikipedia.org/wiki/Euro)|
|Supported currencies| Refer to [currency codes](/reference/currencies)|
|Payment confirmation time|Instant|
|Payout time frame| NET 30|
|Chargebacks|No|
|Refunds|Yes|
|Onboarding required| No|
|Recurring Payments|No|
|Mobile UI|No|
|Opens new window|Yes after selecting bank|
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