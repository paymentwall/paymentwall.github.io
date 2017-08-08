---
codeId: pingback-listener-vc
---
```php
<?php
require_once('/path/to/paymentwall-php/lib/paymentwall.php');
Paymentwall_Base::setApiType(Paymentwall_Base::API_VC);
Paymentwall_Base::setAppKey('YOUR_PROJECT_KEY'); // available in your Paymentwall merchant area
Paymentwall_Base::setSecretKey('YOUR_SECRET_KEY'); // available in your Paymentwall merchant area
$pingback = new Paymentwall_Pingback($_GET, $_SERVER['REMOTE_ADDR']);
if ($pingback->validate()) {
    $virtualCurrency = $pingback->getVirtualCurrencyAmount();
    if ($pingback->isDeliverable()) {
        // deliver the virtual currency
    } else if ($pingback->isCancelable()) {
        // withdraw the virtual currency
    } else if ($pingback->isUnderReview()) {
        // set "pending" status to order
    }
    echo 'OK'; // Paymentwall expects response to be OK, otherwise the pingback will be resent
} else {
    echo $pingback->getErrorSummary();
}
?>
```