---
category: section-mobiamo-pricepoint
---

## Pricepoint

Price Points API allows merchants to retrieve the list of [mobiamo price points](http://www.mobiamo.com/coverage) for a country.

##### Parameters

| Name | Description|
|---|---|
|country_code <br> *required* <br> **string**| Country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.|
|currency_converted <br> **string**| Currency code in [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217#Active_codes) format to be used for converting the price point amounts from local currency to the converted currency.|
|key <br> *required* <br> **string**| Project Key. Log in to your Merchant Account to get the project key in general settings of the project|
|ps <br> *required* <br> **string**| The value must be ```mobiamo```.|
|sign_version <br> *required*<br> **integer**| Signature version. Version 2 employs MD5 and version 3 uses SHA256.|
|sign <br> *required*<br> **string lowercase**| The request signature. Refer to [Signature Calculation](/development/signature-calculation) for more details.|
