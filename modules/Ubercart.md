---
id: module-ubercart
title: Modules-Ubercart
permalink: modules/ubercart
sectionid: docs-modules
---

# Ubercart

Paymentwall module for Ubercart is a payment service for processing payments globally with over 150 payment methods worldwide: credit cards, bank transfers, prepaid cards, and mobile payments by SMS (direct carrier billing).

This tutorial assumes that you have a Paymentwall account. Please **[Sign up](https://api.paymentwall.com/pwaccount/signup?source=ubercart&mode=merchant)** if you don't have one.

***

## Download plug-in

Paymentwall's plug-in for Ubercart can be downloaded **[here](https://github.com/paymentwall)**.

> The plug-in is not updated for the latest versions of Ubercart. Any contribution from you on Github would be highly appreciated.

***

## Project configuration in Paymentwall system

+ Login to Paymentwall system with your account.

+ Go to **My Projects** tab. You will see your new project already created. ```Project Key``` and ```Secret Key``` will be needed later to finish the project setup on Ubercart admin panel.

	- In **Settings** section, please set your project type to **Digital Goods**.

	- Set **Pingback type** to URL.

	- Configure your **Pingback URL** to *http://[your-domain].com/paymentwall_pingback*

	- Choose the **Pingback Signature Version** to version 3.

> Remember to save changes at the bottom of **Settings** section.

+ In **Widgets** section, create a widget that you prefer. And save changes. You will see ```Widget code``` after widget creation, which will also be needed later on Ubercart admin panel.

***

## Setup Paymentwall module on your platform

+ In your AdminCP, please go to **Modules** section and click **Install new module** to install *Paymentwall*.

+ Once the module is installed, scroll down to **Ubercart** -> **Payment**, press the **Save Configuration** button.

+ Go to **Stores** -> **Configuration** -> **Payment Methods** section, activate *Paymentwall* and press the **Save Configuration** button

+ Click the **Settings** on payment methods configuration page and fill all the required fields.

> The ```Project Key``` and ```Secret Key``` can be found in your Paymentwall Account in **My Projects** tab. ```Widget code``` is available in your **Widgets** section of your Paymentwall project of Ubercart.

***

## Support

+ Paymentwall is compatible up to Drupal 6 & Ubercart 3.0.

+ List of available **Payment Methods** can be discovered [here](https://www.paymentwall.com/en/payment-methods).

***

## Next step

You can start to test payments of your projects.

> **[Refer to test payments with test method](/sandbox/test-payment)**

Once you make sure everything works smoothly, please submit your project to go live.

> **[See how to live your project](/guides/review-home)**