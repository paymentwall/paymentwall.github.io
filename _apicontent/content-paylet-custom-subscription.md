---
category: section-paylet-custom-subscription
---
## Subscription

##### Parameters

| Name | Description|
|---|---|
|key<br> *required*<br> **string**| The project key. Can be found in General Settings of the Project inside of your merchant account.|
|uid<br> *required*<br> **string**| ID of the end-user in your system. The maximum length is 64. |
|widget<br> *required*<br> **string**| Widget code. Can be obtained in the widget sections of your projects.|
|email<br> *required*<br> **string**| The email from end users. Paymentwall will automatically send a payment receipt to the user once his payment is successfully performed. |
|timestamp<br> *required*<br> **string**| Unix timestamp of the current date. The limitation of length is 10.|
|amount<br> *required*<br>  **double** | The amount of your product. Default region is from 0.5 USD to 500 USD or equivalent currency. 2 decimal places is expected.|
|currencyCode<br> *required*<br> **string**| Currency code of your product. Format by [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes). 3 letters. |
|ag_name<br> *required*<br> **string**| Your product name. The maximum length is 256. |
|ag_external_id<br> *required*<br> **string**| ID of your product. Reference ID could also be set here. We will communicate back to you via the pingback as goodsid parameter. The maximum length is 256. |
|ag_type<br> *required*<br> **string**| The payment type of your product. For subscription, it is required to be set to ```subscription```.|
|ag_period_length<br> *required*<br> **integer**| The length of your subscription duration. |
|ag_period_type<br> *required*<br> **string**| The type of your subscription duration. Required to be set to following types, day/week/month/year. |
|ag_recurring<br> *required*<br> **integer**| The value could be either 1 or 0. Wether the product is recurring. If product is trial it should always be 1. By default, recurring billing is only supported for product with duration of at least 3 days and less than 1 year.|
|ag_trail<br> **integer**| The value could be either 1 or 0. Whether the product is trial, 1 means trail. If  trail is enabled, parameters with * are required.|
|post_trail_amount*<br>  **double**| The amount of your trail product.  2 decimal places.|
|post_trial_currencyCode*<br> **string**| Currency code of your trail product. Format by ISO 4217. 3 letters.|
|ag_post_trial_name*<br> **string**| Your trail product name. The maximum length is 256.|
|ag_post_trial_external_id*<br> **string**| ID of your trail product. The maximum length is 256.|
|ag_post_trial_period_type*<br> **string**| The type of your subscription duration for trail products. Required to be set to following types, day/week/month/year. |
|ag_post_trial_period_length*<br> **integer**| The length of your subscription duration for trail products.|
|sign_version<br> *required*<br> **string**| The signature version. Version 2 uses MD5 and version 3 represents SHA256.|
|sign<br> *required*<br> **string lowercase**|The signature of widget. Refer to [signature calculation](/signature-calculation) for more details.|
