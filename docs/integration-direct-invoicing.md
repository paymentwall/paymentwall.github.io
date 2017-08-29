---
id: payments-direct-invoicing
title: Invoicing
sectionid: docs
permalink: integration/direct/invoicing-home
---

# Invoice

Paymentwall supports smart and organized e-invoicing solution. To activate it, 
contact devsupport@paymentwall.com and provide us with your Paymentwall account email address.
> Generate invoices within your system by integrating Paymentwall Invoice API. Refer to [Invoice API](/apis#section-invoicing) to guide you on the setup.

## Generate new Invoice
Once your account and project have been fully verified to use the Paymentwall Invoicing feature, 
the “Invoicing” tab will be enabled on your merchant area. 

<div class="docs-img">
    <img src="/textures/pic/integration/invoicing/invoice_menu.png" style="max-width: 100%">
</div>

To add new clients you want to send the invoices to, Go to the “Clients” tab under “Invoicing” and click on the “Add Client” button on the upper right part of the page.

<div class="docs-img">
    <img src="/textures/pic/integration/invoicing/invoice_client.png" style="max-width: 100%">
</div>

To add items for your invoice, Click "Add Item" on the upper right part of the page and provide the item details. 
Note that the Discount and Tax is only applied to one specific item.

<div class="docs-img">
    <img src="/textures/pic/integration/invoicing/invoice_item.png" style="max-width: 100%">
</div>

To add general taxes, click "Add Tax". Note that this tax is not applied to each item but for each invoice.

<div class="docs-img">
    <img src="/textures/pic/integration/invoicing/invoice_tax.png" style="max-width: 100%">
</div>

To give discounted price for your clients, you may use the "Discounts" tab. Click on "Add Discount" to generate a new discount. Note that this discount is not applied to each item but for each invoice. 

<div class="docs-img">
    <img src="/textures/pic/integration/invoicing/invoice_discount.png" style="max-width: 100%">
</div>

On the “Settings” tab, you can edit your company information which will be displayed on the user’s invoice.

<div class="docs-img">
    <img src="/textures/pic/integration/invoicing/invoice_setting.png" style="max-width: 100%">
</div>

You are ready to create a new invoice now.
On the "Invoices" tab, all the invoices which you have created will be displayed along with their corresponding status. 


<div class="docs-img">
    <img src="/textures/pic/integration/invoicing/invoice_list.png" style="max-width: 100%">
</div>

Click on "Add Invoice" at the upper right part of the page to create a new invoice.

<div class="docs-img">
    <img src="/textures/pic/integration/invoicing/invoice_blank.png" style="max-width: 100%">
</div>

Provide the invoice details. The client's information and the items that we've added above will be shown in a drop-down list.

<div class="docs-img">
    <img src="/textures/pic/integration/invoicing/invoice_new.png" style="max-width: 100%">
</div>

To apply a general Discount and Tax for this invoice, click on “Add discount” and “Add tax” as below and choose the one you which you prefer from the drop-down menu.

<div class="docs-img">
    <img src="/textures/pic/integration/invoicing/invoice_discount_tax.png" style="max-width: 100%">
</div>

Click “Send By Email” to send the invoice to the client.
This invoice will also be listed up on “Invoices” tab.

<div class="docs-img">
    <img src="/textures/pic/integration/invoicing/invoice_new_list.png" style="max-width: 100%">
</div>

Below is how the invoice will be displayed to your client. 
The client can pay with the available payment methods you’ve set on your invoicing project.

<div class="docs-img">
    <img src="/textures/pic/integration/invoicing/invoice_result.png" style="max-width: 100%">
</div>