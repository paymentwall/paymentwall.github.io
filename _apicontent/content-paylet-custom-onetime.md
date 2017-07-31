---
category: section-checkout-onetime
---
## Onetime payment

##### Parameters

| Name | Description|
|---|---|
|key<br> *required*<br> **string**| The project key. Can be found in General Settings of the Project inside of your merchant account. |
|uid<br> *required*<br> **string**| ID of the end-user in your system. The maximum length is 64. |
|widget<br> *required*<br> **string**| Widget code. Can be obtained in the widget sections of your projects.|
|email<br> *required*<br> **string**| The email from end users. Paymentwall will automatically send a payment receipt to the user once his payment is successfully performed.|
|timestamp<br> *required*<br> **string**| Unix timestamp of the current date. The limitation of length is 10.|
|amount<br> *required*<br> **double**| The amount of your product. Default region is from 0.3 USD to 500 USD or equivalent currency. 2 decimal places is expected.|
|currencyCode<br> *required*<br> **string**| Currency code of your product. Format by [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes). 3 letters. |
|ag_name<br> *required*<br> **string**| Your product name. The maximum length is 256.|
|ag_external_id<br> *required*<br> **string**| ID of your product. Order reference ID could also be set here. We will communicate back to you via the pingback as goodsid parameter. The maximum length is 256. |
|ag_type<br> *required*<br> **string**| The payment type of your product. For onetime payment, it is required to be set to ```fixed```.|
|sign_version<br> *required*<br> **string**| The signature version. Version 2 uses MD5 and version 3 represents SHA256.|
|sign<br> *required*<br> **string lowercase**| The signature of widget. Refer to [signature calculation](/development/signature-calculation) for more details.|