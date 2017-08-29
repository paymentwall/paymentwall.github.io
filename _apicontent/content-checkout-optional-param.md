---
category: section-checkout-optional_parameter
---
## Optional Parameter

Optional parameters could be added as additional parameters in either [widget API](#section-widget) or [checkout API](#section-checkout-onetime) for extra needs.

##### Parameters

| Name | Description |
|:--|:--|
|success_url<br> **string**| URL of the page where the end-user should be redirected to after the payment is complete.|
|failure_url<br> **string**| URL of the page where the end-user should be redirected to after the payment is failed. It is used when the payment cannot be completed.  For credit card, user won’t be redirected to the failure_url page as he may solve some errors by using another card.|
|pingback_url<br> **string**| Optional URL of pingback listener script where pingbacks should be sent.  It overrides the default Pingback URL which sets up in Project Settings in Merchant Area. Please send request to (mailto:devsupport@paymentwall.com) for activating this feature.|
|lang<br> **string**| Language code to override the default geo-targeted language of the widget. 2 letters. eg: en. See [language codes](/reference/lang).|
|evaluation<br> **integer**|The value could be either 1 or 0. For test environment only.<br> If 1, everyone can see the content without being logged into the merchant account in the same browser session.|
|country_code <br> **string** | The length must be 2-character according to [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country. It overrides the location detected by ip.|
|merchant_order_id<br> **string** | When we get a request of checkout API, merchant-order-id is checked. If it is the same, we will warn users that the transaction has been made. Using merchant_order_id can help you to prevent duplicate orders. Please send email to (mailto:devsupport@paymentwall.com) to request for this feature.|
