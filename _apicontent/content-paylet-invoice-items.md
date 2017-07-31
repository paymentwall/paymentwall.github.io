---
category: section-invoicing-items
---

## Items

##### Parameters

| Parameter | Description |
|---|---|
|quantity<br> *required*<br> **int**| Number of item your client ordered |
|unit_cost<br> *required*<br> **float**| Price point of item |
|currency<br> *required*<br> **string**| Currency code in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)<br> ```Currency``` of **Invoice** and **Items** must be same. |
|title<br> *required*<br> **string**| Name of Item |
|description<br> **string**| Item description |
|tax<br> **array**| Item tax. Please refer [Taxes and Discount of Items parameters](#invoice-taxdiscount) |
|discount<br> **array**| Item discount. Please refer [Taxes and Discount of Items parameters](#item-taxdiscount) |
