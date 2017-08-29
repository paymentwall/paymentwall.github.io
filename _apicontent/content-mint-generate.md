---
category: section-mint-generate
---

## Generate ePIN

You can use this api to generate ePin if you are a [MINT reseller](http://www.mintprepaid.com/).

##### Parameters

|Parameters|Description|
|---|---|
|auth[key]<br> *required*<br> **string**|API Public Key<br> Can be obtained under Settings of the Reseller Account|
|auth[timestamp]<br> *required*<br> **int**|Current UNIX time|
|auth[sign]<br> *required*<br> **string**|The request signature<br> Refer to this [link](/reference/signature-calculation) for signature algorithm|
|params[serviceId]<br> **int**|ID of the service to generate<br> Default value is 0, ePIN generated can be used in all services|
|params[currencyCode]<br> *required*<br> **string(3)**|ISO 4217 currency code of the ePIN value|
|params[ePinNominalValue]<br> *required*<br> **int**|Value of the ePIN|
|params[ePinsCount]<br> **int**|Quantity of the ePINs to generate<br> Default value is 1.|
|params[countryCode]<br> **string(2)**|[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country of service|
|params[activationRequired]<br> **boolean**|Can be either 0 or 1<br> If [1], it generates Inactive ePins. If [0] or omitted, it generates Active ePins.|
|params[test]<br> **boolean**|Can be either 0 or 1.<br> If [1], you will receive one of test keys to verify the response.|
