---
category: section-paylet-stored-dg
---
## Digital Goods

You can set either onetime payment or subscription in ```products``` section for your projects. Refer to product configuration for [Digital Goods](/paylet/stored/dg).

##### Parameters

| Name | Description|
|---|---| 
|key<br> *required*<br> **string**| The project key. Can be found in General Settings of the Project inside of your merchant account. |
|uid<br> *required*<br> **string**| ID of the end-user in your system. The maximum length is 64.|
|widget<br> *required*<br> **string**| Widget code. Can be obtained in the widget sections of your projects.|
|email<br> *required*<br> **string**| The email from end users. Paymentwall will automatically send a payment receipt to the user once his payment is successfully performed.|
|timestamp<br> *required*<br> **string**| Unix timestamp of the current date. The limitation of length is 10. |
|sign_version<br> *required* <br>  **integer** | The signature version. Version 2 uses MD5 and version 3 represents SHA256.|
|sign<br> *required*<br> **string lowercase**|The signature of widget.<br> Refer to [signature calculation](/signature-calculation) for more details.|
