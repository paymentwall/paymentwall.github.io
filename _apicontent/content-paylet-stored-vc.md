---
category: section-paylet-stored-vc
---
## Virtual Currency

If you are selling points, coins or credtis, virtual currency API can help you to set equivalent currency. Besides, you can also configure your price points for different payment systems. Refer to product configuration for [Virtual Currency](/payments/widget/virtual-currency).

##### Parameters

| Name | Description |
| :--|:--| 
|key<br> *required*<br> **string**| Log in to your Merchant Account to get the Project Key in General Settings of the project. |
|uid <br> *required*<br> **string**| Assigned ID of the end-user in your system who is viewing the widget. The ID must be unique per user. The maximum length is 64 characters.|
|widget <br> *required*<br> **string**| Can be created and obtained in the Widgets section of your project.|
|email <br> *required*<br> **string**| Email of end-user. Paymentwall will automatically send a receipt to the user once the payment is completed.|
|timestamp<br> *required*<br> **string**| Unix Timestamp of the current date. Maximum length is 10.|
|sign_version <br> *required*<br> **integer**| Signature version. Version 2 employs MD5 and version 3 utilizes SHA256.|
|sign <br> *required*<br> **string lowercase**| The signature of the widget. Refer to [Signature Calculation](/development/signature-calculation) for more details.|
|promo <br>  **array**| Apply promotion to products. Require sign_version 3. <br> eg: promo[0]=[type]=percent_bonus, promo[0][discount]=50,promo[0][minimum_amount]=2.95, promo[0][minimum_amount_currency]=EUR will add 50% of the amount of virtual currency for all prices that are greater than or equal to 2.95 EUR<br> |
