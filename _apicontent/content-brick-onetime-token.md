---
category: section-brick-onetime_token
---
## Onetime token

Only PCI DSS certificated merchants can use this API.
It could help you to obtain one-time token without using Brick.js, but it will NOT return ```fingerprint```.
Please add ```browser_ip``` and ```browser_domain``` when you use [Charge API](#section-brick-charge) or [Subscription API](#section-brick-subscription).


##### Parameters

| name |  description |
|---|---|
| public_key<br>  *required* <br>  **string** | The project key which can be found in Merchant Area→ My Projects.|
| card[number]<br>  *required*<br>  **number** | User's Card number, the max length should be 16 digits.|
| card[exp_month]<br>  *required* <br>  **number** | Expiration month, 2 digits from 01 to 12.|
| card[exp_year]<br>  *required*<br> **number** | Expiration year, 4 digits.|
| card[cvv]<br> *required*<br> **number** | CVC/CVV, 3-4 digits depends on the type of credit cards.|
