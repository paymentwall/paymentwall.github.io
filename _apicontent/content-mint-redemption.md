---
category: section-mint-redemption
---

## MINT redemption

This API is for merchants to allows users to redeem a MINT ePin.

##### Parameters

|Parameter|Description|
|---|---|
|amount<br> *required*<br> **int**|The amount of money to pay|
|currency<br> *required*<br> **string**| Currency code of the ePIN. Refer to [currency codes](/reference/currencies).|
|epin<br> *required*<br> **array**|List of ePINs to redeem <br> Currently, it is only possible to redeem one ePin at a time.|
|app_key<br> *required*<br> **string**|The project key which can be found in Merchant Area→ My Projects.|
|user_id<br> *required*<br> **string**|ID of the user in merchant's system|
