---
category: section-checkout-server_side
---
## Server-side

Using server-side API allows you to send all the requested parameters in [Custom Price](#section-checkout) via server side and get a widget session key, a token that can be used for loading widget. Therefore the sending data won't be visible via the browser, such as unique order ID.
Your user can then be redirected to the widget using the generated widget session key.

> This feature can be activated by contacting us at [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com).

Steps to use Server-side API:

* Send all the requested parameters in either [onetime payment](#section-checkout-onetime) or [subscription](#section-checkout-subscription) to **standalone** request endpoint and get ```skey``` from the response object.

* Send ```skey``` to either *widget API* or *checkout API* request endpoint to load widget.

##### Paramters

|Name|Description|
|---|---|
|skey<br> *required* <br> **string**| Widget session key. |
