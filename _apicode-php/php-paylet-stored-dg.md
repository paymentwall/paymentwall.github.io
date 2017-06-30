---
category: section-paylet-stored-dg
---
Endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Sample Request
```php
<?php
require_once('lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'api_type' => Paymentwall_Config::API_GOODS,
    'public_key' => 'YOUR_PROJECT_KEY',
    'private_key' => 'YOUR_SECRET_KEY'
));

$widget = new Paymentwall_Widget(
    'userid', // uid
    'p1', // widget
    array() //empty product array for stored-product widget call
    array(
    	'email' => 'user@hostname.com', 
    	'timestamp' => 'transaction_current_timestamp',
    	'addtional_param_name' => 'addtional_param_value'
    )
);

echo $widget->getHtmlCode();
?>
```