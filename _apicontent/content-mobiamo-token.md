---
category: section-mobiamo-token
---

## Get token 

Get token API is for you to get the token for the transactions with Mobiamo

> To activate it please email us at [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com).

##### Parameter

| Name | Description|
|---|---|
|key<br> *required*<br> **string**| The project key which can be found in Merchant Area→ My Projects.|
|uid<br> *required*<br> **string**| ID of the end-user in your system. The maximum length is 64.|
|sign_version<br> *required*<br> **string**| The signature version. Version 2 uses MD5 and version 3 represents SHA256.|
|ts<br> *required*<br> **string**| Unix timestamp when the request was initiated, in seconds.|
|sign<br> *required*<br> **string lowercase**| The signature of request. Refer to [signature calculation](/reference/signature-calculation) for more details.|

### Get token response

##### Attributes

| Name | Description|
|---|---|
| success | Status of the request. Either ```true``` or ```false```|
| token | The API token. This will be attached in the header in the next requests.|
| expire_time | The validation period of the token. If the token is invalid or expired, you must call this API again to get the new token.|