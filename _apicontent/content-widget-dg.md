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
|ps<br> *required*<br> **string**|It determines which payment method to be shown on payment page.  Required to be in lowercase. Set it to ```all``` if you want to use selection form of payment methods provided by Paymentwall.  Refer to [payment system shortcodes](/reference/ps) to get the payment method code. |
|sign_version<br> *required* <br>  **integer** | The signature version. Version 2 uses MD5 and version 3 represents SHA256.|
|sign<br> *required*<br> **string lowercase**|The signature of widget.<br> Refer to [signature calculation](/reference/signature-calculation) for more details.|
|default_goodsid<br> **string**| The id of the product which you want to be chosen by default in the widget.|
|hide_goodsid[]<br> **array** | Id of the products that should not be displayed in the widget (e.g. &hide_goodsid[0]=product_1&hide_goodsid[1]=product_2). The array needs to be indexed explicitly for correct request signature calculation (e.g. hide_goodsid[0]=product_1 and not hide_goodsid[]=product_1). |
|display_goodsid<br> **array** | Id of the product to display in the widget e.g. display_goodsid[0]=product_1&display_goodsid[1]=product_2, which should be indexed explicitly. |

You can also add [optional parameters](#section-param-optional) for extra needs or [user profile parameters](#section-param-user_profile) for risk scoring.