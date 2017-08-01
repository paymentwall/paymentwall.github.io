---
id: payments-checkout-onetime
title: Onetime payment
sectionid: docs
permalink: integration/checkout/onetime
---

# Onetime Payments

By using onetime payments of Custom Prices, your customer do a instant payment for only one time. Non recurring billing will be applied.

## API Call

The parameter ```ag_type``` should be set as ```fixed``` in API call. See code sample for [onetime payments](/apis#section-checkout-onetime) to perform API Call.

## Next Step

After implementing the paylet you need to implement the server side pingback script in order to receive the payments confirmations.

> [Pingbacks](/reference/pingback-home).

Below links may also be helpful for you.

> [Test payment method](/sandbox/test-payment).

> [SpiderPipe](/guides/spiderpipe-home).