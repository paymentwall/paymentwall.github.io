---
category: section-tools-geolocation
---

## Geolocation API

You can use this API call for client-side or server-side detection of user's location. This API also works tightly with Paymentwall Risk Scoring.

##### Parameters

|Name|Description|
|---|---|
|key<br> *required*<br> **string**| The Project Key.<br> Log in to your Merchant Account to get the Project Key in General Settings of the project. Project status should be LIVE to use this API.|
|uid<br> *required*<br> **string**| User's id. <br> User's account id used in your system.|
|user_ip<br> **string**|e.g. 255.255.255.255<br>IP address of the user.|
|callback<br> **string**|Callback function. Can be used for JSON on client side.|
