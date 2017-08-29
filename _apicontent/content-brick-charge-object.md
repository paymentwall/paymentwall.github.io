---
category: section-brick-charge-object
---

## The charge object

##### Attributes

|Name|Description|
|---|---|
|amount| Price of product.|
|amount_paid| Payment amount. It Depends on what currency enduser is billed.|
|captured| Whether the payment is captured.|
|card[country]| Country of where user's credit card is issued.|
|card[exp_month]| Expiration month of user's credit card.|
|card[exp_year]| Expiration year of user's credit card.|
|card[name]| Credit card holder name.|
|card[token]| Permanent token. Refer to guide of [permanent token](/integration/direct/brick/charge).|
|card[type]| Credit card type.|
|created| Time when charge object is created, in unix timestamp.|
|currency| Currency of product.|
|currency_paid| Currency of end-user payment.|
|id| ID of charge object.|
|refunded| Whether the payment is refunded.|
|risk| Whether the payment is approved by Paymentwall risk system. |
|secure| Whether [3D Secure](/integration/direct/brick/3dsecure) is applied.|
|support_link| The link to get help for payment.|
