---
id: nav-payments-direct-mobiamo-flow
title: Payment flows
permalink: payments/direct/mobiamo/mobiamo-flow
sectionid: docs
---

# Payment flows

There are two flows with Mobiamo: DCB (Direct Carrier Billing) and PSMS (Premium SMS). Mobiamo flow depends on country and mobile carrier. 

## PSMS

* Step 1: User texts a **keyword** to a **shortcode** to receive **PIN code** in return.

<div class="docs-img">
	<img src="/textures/pic/mobiamo/psms.png">
</div>

* Step 2: User receives **PIN code** and input **PIN code** to comfirm the payment.

* Step 3: Payment is successful.

<br>

There are 2 types of PSMS: 

* MO (Mobile Originated): User gets charged immediately after texting keyword to shortcode

* MT (Mobile Terminated): User gets charged after receiving PIN code 

>PINLESS flow: For PSMS, PINLESS flow is applied in some countries: User can skip the second step (receive and enter PIN). The list of supported countries is published in this **[page]()**.

## DCB

* Step 1: User enters the phone number. A message with the **PIN code** will be sent to the inputed phone number.

<div class="docs-img">
	<img src="/textures/pic/mobiamo/dcb1.png">
</div>

* Step 2: User receives **PIN code** and input **PIN code** to comfirm the payment.

<div class="docs-img">
	<img src="/textures/pic/mobiamo/dcb2.png">
</div>

* Step 3: Payment is successful.

There are 2 types of DCB flow: Wifi and 3G. 

* For 3G flow, if the country supports direct connection with mobile carrier, it is possible for user to make payment with only one click and no verification step is required. Please visit this **[page]()** for list of applicable countries.