---
category: section-brick-subscription
---

## Subscription

##### Parameters

| Name | Description|
|---|---|
| amount <br>  *required*<br> **number** | Amount to be charged. Default region is from 0.3 USD to 500 USD or equivalent currency. 2 decimal places is expected. |
| currency <br>  *required* <br>  **string** | Code of the currency, [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217#Active_codes) format.|
| browser_ip <br>  **string** | IP address of End-user. |
| browser_domain <br>  **string** | Domain of the website where the payment is originating from. |
| description <br>  *required* <br>  **string** | Description for the payment. |
| email <br>  *required*<br>  **string** | Email of end-users. |
| timestamp <br>  *required* <br>  **timestamp** | Unix timestamp of the transaction date. Length limitation is 10.|
| fingerprint <br>  *required* <br>  **string** | Paymentwall-generated unique fingerprint of a purchase, used for fraud protection as well as advanced analytics. This field is automatically added as a hidden field to your credit card form when brick.js is used on [frontend](#/brick/create-form). |
| token <br>  *required* <br>  **string** | [Onetime token](#section-brick-onetime_token-object) generated for the card or [permanent token](#section-brick-charge-object) returned in ```card.token``` in [charge object](#section-brick-charge-object).|
| lang <br>  **string**  | Language code for email receipt localization, format ISO alpha-2, [supported languages](/development/lang).|
| options[capture] <br>  **boolean**  | Whether or not to immediately capture the charge. Default is true. To not capture, you can pass ```options[capture]=0```. By default merchants have 7 days to either capture or void an non captured authorized charge. |
| plan<br>  **string**  | Identifies the product ID, send back as ```goodsid``` parameter in [pingbacks](/notification/pingback-home).|
| period <br>  *required*<br> **string** | day/week/month/year |
| period_duration<br>  *required*<br> **number** | Number of periods mentioned in the ```period``` parameter. By default minimum duration for recurring is 3 days. This can be adjusted by contacting [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com). |
| trial[amount] <br> **number** |Trial amount. Free trials are also supported, please contact [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) to have free trials active for your account |
| trial[currency]<br> **string** | Currency code of trail product.|
| trial[period]<br> **number** | Trial recurring period |
| trial[period_duration]<br> **string** |Trial recurring period duration. By default minimum duration is 3 days. This can be adjusted by contacting [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) |
| uid<br> **string**  | Identifies the internal end-user ID within merchant's system. Used for ```uid``` parameter in [Pingbacks](/notification/pingback-home). If omitted, email is used as ```uid``` parameter in Pingbacks |
| custom<br>  **array**  | To receive these values via [Pingbacks](/notification/pingback-home), please add [custom pingback parameter](/notification/pingback/custom-parameter) with ```name=custom``` and ```value=OWN```. |

```browser_ip``` and ```browser_domain``` are required if you do not have ```fingerprint``` generated.
