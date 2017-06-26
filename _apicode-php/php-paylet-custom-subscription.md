---
category: section-paylet-custom-subscription
---
Request endpoint
```
GET https://api.paymentwall.com/api/subscription
```

Code sample
```php
<?php
$widget = new Paymentwall_Widget(
  'user40012', // uid
  'p1_1', // widget
  array(
    new Paymentwall_Product(
      'product301', // ag_external_id
      9.99, // amount
      'USD', // currencyCode
      'Gold Membership', // ag_name
      Paymentwall_Product::TYPE_SUBSCRIPTION, // ag_type
      1, // ag_period_length
      Paymentwall_Product::PERIOD_TYPE_MONTH, // ag_period_type
      true // ag_recurring
    )
    ),
  array(
      'email' => 'user@hostname.com', 
      'timestamp' => 'transaction_current_timestamp',
      'addtional_param_name' => 'addtional_param_value' 
  )
);
echo $widget->getHtmlCode();
?>
```

