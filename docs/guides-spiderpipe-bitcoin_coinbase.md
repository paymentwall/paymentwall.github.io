---
id: spiderpipe-payment_methods-bitcoin_coinbase
title: SpiderPipe Bitcoin Coinbase
sectionid: docs
permalink: guides/spiderpipe/bitcoin-coinbase
---

# SpiderPipe - Bitcoin via Coinbase

Steps to connect Coinbase account to Paymentwall.

* [Configure your Coinbase account](#configure-your-coinbase-account).

* [Add Coinbase account to Paymentwall](#add-coinbase-account-to-paymentwall).

## Configure your Coinbase account

* Log into your Coinbase account. 

* Please provide your Business details information under **Merchant profile** page, which is shown to users on your order pages and used for verification.

* In **Redirect URLs** section, fill in the following information.

```html
Success url: https://api.paymentwall.com/api/paymentpingback/coinbase-success
Cancel url: https://api.paymentwall.com/api/paymentpingback/coinbase-fail
Info url: https://api.paymentwall.com/api/paymentpingback/coinbase
```

Also uncheck **Allow the user to start a new payment after payment success or failure**.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/bitcoin-coinbase-merchants-api-settings.jpg" style="width: 80%">
</div>

* Under **Settings** page, find [API tab](https://www.coinbase.com/settings/api).

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/bitcoin-coinbase-settings-generate-apikey.jpg" style="width: 80%">
</div>

* Generate a new API key with full permission for BTC wallet.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/bitcoin-coinbase-settings-api-key.jpg" style="width: 80%">
</div>

You will see the permission like this.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/bitcoin-coinbase-settings-api-permission.jpg" style="width: 80%">
</div>

> We highly recommend to set up instant exchange of bitcoin orders to USD and credit them to your primary bank account once a day. You must link and verify a bank account before enabling this feature. You can then use Paymentwall reporting system to monitor your revenue.
CANCELSAVE


## Add Coinbase account to Paymentwall

* Log in to Paymentwall Developers Area, go to **Account Settings**.

* Find **SpiderPipe Accounts** and click **Add Payment account** button.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/pw-account_settings-add-spiderpipe-account.jpg" style="width: 80%">
</div>

* Select **Coinbase** and filling the fields.

<div class="docs-img">
	<img src="/textures/pic/spiderpipe/pw-account_settings-spiderpipe-select-coinbase.png" style="width: 80%">
</div>

## Next step

The setup for Bitcoin via Coinbase is finished, you may check below links.

> [Bitcoin via Bitpay](/guides/spiderpipe/bitcoin-bitpay).