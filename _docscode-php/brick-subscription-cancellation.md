---
codeId: brick-subscription-cancellation
---
```php
<?php
$subscription = new Paymentwall_Subscription('SUBSCRIPTION_ID');
$subscription->cancel();

echo $subscription->isActive();
?>
```