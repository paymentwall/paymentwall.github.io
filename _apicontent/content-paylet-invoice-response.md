---
category: section-paylet-invoice-response
---

## Invoice response attributes

Invoice email will be sent automatically to the ```contacts[email]``` and you will get invoice overview in json format, below is the attributes of response.

##### Attributes

| Parameter | Description |
|---|---|
| invoice_number | Your invoice number passed in requests |
| application_id | Your project id in Paymentwall |
| date | Unix Timestamp value of the date you set for invoice |
| due_date | Unix Timestamp value of the due date you set for invoice |
| currency | Code of the currency you set for invoice in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) format |
| status | Status of Invoice. sent / paid / outstanding |
| email | Client's email. Invoice is sent to this email address |
| total_amount | Total price of invoice after invoice tax / invoice discount is applied |
| sub_total_amount | Total price of invoice products without invoice tax / invoice discount |
| invoice_id | Internal invoice ID |
| public_id | Public invoice ID sent to client |
| status_formatted | Formatted version of Invoice status |
| due_date_formatted | Formatted version of invoice due date |
| date_formatted | Formatted version of invoice date |
| view_url | URL to see the invoice |
| payment_url | URL to make payment for the invoice |
| pdf_url | URL to download PDF version of the invoice |
| owner | Array of your company information. You can set the information at Invoice > Settings tab. Please refer [Invoice](/payments/invoicing-home) for details |

The other attributes are same with the parameters you sent over request to [Invoice API](#section-paylet-invoice).