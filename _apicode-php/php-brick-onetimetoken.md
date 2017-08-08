---
category: section-brick-onetime_token
---
Endpoint

```
 POST https://pwgateway.com/api/token (Live environment)
 
 POST https://api.paymentwall.com/api/brick/token (Sandbox environment)
```

Sample Request
```php
<?php
$tokenModel = new Paymentwall_OneTimeToken();
$token =  $tokenModel->create(array(
    'public_key' => 'YOUR_PUBLIC_KEY',
    'card[number]' => '4242424242424242',
    'card[exp_month]' => '11',
    'card[exp_year]' => '19',
    'card[cvv]' => '123'
));
// send token to charge via $token->getToken();
?>
```