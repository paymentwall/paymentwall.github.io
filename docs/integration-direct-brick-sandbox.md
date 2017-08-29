---
id: payments-direct-brick-sandbox
sectionid: docs
title: Sandbox Environment
permalink: integration/direct/brick/sandbox
---

# Brick Sandbox Payment

Test your project to make sure everything works smoothly before launching your project.

Paymentwall provides you with a standard Visa test card to test payments:

* 4242 4242 4242 4242

* 4000 0000 0000 0002

You should use a valid expiration date to test, otherwise Brick.js will report expiration date errors.

CVV/CSC could be set to any 3 or 4 digits number to test payments normally. Using CVV/VSC code below will result in a different outcome while performing a test payments.

| CVV/CSC| Description|
|----|----|
| 111| Error: Please ensure the CVV/CSC number is correct.|
| 222| Error: Please contact your credit card issuing bank to check your balance.|
| 333| Error: Please contact your credit card issuing bank to approve your payment.|
| 555| Review: Your payment is under risk review and will be accept automatically after 2 mins|
| 556| Review: Your payment is under risk review and will be declined automatically after 2 mis|
