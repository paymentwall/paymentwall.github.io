---
id: payments-checkout-subscription
title: Subscriptions
sectionid: docs
permalink: payments/checkout/subscription
---

# Subscriptions

You can also setup subscription for your customers while using Custom price.

## API Call

The parameter ```ag_type``` should be set as ```subscription``` in API call. See code sample for [subscription](/apis#section-paylet-custom-subscription) to perform API Call.

## Subscription payment methods 

* PayPal, using [spiderpipe](/spiderpipe/paypal).

* Mercado pago.

* Qiwi Wallet.

* Credit cards.

* Mobiamo.

* SEPA.

## Subscription Schedule

Once a user makes his first payment via subscription, we sign him up for recurring billing.

We will automatically charge the user based on the subscription schedule. E.g. if you specify the product length as 1 month, we will charge the user every month. Next payment will happen the same day of the next month. If a payment happens on 30th of January, the next payment will be made in first days of March.

Every time a user is billed, we will send a new pingback.

Once the last charge happens Paymentwall will send a pingback with pingback ```type=13```,  which means the subscription is expired.

## Subscription failure

If a user has insufficient funds or a payment fails for any other reason, Paymentwall will make 2 reattempts (3 attempts in total) to charge the user. [Payment Status API](/apis#section-tools-payment-status) will report active status of the subscription and ```date_next``` will contain the date of the next attempt.

If all of the attempts fail, Paymentwall will stop the subscription.

> Once the subscription stopped, it will no longer process an attempt to charge the user for the next scheduled payment.

For this event Paymentwall will send a pingback with ```type=14```, means subscription payment failed.

## Subscription Cancellation

See [cancellation API](/apis#section-tools-cancellation) to stop subscription for your customers.

## Next Step

After implementing the paylet you need to implement the server side pingback script in order to receive the payments confirmations.

> [Pingbacks](/default-pingback).

Below links may also be helpful for you.

> [Test payment method](/sandbox/test-payment).

> [SpiderPipe](/spiderpipe-home).