---
id: payments-direct-mobiamo
title: Mobiamo
permalink: integration/direct/mobiamo-home
sectionid: docs
---

# Mobiamo

[Mobiamo](http://www.mobiamo.com/) is a mobile SMS payment method which connects you to over 240 mobile network operators. You can build your own mobile payment experience into your application by integrating it.

***

## Integration

Integrating *Mobiamo Direct* only requires 4 steps:

* Step 1: [Get API token](#get-api-token)

* Step 2: [Initiate the payment](#initiate-payment)

* Step 3: [Process the payment](#process-payment).

* Step 4: [Handle Paymentwall pingback](#handle-pingback).

***

## Get API token

In order to get the ```token``` for the transaction, you can use the code sample below. Please refer to [get API token](/apis#section-mobiamo-token) for more information.

{% assign codeId = "mobiamo-token-request" %}
<div class="docs-code" id="{{ codeId }}">
  	<ul class="docs-code-tabs">
    	<li>
      		<a class="docs-code-tabs__tab is-active" lang="php">PHP</a>
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
</div>

If the request is performed successfully, the ```token``` will be included in the response. You will use the ```token``` for the next two steps. Here is the sample response

```json
{
	"success": true,
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDM2NDQ3NzIsImp0aSI6Ik5IcWN0QjZEbGR3bjNmQWxSZ1VuXC8zWkRhQjI1R1dvZlpSelJcL0JMYzNhTT0iLCJleHAiOjE1MDM3MzExNzIsImRhdGEiOnsibWVyY2hhbnRJZCI6IjIiLCJ0aW1lc3RhbXAiOiIxNTAzNjQ0NzEzIiwicHJvamVjdF9pZCI6IjE4MjgxNSJ9fQ.R5jLTYV23qRDaMbHZlun6MDFbWfK9xXTMzPIzNglr0A",
	"expire_time": 86400
}
```

***

## Initiate payment

After you get the ```token```, you can use it to initiate the payment along with the information about your product. The purpose of this step is to get the ```flow``` that the user will have to go through to make payment. The ```instructions``` for each flow is also included in the response. There are three main flows:

* ```msisdn```: you have to collect the phone number from user and this number will be sent in [Process payment](#process-payment) step to process the transaction.

> In certain countries, after you send the request to process the payment with the phone number, you will receive ```code``` flow in the response and you will have to send another request to fulfill the ```code``` flow

* ```code```: users receive the ```code``` after sending the message with the ```keyword``` to ```shortcode``` in the ```instructions``` and the ```code``` is sent in [Process payment](#process-payment) step.

* ```redirect```: if this flow is returned, there is no need to send process payment request. You only have to show the ```instructions``` on your site and the payment is done after the user send the message with ```keyword``` to ```shortcode``` in the ```instructions```

> Please note that ```carrier``` (ID of the mobile carrier) is expected to be sent in the request for some countries. The list of ID is provided in [Mobiamo Carriers](/integration/direct/mobiamo/mobiamo-carrier).

This line of code is to initiate the payment:

{% assign codeId = "mobiamo-initiate-request" %}
<div class="docs-code" id="{{ codeId }}">
  	<ul class="docs-code-tabs">
    	<li>
      		<a class="docs-code-tabs__tab is-active" lang="php">PHP</a>
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
</div>

Along with the ```flow``` and ```instructions```, ```ref``` is also sent in the response for you to prepare for [Process payment](#process-payment) step.

```json
{
	"ref": "w123456789",
	"flow": "msisdn",
	"instructions": {},
	"price": {
		"amount": 2000,
		"currency": "PHP",
		"formatted": "PHP 2,000.00",
		"carriers": [{
			"id": 255,
			"name": "Globe"
		}]
	},
	"product_name": "coins",
	"success": true
}
```

***

## Process payment

This request is to process the transaction with the information you collect from the users. What you need to pass in the parameter ```data``` depends on the flow you receive in [Initiate payment](#initiate-payment) step.

Here is the code sample to send the request:

{% assign codeId = "mobiamo-process-request" %}
<div class="docs-code" id="{{ codeId }}">
  	<ul class="docs-code-tabs">
    	<li>
      		<a class="docs-code-tabs__tab is-active" lang="php">PHP</a>
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
</div>

If the payment is successful you will receive response like the following:

```json
{
	"success": true
}
```

* For the case that is mentioned in [Initiate payment](#initiate-payment) step, ```code``` flow will be returned and you will have to send another request to process the payment with the ```code``` collected from users.

```json
{
	"success": true,
	"instructions": {
		"shortcode": "2800",
		"keyword": "PW2000",
		"info": "VAT included. For customer support, please contact us at support@mobiamo.com"
	},
	"flow": "code"
}
```

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

## Configuration

Configure your project in [merchant dashboard](https://api.paymentwall.com/developers/applications) to make it work properly with *Mobiamo Direct API*.

* Select *Your API* as *Digital Goods* in **Settings**.

* Fill the *Pingback URL* to receive asynchronous notification in **Settings**.

* Email to [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) with your project key to enable *Mobiamo Direct API* for your project.

> Please make sure you have enabled Mobiamo in **Payment System** section.
