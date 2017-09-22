---
category: section-mobiamo-process
---

## Process payment

This API is to process the payment with the data collected from the users.

> *token* is expected to be sent as the value of custom HTTP header parameter ```Token``` by using this API. 

##### Parameters

| Name | Description|
|---|---|
|key<br> *required*<br> **string**|  The project key which can be found in Merchant Area→ My Projects.|
|uid<br> *required*<br> **string**| ID of the end-user in your system. The maximum length is 64. |
|ref<br> *required*<br> **string**| Reference ID of the transaction |
|flow<br> *required*<br> **string**| The flow returned from [initiate payment request](#initiate-payment) |
|data<br> *required*<br> **string**| The data you collect from users<br>1. Flow code: users' submitted pin code<br>2. Flow msisdn: users' submitted phone number |

### Response

##### Attributes

| Name | Description|
|---|---|
| success | Status of the request. Either ```true``` or ```false```|
| flow | The next flow for users to make payment. This is only applicable in certain countries. If it's empty, transaction is completed|
| instructions | Instruction for users to make payment if applicable.|
| error | Error description in case of failed request.|
| code | Error code in case of failed request.|