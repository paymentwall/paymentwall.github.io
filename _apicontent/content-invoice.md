---
category: section-invoicing
---
## Invoice

Paymentwall supports smart and organized e-invoicing solution. To activate it,
please send email to [devsupport@paymentwall.com](mailto:devsupport@paymentwall.com) with your email address in Paymentwall account.

> Refer [Invoice](/integration/invoicing-home) document to generate invoices via Paymentwall Merchant area.

##### Parameters

| Parameter | Description |
|---|---|
|invoice_number<br> *required*<br> **string**| Official Invoice number based on your paybook. |
|currency<br> *required*<br> **string**|  Refer to [currency codes](/reference/currencies) |
|date<br> *required*<br> **string**| Invoice date in mm/dd/yyyy format |
|due_date<br> *required*<br> **string**| Invoice due date in mm/dd/yyyy format |
|contacts<br> *required*<br> **array**| Array of your client's details. Please refer [Contact parameters](#contacts) |
|items<br> *required*<br> **array**| Array of your item's details. Please refer [Items parameters](#items) |
|taxes<br> **array**| Array of your Invoice taxes. Please refer [Taxes and Discount of Invoice parameters](#invoice-taxdiscount) |
|discounts<br> **array**| Array of your Invoice discounts. Please refer [Tax and Discount of Invoice parameters](#invoice-taxdiscount) |
|key<br> *required*<br> **string**| Your project public key |
|sign<br> *required*<br> **string**| Your signature based on your invoice parameters. Please refer to [Signature Calculation](/reference/signature-calculation) |
|sign_version<br> *required*<br> **string**| Version of signature |
