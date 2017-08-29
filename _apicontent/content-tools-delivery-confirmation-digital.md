---
category: section-tools-delivery-confirmation-digital
---
## Digital

##### Parameters

|Parameter|Description|
|---|---|
|payment_id <br> *required* <br> **string**| Paymentwall reference ID of the transaction. It can be obtained from parameter ```ref``` in pingback request.|
|merchant_reference_id <br> *required* <br> **string**| The order ID of the transaction in your system. |
|type <br> *required* <br> **string**| Type of delivery, required to be set as ```digital```.|
|is_test<br> **integer**| Can be either 0 or 1. 1 means test API calls.|
|status <br> *required* <br> **string**|Refer to [Status](#section-tools-delivery-confirmation-status).|
|estimated_delivery_datetime <br> *required* <br> **date**| Estimated delivery date of the order. Format: 2017/01/15 15:04:55 +0500.|
|estimated_update_datetime <br> *required* <br> **date**| When the next status is planned to update. Format: 2017/01/16 15:04:55 +0500.|
|reason <br> *required* <br> **string**| Additional description for the status updated. It can be set as ```null``` if it is not convenient to provide.|
|refundable <br> *required* <br> **string**| Either true or false. Whether the order is refundable at this stage.|
|attachments <br> *required* <br> **array**| Array attachments of the proofs of delivery. URL of pictures is expected. Could be set as ```null``` if it is not convenient to provide. |
|details <br> *required* <br> **string**| Description of order status which is showed to Paymentwall and recipient.|
|product_description<br> **string**| Description of the new product in case of subsitution or change. |
|shipping_address[email]<br> *required*<br> **string**| The email address of your customers.|
