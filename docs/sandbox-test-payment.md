---
id: sandbox-test-payment
title: Test Payment Method
sectionid: docs
permalink: sandbox/test-payment
---

# Test Payment Method

Test Payment method allows merchants to check how the payment process works from Paymentwall's end without making real payments. Please note that this test payment will also initate a test pingback and update your Transaction Sandbox Reporting.

You can find this method in Payment Systems tab of your your Project. By default it is deactivated, in order to activate it, please click the On/Off switch. Also, please activate the countries where you would like to test it using the Countries button.

<div class="docs-img">
	<img src="/textures/pic/sandbox/test-payment-method.png">
</div>

## Activating Test Method 

By default, Test Payment method is available only if project status is not LIVE. This prevents end-users from using this payment method.

For non LIVE project, please log into your merchant account in the same browser session. Alternatively, you can use the evaluation mode by doing either one of the followings:

 * Pass evaluation=1 parameter via the widget call (requires widget signature with at least version 2, more details on signature: Signature Calculation documentation).

 * Login to your merchant account, click on My Projects > Project Setting (Please make sure to choose the project that is mapped to the widget) > Evaluation mode > Turn On > Save. 

For LIVE project, you can always create a new one just for test purposes. Alternatively, you can pass test_mode=1 parameter via the widget call (requires widget signature with at least version 2, more details on signature: Signature Calculation documentation).

If you're using Paymentwall Uni widget (single payment option), you also need to pass ps=test parameter during the widget call.

## Payment Flow

* Widget

This is how Test Payment method is visible in the widget:

<div class="docs-img">
	<img src="/textures/pic/sandbox/test-payment-method-widget.png">
</div>

Upon clicking the Buy button, a Thank You page is displayed to the user. An example is described below.

* Thank you page

<div class="docs-img">
	<img src="/textures/pic/sandbox/test-payment-method-thankyou.png">
</div>

## Pingback

When Buy button in the widget is clicked for Test Payment method, a test pingback is sent. It has the actual parameters that are being passed into the widget or defined in the widget:

| uid | According to the value passed in uid parameter of the widget URL | 
| currency, goodsid, slength, speriod | According to the selection in the widget or according to widget params in case of Custom Price widget call for Digital Goods API |
| ref | Defined as t unix timestamp, e.g. t1356510177 |
| | any custom parameters that are passed into the widget if such parameters are configured |
