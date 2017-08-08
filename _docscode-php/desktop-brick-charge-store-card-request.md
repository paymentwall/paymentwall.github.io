---
codeId: desktop-brick-charge-store-card-request
---
```php
<?php
$parameters = $_POST;     
$charge = new Paymentwall_Charge();
$charge->create(array(    
    'token' => 'PERMANENT_TOKEN', // replace it with the stored permanent token     
    'email' => $parameters['email'],
    'history[registration_date]' => '1489755092',
    'currency' => 'USD',
    'amount' => 9.99,     
    'fingerprint' => $parameters['brick_fingerprint'],     
    'description' => 'Order #123'     
));
?>
```