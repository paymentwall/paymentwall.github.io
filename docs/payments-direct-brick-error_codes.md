---
id: payments-direct-brick-error_codes
title: Error codes
sectionid: docs
permalink: payments/direct/brick/error-codes
---

# Error codes

This reference helps you to learn more about the error you might suffer while interacting with Brick.

## Onetime token creation error codes

|Error code|Description|
|---|---|
|200|Submitted request is empty.|
|223|Expiration date is empty or invalid.|
|224|Card number is empty or invalid.|
|225|CVV is empty or invalid.|
|231|Internal Error.|
|700|Internal Error.|
|2111| Public key is missing or invalid.|

## Failed payment

Once failing to perform charge/subscription request, Brick responds with JSON object including 4xx HTTP Response Status Codes.

```json
{
  "code": 3002,
  "error": "Wrong charge amount",
  "type": "Error"
}
```
In order to fetch the error object from response body, please make sure your application is able to read response from requests that return 4xx status code.

> For example, error 4007 (API key is invalid) is sent back with 401 status code.

## Failed payment error codes

| Error code | Description|
|-----|-----|
|1000| Internal Error. Please contact [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) to get help.|
|1001| Project isn't loaded.Please double check the API credentials|
|1003| Request payment method is not active. Please contact [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) to activate|
|3000| Charge not found.|
|3001| Permission denied.|
|3002| Wrong charge amount. Double check the performed amount in charge request |
|3003| Card number is missing or invalid. Retry payments and check payment details|
|3004| Expiration month is invalid.|
|3005| Expiration year is invalid.|
|3006| Expiration date is invalid.|
|3008| Please fill in all required fields.|
|3009| Billing address is invalid. Please correct the billing address and retry the transaction|
|3010| Please contact your credit card company to approve your payment|
|3011| Please contact your credit card company to check your available balance|
|3012| Transaction was declined|
|3013| Transaction was declined due to issues with the card|
|3014| Wrong CVV|
|3101| Please verify the credit card number and retry the transaction|
|3102| You submitted an expired credit card number. Please ensure the credit card is valid|
|3103| You have submitted a card which is not supported. Please, use Visa, MasterCard, AmEx or Discover credit card|
|3104| Country of the card is not supported|
|3111| Token was not found|
|3112| One-time token is invalid|
|3113| Test credentials are invalid|
|3114| Token was deleted|
|3115| Charge amount is too small. Default minimum is 0.50 USD. Please contact [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) to adjust|
|3116| Charge amount is too high. Default maximum is 500 USD. Please contact [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) to adjust|
|3200| Please retry the transaction or use another credit card|
|3201| The charge has already been fully refunded|
|3202| You can't cancel this transaction|
|3203| This charge is not found or already captured|
|3204| You can't refund this transaction|
|3205| Duplicate charge|
|3206| The authorization for this card has expired|
|3301| Please check first name|
|3302| Please check last name|
|3303| Please check address|
|3304| City is invalid, Please check city|
|3305| State is invalid, Please check State|
|3306| Please check Zip / Postal Code|
|3401| Wrong subscription period|
|3402| Subscription not found|
|3403| Wrong subscription period duration|
|3404| Some subscription trial parameters are missing|
|3405| Subscription trial period is invalid|
|3406| Subscription trial period duration is invalid|
|3407| Subscription trial amount is invalid|
|3408| Number of repeated payments in case of subscription failure is invalid|
|4004| Undefined method|
|4005| Request is empty|
|4006| API key is not provided|
|4007| API key is invalid|
|4008| Decryption failed|
|5000| Customer is not allowed to pay|
