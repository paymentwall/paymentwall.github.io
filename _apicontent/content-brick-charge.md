---
category: section-brick-charge
---
## Charge

##### Parameters

| Name | Description|
|---|---|
| amount <br> *required*<br>**number** | Amount to be charged. Default region is from 0.3 USD to 500 USD or equivalent currency. 2 decimal places is expected.|
| currency <br> *required* <br> **string** | Code of the currency, [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.|
| browser_ip <br> **string** | IP address of End-user. |
| browser_domain <br> **string** | Domain of the website where the payment is originating from. |
| description <br> *required* <br> **string** | Description for the payment. |
| email <br> *required*<br> **string** | Email of end-users. |
| timestamp <br> *required* <br> **timestamp** | Unix timestamp of the transaction date. Length limitation is 10.|
| fingerprint <br> *required* <br> **string** | Paymentwall-generated unique fingerprint of a purchase, used for fraud protection as well as advanced analytics. This field is automatically added as a hidden field to your credit card form when brick.js is used on [frontend](/direct/brick/create-form). |
| token <br> *required* <br> **string** | [Onetime token](#section-brick-onetime_token-object) generated for the card or [permanent token](#section-brick-charge-object) returned in ```card.token``` in [charge object](#section-brick-charge-object).|
| lang <br> **string**  | Language code for email receipt localization, format ISO alpha-2, [supported languages](/lang).|
| options[capture] <br> **boolean**  | Whether or not to immediately capture the charge. Default is true. To not capture, you can pass ```options[capture]=0```. By default merchants have 7 days to either capture or void an non captured authorized charge. |
| plan<br> **string**  | Identifies the product ID, send back as ```goodsid``` parameter in [pingbacks](/default-pingback-dg).|
| store_card<br> **boolean**  | Whether to tokenize credit card details for subsequent purchases and return Permanent Token parameter in [charge object](#section-brick-charge-object). Default value is 1. |
| uid <br> **string**  | Identifies the internal end-user ID within the system of merchants. Used for ```uid``` parameter in [pingbacks](/default-pingback-dg). If omitted, email is used as ```uid``` parameter in Pingbacks.|  
| custom <br> **array** | To receive these values via [pingbacks](/default-pingback), please add [custom pingback parameter](/pingback-custom-parameters) with ```name=custom``` and ```value=OWN```. |
| secure_redirect_url<br> **string**  | For 3D Secure payments: URL of the billing page where ```brick_secure_token``` and ```brick_charge_id``` should be sent via ```POST``` after the user completes 3D Secure step. It is recommended to embed ```brick_fingerprint``` and ```brick_token``` into this URL along with the order ID to subsequently pass them into the Charge.|
| secure_token<br> **string**  | 3D Secure token returned to the website after the user completing the 3D Secure step. **Required** for submitting additional information after 3D Secure step. |
| charge_id<br> **string**  | ID of the original Charge that was sent 3D Secure step. **Required** for submitting additional information after 3D secure step.|
| secure <br> **boolean**  | 3D Secure flow is enforced if secure=1 is passed. |

```browser_ip``` and ```browser_domain``` are required if you do not have ```fingerprint``` generated.