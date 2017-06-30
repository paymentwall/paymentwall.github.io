---
id: desktop-paylet-invoice
title: Invoice
sectionid: docs
permalink: paylet/invoice
---

# Invoice

Paymentwall supports smart and organized e-invoicing solution. To activate, 
please contact to devsupport@paymentwall.com with your Paymentwall account email address.
> Refer [Invoice API](/apis#section-paylet-invoice) to generate invoices with your system by integrating Paymentwall Invoice API.

## Generate new Invoice
After your account and project are verified to use Paymentwall invoicing feature, 
you will be able to see "Invoicing" tab on your merchant area.

<div class="docs-img">
    <img src="/textures/pic/paylet/invoice/invoice_menu.png" style="max-width: 100%">
</div>

Go to "Clients" tab under "Invoicing" to add new clients you want to send invoices. 
Click "Add Client" button on right top to add a new client. 

<div class="docs-img">
    <img src="/textures/pic/paylet/invoice/invoice_client.png" style="max-width: 100%">
</div>

You can add your invoice items at "Items" tab. Click "Add Item" on right top to add invoice item details.
Note Discount and Tax here is only apply for one specific item.

<div class="docs-img">
    <img src="/textures/pic/paylet/invoice/invoice_item.png" style="max-width: 100%">
</div>

Use "Taxes" tab to add general taxes. Click "Add Tax" to add new tax. Note this tax is not applied for each items but for each invoices.

<div class="docs-img">
    <img src="/textures/pic/paylet/invoice/invoice_tax.png" style="max-width: 100%">
</div>

"Discounts" tab is to give discounted price for clients. Click "Add Discount" to add new discount. Note this discount is not applied for each items but for each invoices.

<div class="docs-img">
    <img src="/textures/pic/paylet/invoice/invoice_discount.png" style="max-width: 100%">
</div>

On "Settings" tab, you can edit your company information which will be shown up on user's invoice screen.

<div class="docs-img">
    <img src="/textures/pic/paylet/invoice/invoice_setting.png" style="max-width: 100%">
</div>

You are ready to create a new invoice now.
Let's move to "Invoices" tab.
When you move to "Invoices", you will be able to see all invoices you created before and their status as well.

<div class="docs-img">
    <img src="/textures/pic/paylet/invoice/invoice_list.png" style="max-width: 100%">
</div>

Click "Add Invoice" on right top to create a new invoice.

<div class="docs-img">
    <img src="/textures/pic/paylet/invoice/invoice_blank.png" style="max-width: 100%">
</div>

Enter invoice details. Client's information and the item we added above will show up as drop-down list.

<div class="docs-img">
    <img src="/textures/pic/paylet/invoice/invoice_new.png" style="max-width: 100%">
</div>

To apply general Discount and Tax for this invoice, Please click "Add discount" and "Add tax" as below and choose one you want from the drop down menu.

<div class="docs-img">
    <img src="/textures/pic/paylet/invoice/invoice_discount_tax.png" style="max-width: 100%">
</div>

Click "Send By Email" to send the invoice to the client.
New invoice will also be listed up on "Invoices" tab.

<div class="docs-img">
    <img src="/textures/pic/paylet/invoice/invoice_new_list.png" style="max-width: 100%">
</div>

Below is how the invoice will be shown up for the client.
Client can pay with the available payment methods you've set on your invoice project.

<div class="docs-img">
    <img src="/textures/pic/paylet/invoice/invoice_result.png" style="max-width: 100%">
</div>
