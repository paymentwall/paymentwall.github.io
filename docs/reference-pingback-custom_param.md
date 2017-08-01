---
id: notification-pingback-custom_param
title: Pingback Custom Parameters
sectionid: docs
permalink: reference/pingback/custom-parameter
---

# Custom Parameters

You can get additional parameters via Pingback easily.<br> 
In **Project** > **Settings area**, **Custom Pingback Parameters** is where you can add custom parameters which you would like to receive from Pingback request.

## Parameter with own value

Parameter with OWN value are always the one which you have passed to us as custom parameters and want us to communicate it back to you via pingback. In this way, you can manage your custom data based on processed transactions.

| Value | Description |
|---|---|
|**OWN**| Your custom parameter which you passed when build widget. |

To use OWN custom parameter, please add your custom parameter as [addtional parameter](/paylet/widget/reference#additional-parameters).

Here we added ```my_custom_param``` as a parameter name and ```my custom value``` as a value that we want to get back from pingback request.

Once additional parameter is added, go to **Project** > **Settings** to add custom parameter ```my_custom_param```.

<div class="docs-img">
    <img src="/textures/pic/reference/pingback/customparameter_sample.png">
</div>

Done! When you receive pingback, you will find your custom parameter ```my_custom_param``` is also included having ```my custom value``` as a value in it. 
```
http://www.yourserver.com/anypath?goodsid=gold_membershipis_test=1my_custom_param=my custom valueref=b1493096790sign_version=2slength=1speriod=monthtype=0uid=pwuserac785c67092b858c5de5b7981e81a7db
```

> Please check [Android SDK](https://github.com/paymentwall/paymentwall-android-sdk) and [iOS SDK](https://github.com/paymentwall/paymentwall-ios-sdk) to check sample codes of how to add custom parameters.

## Parameter with value Paymentwall provides

Below parameters are the parameters Paymentwall supports you to receive with Pingback request without defining additional parameters in your Widget Call.

| Value | Description |
|---|---|
|**CHARGEBACK_REASON**<br> eg: 9| Reason code of the negative pingback, standard reason parameter of pingbacks<br> Please refer [Pingbacks](/reference/pingback-home) to get detailed information |
|**CHARGEBACK_REASON_VERBAL**<br> eg: Cancelled order| Verbal reason of the negative pingbacks |
|**CHARGEBACK_TYPE**<br> eg: refund / chargeback| Type of negative pingback |
|**CLICK_TYPE**<br> eg: payment / offer| Transaction type. Offer is the value when user earned credit due to offerwall |
|**COUNTRY_CODE**<br> eg: US| User country code alpha-2 |
|**COUNTRY_CODE_ALPHA3**<br> eg: USA| User country code alpha-3 |
|**COUNTRY_CODE_NAME**<br> eg: United States| User country name |
|**CURRENCY_CODE**<br> eg: USD| End-user payment currency code |
|**GOODSID**<br> eg: gold_membership| Product ID for Digital Goods API, standard goodsid parameter of pingbacks. By adding this parameter, you can get Product ID with parameter name you want |
|**PAYMENT_DATETIME**<br> eg: YYYY-MM-DD HH:MM:SS| Time of the payment |
|**PAYMENT_DATETIME_UTC**<br> eg: YYYY-MM-DD HH:MM:SS| Time of the payment in UTC timezone |
|**PAYMENT_TYPE**<br> eg: Credit Card| Either 'Offer' or specific payment system type as<br> Credit Card / Prepaid Card / Mobile / Bank Transfer / E-Wallet / Payment Kiosks / Crypto currencies|
|**PRODUCT_CURRENCY_CODE**<br> eg: USD| Product currency code (Digital Goods API) |
|**PRODUCT_CUSTOM_FIELD**| Custom field of the product |
|**PRODUCT_PRICE**| Product price (Digital Goods API) |
|**RECURRING_BILLING_ACTIVE**<br> eg: 0 / 1| If recurring billing is active for this payment |
|**RECURRING_BILLING_INITIAL_REF**| Reference ID of the first payment, if the current payment is recurring |
|**RECURRING_BILLING_NEXT_DATE**<br> eg: YYYY-MM-DD HH:MM:SS| Date of the next recurring payment |
|**RECURRING_PAYMENT**<br> eg: 0 / 1| If this payment is an automatic recurring payment |
|**REFERENCE_ID**<br> eg: b1493096790| Reference ID of the transaction, standard ref parameter of pingbacks. By adding this parameter, you can get Reference ID with parameter name you want |
|**REVENUE**| Revenue per transaction in USD, Net |
|**REVENUE_LOCAL**| Revenue per transaction in payment currency, Net |
|**REVENUE_PAYMENT**| End-user payment in USD |
|**REVENUE_PAYMENT_LOCAL**| End-user payment in local currency |
|**SIGNATURE**| Pingback signature, standard sig parameter of pingbacks. By adding this parameter, you can get signature value with parameter name you want |
|**STORED_CC**<br> eg: 0 / 1| If a stored Credit Card is used |
|**SUBSCRIPTION_ID**| ID of subscription ordered by user |
|**UNIQUE_REF**<br> eg: b1493096790_0| Reference ID concatenated with pingback type |
|**UNIQUE_REF_INITIAL**| For chargebacks - UNIQUE_REF of original payment, otherwise empty |
|**USER_ID**| User ID of your system |
|**USER_IP**| User IP address |
|**USER_PAYMENT_ACCOUNT_COUNTRY_CODE**<br> eg: US| Country code of the payment account in alpha-2, e.g. bank account country or CC BIN country |
|**VIRTUAL_CURRENCY**| Virtual currency amount received by end-user |
|**VIRTUAL_CURRENCY_UNDISCOUNTED**| Virtual currency amount without bonuses and discounts |
