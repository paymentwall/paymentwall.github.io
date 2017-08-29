---
category: section-tools-coupon-info
---
## Retrieving information about a coupon

##### Parameters

|Parameter|Description|
|---|---|
|key<br> *required*<br> **string**|The project key which can be found in Merchant Area→ My Projects.|
|code<br> *required*<br> **string**|Eg: TESTCOUPON<br> Code of coupon|
|timestamp<br> *required*<br> **int**|eg: 1484900291<br> Current UNIX time|
|sign<br> *required*<br> **string**|The Request Signature<br> All parameters must be put into signature calculation.<br> You MUST use [SHA256](/reference/signature-calculation) for signature algorithm.|
