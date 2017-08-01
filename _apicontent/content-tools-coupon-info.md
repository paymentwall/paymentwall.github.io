---
category: section-tools-coupon-info
---
## Retrieving information about a coupon

##### Parameters

|Parameter|Description|
|---|---|
|key<br> *required*<br> **string**|The Project Key <br> Log in to your Merchant Account to get the Project Key in General Settings of the project|
|code<br> *required*<br> **string**|eg: TESTCOUPON<br> Code of coupon|
|timestamp<br> *required*<br> **int**|eg: 1484900291<br> Current UNIX time|
|sign<br> *required*<br> **string**|The Request Signature<br> All parameters must be put into signature calculation.<br> You MUST use [SHA256](/reference/signature-calculation) for signature algorithm.|