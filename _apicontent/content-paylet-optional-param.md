---
category: section-checkout-optional_parameter
---
## Optional Parameter

Optional parameters could be added as additional parameters in [Paylet API request](#section-widget) for extra needs. 

##### Parameters

| Name | Description |
|:--|:--| 
|success_url<br> **string**| URL of the page where the end-user should be redirected to after the payment is complete. |
|failure_url<br> **string**| URL of the page where the end-user should be redirected to after the payment is failed. Only is used when there is no way to complete this payment with this method. For credit cards user is not redirected to this page as he can still correct the error by using another card.|
|ps<br> **string**| To specify one payment option which to display in the widget. Suitable widget: ```p1```, ```p2```, ```p10```, ```pw```. Refer to [Payment system codes](/reference/ps) page to get the parameter values for each payment option. |
|pingback_url<br> **string**| Optional URL of pingback listener script where pingbacks should be sent. Overrides the default Pingback URL set up in Project Settings inside of merchant account. Takes effect only if activated for the merchant account per request by sending email to [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com). |
|lang<br> **string**| Language code to override the default geo-targeted language of the widget. 2 letters. eg: en. See [language codes](/reference/lang).|
|evaluation<br> **integer**|The value could be either 1 or 0. For test environment only.<br> If 1, everyone can see the content without being logged into the merchant account in the same browser session.|
|country_code <br> **string** | The length must be 2-character according to [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country. Overrides the default geological location of user. Requires widget signature.|
|merchant_order_id<br> **string** | Our widget allows users to refresh the website to re-do payments by default, which may be conflict if you prefer to have your own ```orderId``` associated with only one transaction. Using ```merchant_order_id``` can help you to prevent duplicate orders. This feature also need to be activated by email us at [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com).|
