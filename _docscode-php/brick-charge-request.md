---
codeId: brick-charge-request
---
```php
<?php
Paymentwall_Config::getInstance()->set(array(
    'private_key' => 'YOUR_PRIVATE_KEY'
));

$parameters = $_POST;
$chargeInfo = array(
    'email' => $parameters['email'],
    'history[registration_date]' => '1489655092',
    'amount' => 9.99,
    'currency' => 'USD',
    'token' => $parameters['brick_token'],
    'fingerprint' => $parameters['brick_fingerprint'],
    'description' => 'Order #123'
);

$charge = new Paymentwall_Charge();
$charge->create($chargeInfo);
?>
```