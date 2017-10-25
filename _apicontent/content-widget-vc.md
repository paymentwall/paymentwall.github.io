---
category: section-widget-vc
---
## Virtual Currency

If you are selling points, coins or credtis, virtual currency API can help you to set equivalent currency. Besides, you can also configure your price points for different payment systems. Refer to product configuration for [Virtual Currency](/integration/widget/virtual-currency).

##### Parameters

| Name | Description |
| :--|:--|
|key<br> *required*<br> **string**| The project key which can be found in Merchant Area→ My Projects. |
|uid <br> *required*<br> **string**| Assigned ID of the end-user in your system who is viewing the widget. The ID must be unique per user. The maximum length is 64 characters.|
|widget <br> *required*<br> **string**| Can be created and obtained in the Widgets section of your project.|
|email <br> *required*<br> **string**| Email of end-user. Paymentwall will automatically send a receipt to the user once the payment is completed.|
|timestamp<br> *required*<br> **string**| Unix Timestamp of the current date. Maximum length is 10.|
|ps<br> *required*<br> **string**|It determines which payment method to be shown on payment page.  Required to be in lowercase. Set it to ```all``` if you want to use selection form of payment methods provided by Paymentwall. Refer to [payment system shortcodes](/reference/ps) to get the payment method code. |
|sign_version <br> *required*<br> **integer**| Signature version. Version 2 employs MD5 and version 3 utilizes SHA256.|
|sign <br> *required*<br> **string lowercase**| The signature of the widget. Refer to [Signature Calculation](/reference/signature-calculation) for more details.|
|promo <br>  **array**| Apply promotion to products. Require sign_version 3.|

You can also add [optional parameters](#section-param-optional) for extra needs or [user profile parameters](#section-param-user_profile) for risk scoring.
