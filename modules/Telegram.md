---
id: module-telegram
title: Modules-Telegram
permalink: modules/Telegram
sectionid: docs-modules
---

# Telegram

Paymentwall Bot for Telegram help you to connect your Merchant Bot with Paymentwall to accept payments with Credit Card from users.

The tutorial guides you step by step to successfully connect the Merchant Bot with Paymentwall.

## Setup a Paymentwall account

* Create a Paymentwall account using the following link:

[https://api.paymentwall.com/pwaccount?source=telegram](https://api.paymentwall.com/pwaccount?source=telegram)

* Click on "Business Profile" from the dashboard to fill in your company information and upload required documents

<div class="docs-img">
   <img src="https://www.paymentwall.com/uploaded/files/Step5-Cibilis-Paymentwall.png"/>
</div>

## Authenticate your Merchant Account on Telegram

To Authenticate your merchant bot to Paymentwall, please follow the guide below:

* In [@botfather](https://t.me/botfather) choose your bot and go to Bot Settings -> Payments -> Connect to Paymentwall Test Bot
* You will be redirect to Paymentwall bot with the Authorize button. Click on the button to login or register your Paymentwall account.  
* After the authentication, you will be redirected to [@botfather](https://t.me/botfather) with the new token.
* A new [telegram] project will be created under My projects section in your Paymentwall account, with Brick credit card processing enable.

## Setup your Merchant Bot on Telegram

Please see the [introduction to payments](https://core.telegram.org/bots/payments) for more details on the process and how to set up payments for your bot. Please note that users will need Telegram v.4.0 or higher to make payments.

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test cards](/payments/direct/brick/sandbox)**

* After you have tested everything and confirmed that your payments implementation works, you are ready to switch to LIVE MODE. To do this, in [@botfather](https://t.me/botfather) choose your bot and go to Bot Settings -> Payments -> Connect to Paymentwall LIVE Bot

* Go back to your Paymentwall Merchant Area -> My Projects, you will see your new project **YOUR-REGISTER-NAME[telegram]** created. Submit this project for approval by pressing the Submit For Review button.

* Fill in your bot link, put checkout commands in the test and password field in the Integration Checklist.

You can refer to the link below for go-live instruction.

> **[See how to live your project](/go_live-home)**
