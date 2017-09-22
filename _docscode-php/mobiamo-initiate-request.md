---
codeId: mobiamo-initiate-request
---
```php
$initiate = $mobiamo->initPayment(
	$token, 
	[
		'uid' => 'user40012', 
		'amount' => 2000, 
		'currency' => 'PHP', 
		'country' => 'PH', 
		'product_id' => 123, 
		'product_name' => 'product101', 
		'carrier' => 255
	]
);
```