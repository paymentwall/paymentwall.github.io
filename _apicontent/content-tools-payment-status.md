---
category: section-tools-payment-status
---

## Payment Status

This API allows you to check the status of a payment via payment reference ID.

> To activate it please email us at [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com).

##### Parameters

|Name|Description|
|---|---|
|key<br> *required*<br> **string**| The Project Key<br> Log in to your Merchant Account to get the Project Key in General Settings of the project.|
|ref<br> *required*<br> **string**| Payment reference ID. <br>  Can be obtained from parameter ```ref``` in pingback request.|
|uid<br> **string**| ID of end-users in your system|
|ag_external_id<br> **string**| Can be obtained from parameter ```goodsid``` in pingback request. |
|sign_version<br> *required*<br> **integer**| Signature version<br> Version 2 employs MD5 and version 3 uses SHA256.|
|sign<br> *required*<br> **string**| The request signature.<br> Refer to [Signature Calculation](/reference/signature-calculation) for more details|

Parameter ```ref``` is not required if you have submitted ```uid``` and ```ag_external_id```.