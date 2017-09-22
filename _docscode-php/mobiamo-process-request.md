---
codeId: mobiamo-process-request
---
```php
$process = $mobiamo->processPayment(
	$token, 
	[
		'uid' => 'user40012', 
		'ref' => $ref, 
		'flow' => $flow, 
		'data' => 'USER_DATA'
	]
);
```