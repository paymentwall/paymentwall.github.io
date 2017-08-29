---
category: section-tools-delivery-confirmation-physical
---
## Physical

##### Parameters

|Parameter|Description|
|---|---|
|payment_id <br> *required* <br> **string**| Paymentwall reference ID of the transaction. Can be obtained from parameter ```ref``` in pingback request.|
|merchant_reference_id <br> *required* <br> **string**| The order ID of the transaction in your system. |
|type <br> *required* <br> **string**| Type of delivery, required to be set as ```physical```.|
|is_test<br> **integer**| Can be either 0 or 1. 1 means test API calls.|
|status <br> *required* <br> **string**|Refer to [Status](#section-tools-delivery-confirmation-status).|
|estimated_delivery_datetime <br> *required* <br> **date**| Estimated delivery date of the order. Format: 2017/01/15 15:04:55 +0500.|
|estimated_update_datetime <br> *required* <br> **date**| When the next status update is planned. Format: 2017/01/16 15:04:55 +0500.|
|reason <br> *required* <br> **string**| Additional description for the status update. Could be set as ```null``` if it is not convenient to provide.|
|refundable <br> *required* <br> **string**| Can be either true or false. Whether the order is refundable at this stage.|
|attachments <br> *required* <br> **array**| Array attachments of the proofs of delivery. URL of pictures is expected. Could be set as ```null``` if it is not convenient to provide. |
|details <br> *required* <br> **string**| Description of order status update to be showed to Paymentwall and recipient.|
|product_description<br> **string**| Description of the new product in case of substitution or change. |
|shipping_address[email]<br> *required*<br> **string**| The email address of your customers.|
|shipping_address[country] <br> *required* <br> **string**| Shipping address country, [ISO alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements).|
|shipping_address[city] <br> *required* <br> **string**| Shipping address city.|
|shipping_address[zip] <br> *required* <br> **string**| Shipping address zip/postal code.|
|shipping_address[state] <br> *required* <br> **string**| Shipping address state or province.|
|shipping_address[street] <br> *required* <br> **string**| Shipping address street.|
|shipping_address[phone] <br> *required* <br> **string**| Phone number of the recipient.|
|shipping_address[firstname] <br> *required* <br> **string**| Firstname of the recipient.|
|shipping_address[lastname] <br> *required* <br> **string**| Lastname of the recipient.|
