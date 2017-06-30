---
category: section-brick-subscription-object
---

## The subscription object

The array ```trail``` will be included in if trail product is enabled for its post-tail subscription. 

##### Attributes

|Name|Description|
|---|---|
|active| Whether the subscription is activated.|
|charges| The charge ids in history payments.|
|date_next| Next charge date, in unix timestamp.|
|date_started| Subscription start date, in unix timestamp.|
|expired| Whether the subscription is expired.|
|id| Subscription id.|
|is_trial| Whether the subscription is in trail period.|
|object| Object type. |
|payments_limit| The remaining recurring billing time.|
|period| The subscription period, could be day/week/month.|
|period_duration| Length of subscription period.|
|started| Whether the subscription is started.|
|trail[active]| Whether the trail period is activated.|
|trail[date_next]| Next charge date, in unix timestamp.|
|trail[date_started]| Trail period start date, in unix timestamp.|
|trail[expired]| Whether the subscription is expired.|
|trail[id]| Subscription id.|
|trail[is_trial]| Whether the subscription is in trail period.|
|trail[object]| Object type. |
|trail[payments_limit]| The remaining recurring billing time of trail product.|
|trail[period]| The trail period, could be day/week/month.|
|trail[period_duration]| Length of trail period.|
|trail[started]| Whether the trail period is started.|