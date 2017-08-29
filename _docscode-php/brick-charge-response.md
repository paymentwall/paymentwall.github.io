---
codeId: brick-charge-response
---
```php
<?php
$response = $charge->getPublicData();

if ($charge->isSuccessful()) {
    if ($charge->isCaptured()) {
    // redirect your customer to payment success page
    } elseif ($charge->isUnderReview()) {
    // redirect your customer to payment under review page
    }
} else {
    // redirect your customer to payment failure page
    $errors = json_decode($response, true);
    echo $errors['error']['code'];
    echo $errors['error']['message'];
}
?>
```