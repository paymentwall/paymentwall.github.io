---
codeId: brick-charge-response
---
```javascript
charge.createCharge(function(brick_response){         
                                                                                                     
if(brick_response.isSuccessful()){
    if(brick_response.isCaptured()){
        charge_id = brick_response.getChargeId();
        // redirect your customer to payment success page
    } else if(brick_response.isUnderReview()){                    
        charge_id = brick_response.getChargeId();
        // redirect your customer to payment under review page
    } else if(brick_response.isUnder3DSecure()){
        // Handle 3d secure
        return_page = brick_response.get3DHtml();
    };
} else{
        // Redirect your customer to payment failure page
    error_code = brick_response.getErrorCode();     
    error_details = brick_response.getErrorDetails();
};

brick_response.getFullResponse();                     
brick_response.getFullResponse('JSON');         
});
```