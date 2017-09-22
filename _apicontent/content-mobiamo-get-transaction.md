---
category: section-mobiamo-get-transaction
---

## Get transaction details

This API allows you to get the information about the transactions with Mobiamo API

> *token* is expected to be sent as the value of custom HTTP header parameter ```Token``` by using this API. 

##### Parameters

| Name | Description|
|---|---|
|key<br> *required*<br> **string**| The project key which can be found in Merchant Area→ My Projects.|
|uid<br> *required*<br> **string**| ID of the end-user in your system. The maximum length is 64. |
|ref<br> *required*<br> **string**| Reference ID of the transaction |

### Response

##### Attributes

| Name | Description|
|---|---|
| success | Status of the request. Either ```true``` or ```false```|
| ref | Reference ID of the transaction |
| completed | Whether the transaction has been completed or not. Can be either ```true``` or ```false```|
| amount | The price of the product|
| currency | Currency code of the product|
| country | Country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format of the transaction|
| product_name | The product name |
| product_id | ID of the product |
| is_recurring | Can be either ```true``` or ```false```. Whether the product is recurring|
| period | The type of your subscription duration|
| period_value | The length of your subscription duration |
| error | Error description in case of failed request.|
| code | Error code in case of failed request.|