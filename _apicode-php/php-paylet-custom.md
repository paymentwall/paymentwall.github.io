---
category: section-checkout
---

Initialization
```php
<?php
require_once('lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'api_type' => Paymentwall_Config::API_GOODS,
    'public_key' => 'YOUR_PROJECT_KEY',
    'private_key' => 'YOUR_SECRET_KEY'
));
?>
```