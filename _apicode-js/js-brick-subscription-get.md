---
category: section-brick-subscription-get
---

Endpoint
```
GET https://api.paymentwall.com/api/brick/subscription/$id
```


Sample Request

```javascript
var subscription = new Paymentwall.Subscription();
subscription.otherOperation(subscriptionid,'detail',function(response){
  response.getFullResponse('JSON');
});
```