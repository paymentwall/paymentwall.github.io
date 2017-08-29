---
category: section-widget-dg
---
## Digital Goods

You can set either onetime payment or subscription in ```products``` section for your projects. Refer to product configuration for [Digital Goods](/integration/widget/digital-goods).

##### Parameters

| Name | Description|
|---|---|
|key<br> *required*<br> **string**| The project key which can be found in Merchant Area→ My Projects. |
|uid<br> *required*<br> **string**| ID of the end-user in your system. The maximum length is 64.|
|widget<br> *required*<br> **string**| Widget code. Can be obtained in the widget sections of your projects.|
|email<br> *required*<br> **string**| The email of end users. Paymentwall will automatically send a payment receipt to the user once his payment is successfully performed.|
|timestamp<br> *required*<br> **string**| Unix timestamp of the current date. The limitation of length is 10. |
|ps<br> *required*<br> **string**|It determines which payment method to be shown on payment page.  Set it to ```all``` if you want to use selection form of payment methods provided by Paymentwall.  Refer to [payment system shortcodes](/reference/ps) to get the payment method code. |
|sign_version<br> *required* <br>  **integer** | The signature version. Version 2 uses MD5 and version 3 represents SHA256.|
|sign<br> *required*<br> **string lowercase**|The signature of widget.<br> Refer to [signature calculation](/reference/signature-calculation) for more details.|
