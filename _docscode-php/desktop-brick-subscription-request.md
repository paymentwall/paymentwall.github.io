---
codeId: desktop-brick-subscription-request
---
```php
<?php
Paymentwall_Config::getInstance()->set(array(
    'private_key' => 'YOUR_PRIVATE_KEY'
));

$parameters = $_POST;
$subscriptionInfo = array(
    'token' => $_POST['brick_token'],
    'email' => $_POST['email'],
    'currency' => 'USD',
    'amount' => 10,
    'fingerprint' => $_POST['brick_fingerprint'],
    'plan' => 'product_123',
    'description' => 'Order #123',
    'period' => 'week',
    'period_duration' => 2
);

$subscription = new Paymentwall_Subscription();
$subscription->create($subscriptionInfo);
?>
```