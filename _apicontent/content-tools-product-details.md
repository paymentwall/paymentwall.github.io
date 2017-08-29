---
category: section-tools-product-details
---

## Product Details

You can update the information of a product that is stored under Products Section in Paymentwall merchant dashboard by using this API.

> To activate it please email us at [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com).

##### Parameters

|Name|Description|
|---|---|
|key<br> *required*<br> **string**| The project key which can be found in Merchant Area→ My Projects.|
|ag_external_id<br> *required*<br> **string**| Product SKU ID. <br> Set up under Products Section in your Merchant Account. It is also passed as ```goodsid``` in pingback request.|
|country_code<br> **string**| Country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) format.<br> It is determined by user IP by default.|
|sign_version<br> *required*<br> int|eg: 2, 3<br> Signature version<br> Version 2 uses MD5 and version 3 uses SHA256.|
|sign<br> *required*<br> **string**|The request signature.<br> Refer to [Signature Calculation](/reference/signature-calculation) for more details|
