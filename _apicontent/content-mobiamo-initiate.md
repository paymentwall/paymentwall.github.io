---
category: section-mobiamo-initiate
---

## Initiate payment

This API is to initate the payment with Mobiamo and get the flow to instruct the users to make payment.

> *token* is expected to be sent as the value of custom HTTP header parameter ```Token``` by using this API. 

##### Parameters

| Name | Description|
|---|---|
|key<br> *required*<br> **string**|  The project key which can be found in Merchant Area→ My Projects.|
|uid<br> *required*<br> **string**| ID of the end-user in your system. The maximum length is 64. |
|amount<br> *required*<br> **double**| The amount of your product. It should be set according to the [price points](http://www.mobiamo.com/coverage).|
|currency<br> *required*<br> **string**| Currency code of your product. Needs to be used along with amount. 3 letters. Refer to [currency codes](/reference/currencies).|
|country<br> *required* <br> **string**| Country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.|
|product_name<br> *required*<br> **string**| Your product name. The maximum length is 256.|
|product_id<br> *required*<br> **string**| ID of your product. We will communicate back to you via the pingback as goodsid parameter. The maximum length is 256. |
|is_recurring<br> *optional*<br> **boolean**| Can be either ```true``` or ```false```. Whether the product is recurring. By default, recurring billing is only supported for product with duration of at least 3 days and less than 1 year.|
|period<br> *optional*<br> **string**| The type of your subscription duration. Required to be set to following types, value: day - week - month. |
|period_value<br> *optional*<br> **integer**| The length of your subscription duration. |
|carrier<br> *optional*<br> **string**| The ID of the mobile carrier. This parameter is required in some countries. The list of ID can be found in [Mobiamo Carriers](/integration/direct/mobiamo/mobiamo-carrier).|
|msisdn<br> *optional*<br> **string**| User's phone number in international format: [country code] + [mobile number without 0 at the beginning]|
|mnc<br> *optional*<br> **string**| [Mobile network code](https://en.wikipedia.org/wiki/Mobile_country_code#National_operators). Required along with mcc to identify user's carrier and provide relevant instructions. |
|mcc<br> *optional*<br> **string**| [Mobile country code](https://en.wikipedia.org/wiki/Mobile_country_code#National_operators).|

### Response

##### Attributes

| Name | Description|
|---|---|
| success | Status of the request. Either ```true``` or ```false```|
| ref | Reference ID of the transaction |
| flow | The flow of how to make payment:<br> 1. code: users send ```keyword``` to ```shortcode``` in ```instructions``` to receive a pin code. Then you send this code in [process payment request](#process-payment).<br> 2. msisdn: users enters phone number. The you send this phone number in [process payment request](#process-payment).<br> 3. redirect: You need to redirect users to the ```redirect_url``` in the ```instructions```.<br> The flow depends on the ```country```|
| price | An array includes information about the product.|
| instructions | Instruction parameters for users to make payment:<br>1. Flow code: ```keyword``` and ```shortcode``` are included<br>2. Flow redirect: ```redirect_url``` is included|
| error | Error description in case of failed request.|
| code | Error code in case of failed request.|