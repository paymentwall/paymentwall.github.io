---
category: section-tools-payment-systems
---
## Payment Systems

Payment system API can retrieve the list of payment systems activated for a project in a specific country along with their names, logos and short codes.

##### Parameters

| Name | Description|
|---|---|
|country_code<br> *required*<br> **string**| Country code.<br> [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) code of the country.|
|currency_converted<br> **string**| Currency code of your product.<br>  Format by [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes). 3 letters.|
|include_pricepoints<br> **string**|1 or 0 to include pricepoints for Mobiamo.|
|key<br> *required*<br> **string**|The project key which can be found in Merchant Area→ My Projects.|
|sign_version<br> *required*<br> **integer**| Signature version. Version 2 uses MD5 and version 3 represents SHA256.|
|sign<br> *required*<br> **string**| The signature of widget.<br> Refer to [signature calculation](/reference/signature-calculation) for more details.|


### Payment system response

##### Attributes

| Name | Description|
|---|---|
|id| The payment system short code, ```ps```, could be used as [optional parameter](#section-param-optional).|
|name| Payment system name.|
|new_window| Payment methods require opening a new window or redirecting users to a new url.|
|img_url| URL of the payment system logo.|
|img_class | The class of image. Can be ignored as it doesn't have any usage.|
|ps_type_id| The payment method category of payment system. <br> 1 - Credit cards. 2 - Bank transfer. 3 - Prepaid cards. 4 - E-wallet. 5 - Mobile payment.|
