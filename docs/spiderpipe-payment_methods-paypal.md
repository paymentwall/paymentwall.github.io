---
id: spiderpipe-payment_methods-paypal
title: SpiderPipe PayPal
sectionid: docs
permalink: spiderpipe/payment-methods/paypal
---

# Spiderpipe - PayPal

There are several steps to connect your PayPal account to Paymentwall.

* [Create a paypal merchant account](#create-a-paypal-merchant-account). 

* [Configure IPN listener and callback url](#configure-ipn-listener-and-callback-url).

* [Configure your payment receiving preferences](#configure-your-payment-receiving-preferences).

* [Add your PayPal merchant account to Paymentwall](#add-your-paypal-merchant-account-to-paymentwall).

* [Multi-user access](#multi-user-access).

* [Payment data transfer](#payment-data-transfer).

## Create a paypal merchant account

In order to set up a PayPal payment method, a PayPal account needs to be created.
Please make sure that your PayPal account matches the following criterias.

* The account type should be BUSINESS.

* The account status must be verified.

* The linked credit card(s) should be confirmed.

* You should be able to receive payments in your country.

## Configure IPN listener and callback url

* Log in to your PayPal account.

* Click on your **account** icon.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-account.jpg" style="width: 80%">
</div>

* Click **Profile and Settings** on the popup menu.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-account-profile.jpg" style="width: 30%">
</div>

* Select **Selling Tools**.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-profile-selling_tools.jpg" style="width: 80%">
</div>

* Find **Instant Payment Notifications** on the menu and click on **Update**

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-profile-selling_tools-ipn-update.jpg" style="width: 80%">
</div>

* Click **Choose IPN Settings** to specify your listener's URL and activate the listener.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-ipn-settings.jpg" style="width: 80%">
</div>

* Specify the URL for your listener in the **Notification URL** field and check **Receive IPN messages (Enabled)** to enable your listener.

```html
https://api.paymentwall.com/api/paymentpingback/paypal
```

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-ipn-notification-url.jpg" style="width: 80%">
</div>

* Click **Save** and below screen should appear which shows your current settings:.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-ipn-current-settings.jpg" style="width: 40%">
</div>

## Configure your payment receiving preferences

* Click on the **Profile Settings** tab on your account.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-account-profile.jpg" style="width: 30%">
</div>

* Select **Selling Tools**. Find **Card Card statement name** in the opened menu and press **Update**.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-profile-selling_tools-cc-statement.jpg" style="width: 80%">
</div>

* In **Payment Receiving Preference** page, check the **Yes, accept them and convert them to...** option under the **Allow payments sent to me in a currency I do not hold** section. Fill in Credit Card Statement Name and Extended Credit Card Statement Name and click Save.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-payment_receiving_preference-extended-cc-name.jpg" style="width: 80%">
</div>

## Add your PayPal merchant account to Paymentwall

* Log in to your Paymentwall Merchant Account and click **Account Settings** on the menu.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/pw-merchant_area-account-settings.jpg" style="width: 20%">
</div>

* Choose **SpiderPipe Accounts** section under **Settings** and click on **Add Payment Account** button.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/pw-account_settings-add-spiderpipe-account.jpg" style="width: 80%">
</div>

* Select **PayPal** as the payment system.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/pw-account_settings-spiderpipe-select-paypal.jpg" style="width: 80%">
</div>

* Enter your primary email address.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/pw-account_settings-spiderpipe-paypal-primary-email.jpg" style="width: 80%">
</div>

The primary email address could be found at **My Business Information** tab in your PayPal account. You may also change it by clicking **Update**.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-profile-biz_information-email.jpg" style="width: 80%">
</div>

* Enter your API credentials and signature from your PayPal account.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/pw-account_settings-spiderpipe-paypal-api-details.jpg" style="width: 80%">
</div>

Click [here](https://www.paypal.com/cgi-bin/webscr?cmd=_profile-api-signature) to obtain your API credentials. On the opening website, click **Request API Credentials** on the API Access page. 

Select **Request API signature** and click **Agree and Submit** to generate a set of Signature credentials and click **Save**.

## Multi-user access

* Log in to your PayPal account and go to your profile page.

* Select **Account Settings** and click on the **Get Started** button under the **Manage Users** tab.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-profile-account_settings-manage-users.jpg" style="width: 80%">
</div>

* Click **Add User**.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-manage_user-add-user.jpg" style="width: 80%">
</div>

* Fill in the User’s settings, **User’s first and last name** should be set as ```Admin Paymentwall```.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-add_user-user-details.jpg" style="width: 40%">
</div>

Enter custom **User ID** and **Password** (shared with Paymentwall).

>  These credentials should be entered to the PayPal account setting at Paymentwall (Multi-User Access section – **User ID** and **Password** textfields). 

* Assign access.

In **Accounting** section, check **Refunds**, **Cancel Payments** and **Recurring Payments**.

In **Administration** section, check **View Profile**.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-add_user-user-access.jpg" style="width: 40%">
</div>

* Click on the **Save** button and confirm the sub account created, you should see below screenshot as confirmation.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-manage_user-subaccount.jpg" style="width: 80%">
</div>

## Payment data transfer

* Go to the **Profile and Settings** tab on your PayPal account.

* In the **Selling Tools** tab, click on **Update** under the **Website Preferences** option.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-profile-selling_tools-website-preference.jpg" style="width: 80%">
</div>

* Set both **Auto Return** and **Payment Data Transfer** (optional) to ON. Save your settings and go back to the **Website Payment Preferences** page.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-website_payment_preference.jpg" style="width: 80%">
</div>

* You can see that an **Identity Token** has been created. Paste this on Paymentwall side(Identity token section).

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/paypal-website_payment_preference-identity-token.jpg" style="width: 80%">
</div>

## Next Step

Congratulations!

Now you can start monitoring your PayPal payments with your Paymentwall account!