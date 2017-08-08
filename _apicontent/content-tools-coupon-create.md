---
category: section-tools-coupon-create
---
## Creating a coupon

##### Parameters

|Parameter|Description|
|---|---|
|key<br> *required*<br> **string**|The Project Key <br> Log in to your Merchant Account to get the Project Key in General Settings of the project|
|timestamp<br> *required*<br> **int**|Current UNIX time|
|sign<br> *required*<br> **string**|The Request Signature<br> All parameters must be put into signature calculation.<br> You MUST use [SHA256](/reference/signature-calculation) for signature algorithm.|
|percent_off <br> *required<span>*</span>*<br> **int**|Discount percentage<br> Value can be from 1 to 99.|
|amount_off <br> *required<span>*</span>*<br> **int**|Discount amount|
|currency_code  <br>  *required<span>*</span>*<br>  **string** |[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the discount amount|
|name<br> **string**|Coupon name, default value is *null*.|
|number_of_coupons<br> **int**|Number of coupons to be created<br> If multiple coupons are created and ```code``` parameter is provided, the coupon will be generated as follows: ```code```+*'random string'*.<br> If there is no ```code``` parameter in the request, a *'random string'* will be generated as the coupon code. Defaul value is *1*.|
|code<br> **string**|If ```number_of_coupons``` equals to 1, this parameter is the coupon code.<br> If ```number_of_coupons``` is more than 1, coupon codes will be generated using the following algorithm: ```code``` + *7 random digits*.|
|activate<br> **boolean**|Either 1 or 0<br> Activating coupon after creating.|
|max_redemptions<br> **int**|The number of times that coupon can be redeemed|
|expiration_date<br> **int**|Coupon expiration date<br> The ```expiration_date``` MUST be greater than the ```timestamp```.|


Either ```percent_off``` or ```amount_off``` should be included in the request, ```currency_code``` is required if you are using ```amount_off```.
