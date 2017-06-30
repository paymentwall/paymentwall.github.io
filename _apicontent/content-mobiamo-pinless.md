---
category: section-mobiamo-pinless
---

## Pinless

Pinless API can help you to build your own mobiamo payment form. It is activated by request.

> To activate it please email us at [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com).

##### Parameter

| Name | Description|
|---|---|
|key<br> *required*<br> **string**| The project key. Can be found in General Settings of the Project inside of your merchant account. |
|uid<br> *required*<br> **string**| ID of the end-user in your system. The maximum length is 64. |
|product_name<br> *required*<br> **string**| Your product name. The maximum length is 256. |
|product_id<br> *required*<br> **string**| ID of your product. |
|amount<br> *required*<br> **double**| The amount of your product. It should be set according to the [price points](http://www.mobiamo.com/coverage).|
|currencyCode<br> *required*<br> **string**| Currency code of your product. Needs to be used along with amount. 3 letters. |
|mnc<br> *required*<br> **string**| [Mobile network code](https://en.wikipedia.org/wiki/Mobile_country_code#National_operators). Required along with mcc to identify user's carrier and provide relevant instructions. |
|mcc<br> *required*<br> **string**| [Mobile country code](https://en.wikipedia.org/wiki/Mobile_country_code#National_operators). |
|ts<br> *required*<br> **string**| Unix timestamp when the request was initiated, in seconds. |
|sign_version<br> *required*<br> **string**| The signature version. Version 2 uses MD5 and version 3 represents SHA256.|
|sign<br> *required*<br> **string lowercase**| The signature of widget. Refer to [signature calculation](/signature-calculation) for more details.|

### Pinless response

##### Attributes

| Name| Description|
|---|---|
| transaction_id | The order ID of mobile operator.|
| keyword | The keyword which needs to be sent to mobile operator in the SMS message. |
| shortcode | A number where the mobile operator SMS message needs to be sent. |
| regulatory_text | The text which is required by carriers to be shown to your users before purchasing.|
| amount | Your product price amount. |
| currency | Your product currency. |
