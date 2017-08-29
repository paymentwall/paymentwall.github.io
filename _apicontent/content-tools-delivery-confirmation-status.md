---
category: section-tools-delivery-confirmation-status
---
## Status

##### Possible values

|Name|Description|
|---|---|
|order_placed| Order has been placed within merchants system. <br> This status should be sent immediately after receiving a pingback.|
|order_preparing| Merchant started to look for ordered item in stock, processing the order.|
|started| The delivery has been started.|
|delivering| Item is being delivered.|
|delivered| Item has been delivered to the end-user. Attachment of delivery proof is expected in this case.|
|consumed| Item is consumed by the end-user. Eg: activation keys, in-game virtual currency.|
|waiting_user_action| User's action is requested to complete the delivery. Eg: check the item or pick it up.|
|delayed| Delay in delivery.<br> Parameter ```reason``` is required to specify the cause.|
|failed_will_retry| Delivery to end user failed. Waiting for retry.|
|order_cancelled| Order has been cancelled, waiting for refund or substitution.<br>Parameter ```reason``` is required to specify the cause. Eg: out of stock|
|retry_started| Attempt to retry on delivery.|
|refund_requested| End user made a refund request on the order.|
|refund_request_declined| Merchant decline request to refund.<br>Parameter ```reason``` is required to specify the cause.|
|refund_request_accepted| Order will be refunded.<br>Details parameter should include refund information.|
|refund_issued| The original payment has been refunded.<br>Details parameter should include refund information.<br>A call to [Cancellation API](#section-tools-cancellation) is needed for the refund of original payment.|
|cancelled_subscription| Cancel Subscription.|
|substitution_requested| Changes need to be made to the order after paid.<br>Parameter ```reason``` is required to specify the cause.|
|substitution_accepted|Changes have been accepted by merchant. Subsequent changes in the status - started or order_preparing are expected.|
|substitution_declined|	Changes have been declined by the merchant.<br>Parameter ```reason``` is required to specify the cause.|
