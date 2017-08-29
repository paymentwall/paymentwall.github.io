---
codeId: brick-3dsecure-2nd-charge-request
---
```php
<?php
$cardInfo = array(
    ... // your original charge request parameters
);

if (isset($parameters['brick_charge_id']) AND isset($parameters['brick_secure_token'])) {
    $cardInfo['charge_id'] = $parameters['brick_charge_id'];
    $cardInfo['secure_token'] = $parameters['brick_secure_token'];
}
?>
```