---
category: section-brick-subscription-object
---

## The subscription object

The array ```trial``` will be included in if trial product is enabled for its post-trial subscription.

##### Attributes

|Name|Description|
|---|---|
|active| Whether the subscription is activated.|
|charges| The charge ids in history payments.|
|date_next| Next charge date, in unix timestamp.|
|date_started| Subscription start date, in unix timestamp.|
|expired| Whether the subscription is expired.|
|id| Subscription id.|
|is_trial| Whether the subscription is in trial period.|
|object| Object type. |
|payments_limit| The remaining recurring billing time.|
|period| The subscription period, could be day/week/month.|
|period_duration| Length of subscription period.|
|started| Whether the subscription is started.|
|trial[active]| Whether the trial period is activated.|
|trial[date_next]| Next charge date, in unix timestamp.|
|trial[date_started]| Trial period start date, in unix timestamp.|
|trial[expired]| Whether the subscription is expired.|
|trial[id]| Subscription id.|
|trial[is_trial]| Whether the subscription is in trial period.|
|trial[object]| Object type. |
|trial[payments_limit]| The remaining recurring billing time of trial product.|
|trial[period]| The trial period, could be day/week/month.|
|trial[period_duration]| Length of trial period.|
|trial[started]| Whether the trial period is started.|
