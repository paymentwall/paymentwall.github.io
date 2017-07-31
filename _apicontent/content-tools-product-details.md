---
category: section-tools-product-details
---

## Product Details

You can update the information of a product that is stored under Products Section in Paymentwall Merchant Area by using this API.

> To activate it please email us at [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com).

##### Parameters

|Name|Description|
|---|---|
|key<br> *required*<br> **string**| The Project Key.<br> Log in to your Merchant Account to get the Project Key in General Settings of the project.|
|ag_external_id<br> *required*<br> **string**| Product SKU ID. <br> Set up under Products Section in your Merchant Account. Also passed as ```goodsid``` in pingback request.|
|country_code<br> **string**| Country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format.<br> It is determined by user IP by default.|
|sign_version<br> *required*<br> int|eg: 2, 3<br> Signature version<br> Version 2 employs MD5 and version 3 uses SHA256.|
|sign<br> *required*<br> **string**|The request signature.<br> Refer to [Signature Calculation](/development/signature-calculation) for more details|
