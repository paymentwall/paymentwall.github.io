---
id: development-review-technical
title: Technical Review
sectionid: docs
permalink: guides/review/technical
---

# Technical Review

The technical integration checklist is on the left side of the pop-up window. Check all the items on the checkbox to make sure that you have completed the basic integration requirements for our products.

<div class="docs-img">
	<img src="/textures/pic/guides/review/review-technical-checklist.png" style="width: 30%">
</div>

Provide us with the URL where the Paymentwall widget is placed on your website along with a test account. If you are using our product on mobile, replace the URL with a downloadable link of your application.

## Check points

Below are the check points for merchants who are using [widget API](/integration/widget-home) or [checkout API](/integration/checkout-home).

* Integrate a payment widget. It should be accessible on your website/application.

* User ID (uid) must be persistent and unique per user.

* Make a test payment using [Test Payment Method](/sandbox/test-payment).

+ If subscription is used, additional check points will be added.
	- Your website should show subscription conditions clearly.
	- Cancellation and refund policy is clearly accessible and visible in the website.

* Set up a [Pingback](/reference/pingback-home) listener in your server.

+ You need to respond ```ok``` to the following [pingback types](/reference/pingback-home#pingback-type).
	- Confirmation pingback with ```type=0```.
	- Negative pingback with ```type=2```.

* Pingbacks with duplicated ```ref``` parameter should be discarded to avoid delivering the same product twice for a customer.

* Pingbacks with wrong ```signature``` should be discarded.

* Pingbacks are being tracked and the product is being delivered.

## Brick check points

Below is the check points for merchants who are using [Brick](/integration/direct/brick-home).

* Payment page must be loaded via **HTTPS**.

* Client-side tokenization using Brick.js, fingerprint is included in Brick requests. 

* [3D secure](/integration/direct/brick/3dsecure) payment step is implemented.

* Your servers does NOT receive/handle customer's CC data.

+ If subscription is used, additional check points will be added.
	- Your website should show subscription conditions clearly.
	- Cancellation and refund policy is clearly accessible and visible in the website.

* Set up a [Pingback](/reference/pingback-home) listener in your server.

+ You need to respond ```ok``` to the following [pingback types](/reference/pingback-home#pingback-type).
	- Confirmation pingback with ```type=0```.
	- Negative pingback with ```type=2```.
	- Transaction pending pingback with ```type=200```.
	- Transaction accept pingback with ```type=201```.
	- Transaction decline pingback with ```type=202```.

* Pingbacks with duplicated ```ref``` parameter should be discarded to avoid delivering the same product twice for a customer.

* Pingbacks with wrong ```signature``` should be discarded.

* Pingbacks are being tracked and the product is being delivered.

## Relevant topics

> [Website Standards](/guides/review/website-standards).