---
category: section-tools-cancellation
---

## Cancellation

This API allows to issue a request to refund a transaction or to cancel a recurring billing payment. If the response is successful, a ticket will be created under [Research and Refund](https://api.paymentwall.com/developers/crm/tickets) in your account.

> Note : If you are using test project key, ticket will not be generated. Please try again with LIVE project key with real transaction.

##### Parameters

|Parameter|Description|
|---|---|
|key<br> *required*<br> **string**|The project key which can be found in Merchant Area→ My Projects.|
|ref<br> *required*<br> **string**| Payment reference ID.<br> Can be obtained from parameter ```ref``` in pingback request. |
|type<br> *required*<br> **integer**| Type of the ticket:<br> 1. Refund<br> 2. Recurring billing cancellation<br> 3.Others|
|message<br> *required*<br> **string**| Description of the ticket, a short instruction about the reason of cancellation is expected.|
|sign_version<br> *required*<br> **integer**| Signature version<br> Version 2 employs MD5 and version 3 uses SHA256.|
|sign<br> *required*<br> **string lowercase**|The request signature. Refer to [Signature Calculation](/reference/signature-calculation) for more details.|
|test_mode <br> **integer**| Either 0 or 1.<br> 1 means that the API is used in test mode, in this case no real ```ref``` is required.|
|uid<br> **string**| ID of end-users in your system. ```ref``` is not required if ```uid``` is submitted.|
